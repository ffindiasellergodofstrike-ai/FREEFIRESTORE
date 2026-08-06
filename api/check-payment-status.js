import crypto from 'crypto';
import { updateOrderStatus } from './payment/webhook.js';

/**
 * Generates SHA512 hash for Easebuzz Transaction Retrieve API
 * Sequence: key|txnid|salt
 */
function generateRetrieveHash(key, txnid, salt) {
  const str = `${key}|${txnid}|${salt}`;
  return crypto.createHash('sha512').update(str).digest('hex').toLowerCase();
}

/**
 * Vercel Serverless / Express Handler: GET /api/check-payment-status?txnid={txnid}
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ status: 'failure', error: 'Method Not Allowed' });
  }

  const txnid = String(req.query?.txnid || req.body?.txnid || '').trim();
  if (!txnid) {
    return res.status(400).json({ status: 'failure', error: 'txnid query parameter is required' });
  }

  const key = String(process.env.EASEBUZZ_KEY || '').trim();
  const salt = String(process.env.EASEBUZZ_SALT || '').trim();

  if (!key || !salt) {
    console.error('EASEBUZZ_KEY or EASEBUZZ_SALT environment variables missing.');
    return res.status(500).json({ status: 'pending', error: 'Server configuration error' });
  }

  const hash = generateRetrieveHash(key, txnid, salt);

  const params = new URLSearchParams();
  params.append('key', key);
  params.append('txnid', txnid);
  params.append('hash', hash);

  try {
    // Attempt Easebuzz Retrieve Transaction API
    const EASEBUZZ_RETRIEVE_URL = 'https://pay.easebuzz.in/transaction/v1/retrieve';

    const response = await fetch(EASEBUZZ_RETRIEVE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: params.toString()
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse Easebuzz retrieve response:', responseText);
      data = null;
    }

    if (data && (data.status === 1 || data.status === '1' || data.status === true)) {
      const msg = data.msg || data.data || {};
      const rawStatus = String(msg.status || data.status_desc || '').toLowerCase();

      let normalizedStatus = 'pending';
      if (['success', 'successful', 'captured', '1'].includes(rawStatus)) {
        normalizedStatus = 'success';
      } else if (['failure', 'failed', 'usercancelled', 'cancelled', '0'].includes(rawStatus)) {
        normalizedStatus = 'failure';
      }

      // Update Firestore asynchronously
      if (msg.txnid) {
        updateOrderStatus({
          txnid: msg.txnid,
          status: normalizedStatus,
          easepayid: msg.easepayid || msg.easepay_id,
          amount: msg.amount,
          email: msg.email,
          phone: msg.phone,
          productinfo: msg.productinfo
        }).catch((err) => console.error('Error updating Firestore in check-payment-status:', err));
      }

      return res.status(200).json({
        status: normalizedStatus,
        transaction_status: normalizedStatus,
        txnid: txnid,
        raw: msg
      });
    }

    // If Easebuzz returns status 0 or record not found
    return res.status(200).json({
      status: 'pending',
      txnid: txnid,
      message: data?.msg || data?.error_desc || 'Transaction pending or not found yet'
    });

  } catch (err) {
    console.error('Error calling Easebuzz retrieve API:', err);
    return res.status(500).json({
      status: 'pending',
      error: 'Error checking transaction status'
    });
  }
}
