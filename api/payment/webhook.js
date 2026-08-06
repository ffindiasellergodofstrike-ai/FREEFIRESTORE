import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { verifyWebhookHash } from '../utils/easebuzzHash.js';

export { verifyWebhookHash as verifyEasebuzzHash };

/**
 * Reads Firebase configuration from firebase-applet-config.json or environment variables
 */
function getFirebaseConfig() {
  try {
    const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
  } catch (err) {
    console.error('Error loading firebase-applet-config.json:', err);
  }
  return {
    projectId: process.env.FIREBASE_PROJECT_ID,
    appId: process.env.FIREBASE_APP_ID,
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firestoreDatabaseId: process.env.FIREBASE_DATABASE_ID,
  };
}

let db = null;
function getDb() {
  if (db) return db;
  const config = getFirebaseConfig();
  const app = getApps().length > 0 ? getApp() : initializeApp(config);
  db = config.firestoreDatabaseId
    ? getFirestore(app, config.firestoreDatabaseId)
    : getFirestore(app);
  return db;
}



/**
 * Updates or creates order status in Firestore collection 'orders'
 */
export async function updateOrderStatus(payload) {
  const firestore = getDb();
  const ordersRef = collection(firestore, 'orders');

  const cleanTxnid = String(payload.txnid || '').trim();
  if (!cleanTxnid) {
    throw new Error('txnid is missing from payload');
  }

  const docRef = doc(firestore, 'orders', cleanTxnid);
  const q = query(ordersRef, where('txnid', '==', cleanTxnid));
  const querySnapshot = await getDocs(q);

  const updateData = {
    status: String(payload.status || 'pending').toLowerCase(),
    easepayid: payload.easepayid || payload.easepay_id || null,
    paidAmount: payload.amount || null,
    email: payload.email || null,
    phone: payload.phone || null,
    updatedAt: serverTimestamp(),
    webhookReceivedAt: serverTimestamp(),
  };

  if (!querySnapshot.empty) {
    const promises = querySnapshot.docs.map((docSnap) =>
      updateDoc(docSnap.ref, updateData)
    );
    await Promise.all(promises);
  } else {
    await setDoc(docRef, {
      txnid: cleanTxnid,
      productinfo: payload.productinfo || 'Order',
      createdAt: serverTimestamp(),
      ...updateData,
    });
  }
}

/**
 * Vercel Serverless / Express Webhook Handler: POST /api/payment/webhook
 */
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).send('success');
  }

  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'text/plain');
    return res.status(405).send('failure');
  }

  try {
    const salt = String(process.env.EASEBUZZ_SALT || '').trim();
    const key = String(process.env.EASEBUZZ_KEY || '').trim();

    if (!salt) {
      console.error('EASEBUZZ_SALT is not configured.');
      res.setHeader('Content-Type', 'text/plain');
      return res.status(500).send('failure');
    }

    let payload = req.body || {};
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch (e) {
        const params = new URLSearchParams(payload);
        payload = Object.fromEntries(params.entries());
      }
    }

    const isValid = verifyEasebuzzHash(payload, salt, key);
    if (!isValid) {
      console.error('Webhook hash verification failed for txnid:', payload.txnid);
      res.setHeader('Content-Type', 'text/plain');
      return res.status(400).send('failure');
    }

    await updateOrderStatus(payload);

    console.log(`Webhook successfully processed for txnid: ${payload.txnid}, status: ${payload.status}`);
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send('success');
  } catch (err) {
    console.error('Error processing Easebuzz webhook:', err);
    res.setHeader('Content-Type', 'text/plain');
    return res.status(400).send('failure');
  }
}
