import crypto from 'crypto';

/**
 * Helper to generate server-side IST timestamped payment authorization note for udf1
 * Format: "Customer authorized payment of INR {amount}. Order placed voluntarily. Terms and conditions accepted. Date: DD/MM/YYYY, HH:MM:SS am/pm IST"
 */
function generatePaymentAuthNote(amount) {
  const now = new Date();
  // Offset UTC time to India Standard Time (UTC+5:30)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5));

  const day = String(istDate.getDate()).padStart(2, '0');
  const month = String(istDate.getMonth() + 1).padStart(2, '0');
  const year = istDate.getFullYear();

  let hours = istDate.getHours();
  const minutes = String(istDate.getMinutes()).padStart(2, '0');
  const seconds = String(istDate.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12;
  hours = hours ? hours : 12; // Hour '0' convert to '12'
  const hoursStr = String(hours).padStart(2, '0');

  const dateStr = `${day}-${month}-${year}`;
  const timeStr = `${hoursStr} ${minutes} ${seconds} ${ampm.toUpperCase()}`;

  // Clean note containing alphanumeric characters, hyphens, and spaces
  const note = `Customer authorized payment of INR ${amount} Date ${dateStr} Time ${timeStr} IST`;
  return note.replace(/[^a-zA-Z0-9 -]/g, '').trim().substring(0, 100);
}

/**
 * Vercel Serverless Function: Easebuzz Payment Initiation
 * Endpoint: POST /api/initiate-payment
 */
export default async function handler(req, res) {
  // 1. CORS headers for OPTIONS and POST requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Enforce POST method
  if (req.method !== 'POST') {
    return res.status(405).json({
      status: 0,
      error: 'Method Not Allowed. Only POST requests are accepted.'
    });
  }

  try {
    // 2. Read merchant key and salt from environment variables
    const key = String(process.env.EASEBUZZ_KEY || '').trim();
    const salt = String(process.env.EASEBUZZ_SALT || '').trim();

    if (!key || !salt) {
      console.error('Missing EASEBUZZ_KEY or EASEBUZZ_SALT environment variables.');
      return res.status(500).json({
        status: 0,
        error: 'Server configuration error: EASEBUZZ_KEY and EASEBUZZ_SALT environment variables are required.'
      });
    }

    // 3. Parse JSON request body
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { txnid, amount, productinfo, firstname, email, phone, uid, surl, furl } = body;

    if (!txnid || !amount || !productinfo || !firstname || !email || !phone) {
      return res.status(400).json({
        status: 0,
        error: 'Missing required fields: txnid, amount, productinfo, firstname, email, and phone are mandatory.'
      });
    }

    const finalSurl = surl || `${req.headers.origin || 'http://localhost:3000'}/payment-success`;
    const finalFurl = furl || `${req.headers.origin || 'http://localhost:3000'}/payment-failure`;

    // 4. Sanitize parameters for Easebuzz field specifications
    const cleanTxnid = String(txnid).trim();
    const cleanAmount = parseFloat(amount).toFixed(2);
    const cleanProductinfo = String(productinfo).replace(/[^a-zA-Z0-9 ]/g, '').trim().substring(0, 50) || 'HomeAndFashionItem';
    const cleanFirstname = String(firstname).replace(/[^a-zA-Z0-9 ]/g, '').trim() || 'Customer';
    const cleanPhone = String(phone).replace(/[^0-9]/g, '');
    const cleanEmail = String(email).trim().toLowerCase();

    // Sanitize UID to contain numbers only
    const cleanUid = String(uid || '').replace(/[^0-9]/g, '');

    // Dynamically generate server-side udf1 authorization note in IST (strictly alphanumeric + spaces)
    const udf1 = generatePaymentAuthNote(cleanAmount);
    const udf2 = cleanUid;

    // 5. Generate SHA512 hash using exact 17-field sequence:
    // key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt
    const hashFields = [
      key,
      cleanTxnid,
      cleanAmount,
      cleanProductinfo,
      cleanFirstname,
      cleanEmail,
      udf1,
      udf2, // udf2 (numeric UID)
      '', // udf3
      '', // udf4
      '', // udf5
      '', // udf6
      '', // udf7
      '', // udf8
      '', // udf9
      '', // udf10
      salt
    ];
    const hashSequence = hashFields.join('|');
    const hash = crypto.createHash('sha512').update(hashSequence).digest('hex').toLowerCase();

    // 6. Build form-urlencoded request payload for Easebuzz API
    const params = new URLSearchParams();
    params.append('key', key);
    params.append('txnid', cleanTxnid);
    params.append('amount', cleanAmount);
    params.append('productinfo', cleanProductinfo);
    params.append('firstname', cleanFirstname);
    params.append('email', cleanEmail);
    params.append('phone', cleanPhone);
    params.append('hash', hash);
    params.append('surl', finalSurl);
    params.append('furl', finalFurl);
    params.append('udf1', udf1);
    if (udf2) {
      params.append('udf2', udf2);
    }

    // 7. Call Easebuzz Production Initiate Payment API
    const EASEBUZZ_URL = 'https://pay.easebuzz.in/payment/initiateLink';

    const easebuzzResponse = await fetch(EASEBUZZ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: params.toString()
    });

    const responseText = await easebuzzResponse.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseErr) {
      console.error('Failed to parse response from Easebuzz gateway:', responseText);
      return res.status(502).json({
        status: 0,
        error: 'Invalid response from Easebuzz payment gateway.',
        details: responseText
      });
    }

    // 8. Return access_key and merchant_key on status 1
    if (data.status === 1 || data.status === '1') {
      const accessKey = typeof data.data === 'string' ? data.data : (data.data?.access_key || data.access_key);
      return res.status(200).json({
        access_key: accessKey,
        merchant_key: key
      });
    } else {
      console.error('Easebuzz initiate payment failed:', data);
      return res.status(400).json({
        status: 0,
        error: data.error_desc || data.data || 'Payment initiation failed at Easebuzz gateway.',
        details: data
      });
    }

  } catch (err) {
    console.error('Error in initiate-payment handler:', err);
    return res.status(500).json({
      status: 0,
      error: 'Internal server error while processing Easebuzz payment request.',
      message: err.message
    });
  }
}
