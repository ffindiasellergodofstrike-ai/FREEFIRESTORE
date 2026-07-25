import https from 'https';
export default function handler(req: any, res: any) {
  const origin = req.headers['origin'] || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();
  const params = new URLSearchParams();
  Object.entries(req.body as Record<string, string>).forEach(([k, v]) =>
    params.append(k, String(v))
  );
  const postData = params.toString();
  const request = https.request(
    {
      hostname: 'secure.payu.in',
      path: '/_payment',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
      },
    },
    (response) => {
      response.resume();
      const loc = response.headers['location'] || '';
      if (loc && loc.includes('payu.in')) {
        return res.status(200).json({ success: true, sessionUrl: loc });
      }
      return res.status(502).json({
        error: 'PayU ne redirect nahi kiya, status: ' + response.statusCode,
      });
    }
  );
  request.on('error', (err: Error) => {
    return res.status(500).json({ error: err.message || 'Network error' });
  });
  request.write(postData);
  request.end();
}
