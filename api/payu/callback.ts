import crypto from 'crypto';

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      return res.redirect(302, 'https://www.codashop.online/?status=failed');
    }

    // Parse body
    let params: Record<string, string> = {};
    if (req.body && typeof req.body === 'object') {
      params = req.body;
    } else if (req.body && typeof req.body === 'string') {
      new URLSearchParams(req.body).forEach((v, k) => { params[k] = v; });
    } else {
      // stream fallback
      const buf = await new Promise<Buffer>((resolve, reject) => {
        const chunks: Buffer[] = [];
        req.on('data', (c: any) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
        req.on('end',  () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
        setTimeout(() => resolve(Buffer.from('')), 2000);
      });
      if (buf.length) {
        new URLSearchParams(buf.toString('utf8'))
          .forEach((v, k) => { params[k] = v; });
      }
    }

    const g = (k: string) => String(params[k] || '').trim();

    const key         = g('key');
    const txnid       = g('txnid');
    const amount      = g('amount');
    const productinfo = g('productinfo');
    const firstname   = g('firstname');
    const email       = g('email');
    const status      = g('status');
    const hash        = g('hash');
    const udf1        = g('udf1');   // uid
    // udf2-udf5 will be empty — we don't use them
    const udf2  = g('udf2');
    const udf3  = g('udf3');
    const udf4  = g('udf4');
    const udf5  = g('udf5');
    const udf6  = g('udf6');
    const udf7  = g('udf7');
    const udf8  = g('udf8');
    const udf9  = g('udf9');
    const udf10 = g('udf10');

    const salt = process.env.PAYU_SALT || '';

    // Reverse hash verification
    // salt|status|udf10|udf9|udf8|udf7|udf6|udf5|udf4|udf3|udf2|udf1|
    // email|firstname|productinfo|amount|txnid|key
    const verifyStr = [
      salt, status,
      udf10, udf9, udf8, udf7, udf6,
      udf5, udf4, udf3, udf2, udf1,
      email, firstname, productinfo, amount, txnid, key,
    ].join('|');

    const expected = crypto
      .createHash('sha512')
      .update(verifyStr)
      .digest('hex');

    if (expected !== hash) {
      console.error('PayU hash mismatch — possible tamper');
      return res.redirect(302, 'https://www.codashop.online/?status=failed');
    }

    // Clean redirect — no game data, no nick, no diamonds in URL
    if (status === 'success') {
      return res.redirect(302, 'https://www.codashop.online/?status=success');
    } else {
      return res.redirect(302, 'https://www.codashop.online/?status=failed');
    }

  } catch (err) {
    console.error('Callback error:', err);
    return res.redirect(302, 'https://www.codashop.online/?status=failed');
  }
}
