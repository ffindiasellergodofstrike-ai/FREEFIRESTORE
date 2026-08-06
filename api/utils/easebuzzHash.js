import crypto from 'crypto';

/**
 * Generates SHA512 hash for Easebuzz Initiate Payment
 * Sequence: key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt
 */
export function generateInitiateHash(data, salt) {
  const hashFields = [
    data.key || '',
    data.txnid || '',
    data.amount || '',
    data.productinfo || '',
    data.firstname || '',
    data.email || '',
    data.udf1 || '',
    data.udf2 || '',
    data.udf3 || '',
    data.udf4 || '',
    data.udf5 || '',
    data.udf6 || '',
    data.udf7 || '',
    data.udf8 || '',
    data.udf9 || '',
    data.udf10 || '',
    salt || ''
  ];
  return crypto.createHash('sha512').update(hashFields.join('|')).digest('hex').toLowerCase();
}

/**
 * Generates SHA512 hash for Easebuzz Transaction Status API
 * Sequence: key|txnid|salt
 */
export function generateStatusHash(key, txnid, salt) {
  const str = `${key}|${txnid}|${salt}`;
  return crypto.createHash('sha512').update(str).digest('hex').toLowerCase();
}

/**
 * Verifies Easebuzz Webhook / Callback hash
 * Tries standard reverse hash sequence and alternate patterns for maximum compatibility
 */
export function verifyWebhookHash(payload, salt, key) {
  if (!payload || !payload.hash) return false;

  const merchantKey = key || payload.key || process.env.EASEBUZZ_KEY || '';

  // Standard Reverse Response Hash Sequence:
  // salt|status|udf10|udf9|udf8|udf7|udf6|udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
  const seq1 = [
    salt,
    payload.status || '',
    payload.udf10 || '',
    payload.udf9 || '',
    payload.udf8 || '',
    payload.udf7 || '',
    payload.udf6 || '',
    payload.udf5 || '',
    payload.udf4 || '',
    payload.udf3 || '',
    payload.udf2 || '',
    payload.udf1 || '',
    payload.email || '',
    payload.firstname || '',
    payload.productinfo || '',
    payload.amount || '',
    payload.txnid || '',
    merchantKey
  ].join('|');

  const hash1 = crypto.createHash('sha512').update(seq1).digest('hex').toLowerCase();
  if (String(payload.hash).toLowerCase() === hash1) {
    return true;
  }

  // Alternate Sequence 2: salt|status|email|phone|txnid|amount|productinfo|firstname
  const seq2 = [
    salt,
    payload.status || '',
    payload.email || '',
    payload.phone || '',
    payload.txnid || '',
    payload.amount || '',
    payload.productinfo || '',
    payload.firstname || ''
  ].join('|');

  const hash2 = crypto.createHash('sha512').update(seq2).digest('hex').toLowerCase();
  if (String(payload.hash).toLowerCase() === hash2) {
    return true;
  }

  // Alternate Sequence 3: key|txnid|amount|productinfo|firstname|email|udf1|udf2|...|salt (Forward hash check)
  const seq3 = [
    merchantKey,
    payload.txnid || '',
    payload.amount || '',
    payload.productinfo || '',
    payload.firstname || '',
    payload.email || '',
    payload.udf1 || '',
    payload.udf2 || '',
    payload.udf3 || '',
    payload.udf4 || '',
    payload.udf5 || '',
    payload.udf6 || '',
    payload.udf7 || '',
    payload.udf8 || '',
    payload.udf9 || '',
    payload.udf10 || '',
    salt
  ].join('|');

  const hash3 = crypto.createHash('sha512').update(seq3).digest('hex').toLowerCase();
  if (String(payload.hash).toLowerCase() === hash3) {
    return true;
  }

  return false;
}
