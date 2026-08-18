import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import generateHashHandler from "./api/payu/generate-hash";
import callbackHandler from "./api/payu/callback";
import callbackGkHandler from "./api/payu/callback-gk";
import initiatePaymentHandler from "./api/initiate-payment.js";

async function runServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON and URL-encoded bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Easebuzz callback handling
  app.all("/api/easebuzz/callback", (req, res) => {
    const statusParam = req.query.status || req.body?.status;
    const isSuccess = statusParam === 'success' || req.body?.status === 'success' || req.body?.status === '1';
    const redirectStatus = isSuccess ? 'success' : 'failed';
    return res.redirect(302, `/order-status?status=${redirectStatus}`);
  });

  app.post(["/garena-checkout", "/GarenaCheckout", "/order-status"], (req, res) => {
    const statusParam = req.query.status || req.body?.status;
    const isSuccess = statusParam === 'success' || req.body?.status === 'success' || req.body?.status === '1';
    const redirectStatus = isSuccess ? 'success' : 'failed';
    return res.redirect(302, `/order-status?status=${redirectStatus}`);
  });

  // PayU endpoints
  app.post("/api/initiate-payment", async (req, res, next) => {
    try {
      await initiatePaymentHandler(req, res);
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/payu/generate-hash", async (req, res, next) => {
    try {
      await generateHashHandler(req, res);
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/payu/callback", async (req, res, next) => {
    try {
      await callbackHandler(req, res);
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/payu/callback-gk", async (req, res, next) => {
    try {
      await callbackGkHandler(req, res);
    } catch (err) {
      next(err);
    }
  });

  app.post('/api/payu/get-session-url', async (req, res) => {
    try {
      const https = await import('https');
      const params = new URLSearchParams();
      Object.entries(req.body as Record<string, string>).forEach(([k, v]) =>
        params.append(k, String(v))
      );
      const postData = params.toString();
      const location = await new Promise<string>((resolve, reject) => {
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
            const loc = response.headers['location'] || '';
            if (loc) resolve(loc);
            else reject(new Error('PayU ne Location header nahi diya'));
          }
        );
        request.on('error', reject);
        request.write(postData);
        request.end();
      });
      if (!location.includes('payu.in')) {
        return res.status(502).json({ error: 'PayU se invalid response' });
      }
      return res.json({ success: true, sessionUrl: location });
    } catch (err: any) {
      return res.status(500).json({ error: err.message || 'Server error' });
    }
  });

  // Serve static assets and frontend index
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite integration...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running successfully on http://localhost:${PORT}`);
  });
}

runServer();
