export default async function handler(req, res) {
  try {
    let statusParam = req.query?.status;
    let bodyStatus = req.body?.status;

    if (!bodyStatus && req.body && typeof req.body === 'string') {
      try {
        const parsed = JSON.parse(req.body);
        bodyStatus = parsed?.status;
      } catch (e) {
        const params = new URLSearchParams(req.body);
        bodyStatus = params.get('status');
      }
    }

    const finalStatus = statusParam || bodyStatus || '';
    const isSuccess = String(finalStatus).toLowerCase() === 'success' || String(finalStatus) === '1';

    const redirectStatus = isSuccess ? 'success' : 'failed';

    return res.redirect(302, `/garena-checkout?status=${redirectStatus}`);
  } catch (err) {
    console.error('Easebuzz callback error:', err);
    return res.redirect(302, '/garena-checkout?status=failed');
  }
}
