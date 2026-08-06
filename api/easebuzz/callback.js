import { verifyEasebuzzHash, updateOrderStatus } from '../payment/webhook.js';

export default async function handler(req, res) {
  try {
    let payload = req.body || {};
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch (e) {
        const params = new URLSearchParams(payload);
        payload = Object.fromEntries(params.entries());
      }
    }

    let statusParam = req.query?.status || payload?.status || '';
    const isSuccess = String(statusParam).toLowerCase() === 'success' || String(statusParam) === '1';

    if (payload && payload.txnid) {
      try {
        const salt = String(process.env.EASEBUZZ_SALT || '').trim();
        const key = String(process.env.EASEBUZZ_KEY || '').trim();
        const isValid = !payload.hash || verifyEasebuzzHash(payload, salt, key);
        if (isValid) {
          await updateOrderStatus(payload);
        }
      } catch (dbErr) {
        console.error('Error updating Firestore in Easebuzz callback:', dbErr);
      }
    }

    const redirectStatus = isSuccess ? 'success' : 'failed';
    return res.redirect(302, `/garena-checkout?status=${redirectStatus}`);
  } catch (err) {
    console.error('Easebuzz callback error:', err);
    return res.redirect(302, '/garena-checkout?status=failed');
  }
}

