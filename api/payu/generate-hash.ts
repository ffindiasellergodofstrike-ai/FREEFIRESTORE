import crypto from 'crypto';

export default async function handler(req: any, res: any) {
  const origin = req.headers['origin'] || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { amount, firstname, email, phone, productinfo, udf1, udf2 } = req.body;

    if (!amount || !firstname || !email || !phone || !productinfo) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const merchantKey = process.env.PAYU_MERCHANT_KEY;
    const salt        = process.env.PAYU_SALT;
    if (!merchantKey || !salt) {
      return res.status(500).json({ error: 'PayU credentials not configured' });
    }

    const txnid = 'TXN' + Date.now() +
      Math.random().toString(36).substr(2, 5).toUpperCase();

    // Hash: key|txnid|amount|productinfo|firstname|email|udf1|||||||||salt
    // udf2-udf10 are all empty strings
    const hashSequence = [
      merchantKey, txnid, String(amount), productinfo,
      firstname, email,
      udf1 || '',
      udf2 || '',
      '', '', '',   // udf3-udf5 empty
      '', '', '', '', '',  // udf6-udf10 empty
      salt,
    ];

    const hash = crypto
      .createHash('sha512')
      .update(hashSequence.join('|'))
      .digest('hex');

    return res.status(200).json({
      success: true,
      hash,
      txnid,
      key:         merchantKey,
      amount,
      productinfo,
      firstname,
      email,
      phone,
      udf1:        udf1 || '',
      udf2:        udf2 || '',
      actionUrl:   'https://secure.payu.in/_payment',
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
