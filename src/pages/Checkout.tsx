import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useLocation, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { ShieldCheck, ArrowLeft, Lock, Trash2, Plus, Minus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cart, clearCart, removeFromCart } = useCart();
  const { user } = useAuth();
  
  const statusParam = searchParams.get('status');
  const txnidParam = searchParams.get('txnid');
  const messageParam = searchParams.get('message');
  
  // location.state is used for "Buy Now" (direct single product checkout)
  const { product: directProduct, size: directSize } = location.state || {};
  
  // Decide which items to show: direct product (Buy Now) or full cart
  const checkoutItems = directProduct 
    ? [{ 
        id: directProduct.id, 
        title: directProduct.title, 
        price: directProduct.price, 
        image: directProduct.image, 
        size: directSize, 
        quantity: 1,
        category: directProduct.category
      }] 
    : cart;

  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  
  useEffect(() => {
    if (user) {
      setFormData(prev => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const [paymentType, setPaymentType] = useState<'payu' | 'pod'>('payu');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (statusParam === 'success') {
      if (!directProduct) clearCart();
      setIsSuccess(true);
      toast.success('Prepaid Payment Successful! Order secured.', {
        id: 'checkout-toast'
      });
    } else if (statusParam === 'failure') {
      toast.error(messageParam || 'Payment was declined or cancelled. Please try again.', {
        id: 'checkout-toast',
        duration: 5000
      });
    } else if (statusParam === 'error') {
      toast.error(messageParam || 'Verification error. Contact support if debited.', {
        id: 'checkout-toast',
        duration: 5000
      });
    }
  }, [statusParam, messageParam, directProduct]);

  // If accessed directly without product in state AND cart is empty
  if (checkoutItems.length === 0 && !isSuccess) {
    return (
      <div className="pt-32 pb-24 px-6 text-center min-h-screen flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <Trash2 size={40} className="text-slate-300" />
        </div>
        <h2 className="text-2xl font-black mb-2 uppercase tracking-tight">Your Cart is Empty</h2>
        <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto">Looks like you haven't added anything to your cart yet. Secure your official gear today.</p>
        <Link to="/products" className="bg-black text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">
          Start Shopping
        </Link>
      </div>
    );
  }

  const subtotal = checkoutItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    toast.loading('Validating Shipping Protocol...', {
      id: 'checkout-toast'
    });
    
    try {
      const orderNumber = Math.floor(Math.random() * 900000) + 100000;
      
      if (paymentType === 'payu') {
        toast.loading('Synchronizing Secure Payment Gateway...', {
          id: 'checkout-toast'
        });

        // Request secure hash from our backend Node API using secure secrets
        const payuRes = await fetch('/api/payu/generate-hash', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: subtotal,
            firstname: formData.firstName || 'Shopper',
            email: formData.email,
            phone: formData.phone,
            productinfo: checkoutItems.map(item => `${item.title} (${item.size || 'N/A'})`).join(', ').substring(0, 100),
            udf1: user?.uid || 'guest'
          }),
        });

        const payuData = await payuRes.json();
        if (!payuData.success) {
          throw new Error(payuData.error || 'Gateway authentication rejected');
        }

        // Keep a transient state in Firestore referencing this transaction ID
        // This is safe: if transaction completes, callback updates status to 'Order Placed' and paymentStatus to 'Paid'
        if (user) {
          await addDoc(collection(db, 'orders'), {
            userId: user.uid || user.email,
            userEmail: user.email,
            items: checkoutItems,
            total: subtotal,
            status: 'Pending Payment',
            paymentStatus: 'Pending',
            shippingAddress: formData,
            orderNumber,
            txnid: payuData.txnid,
            createdAt: serverTimestamp()
          });
        }

        toast.loading('Redirecting to Secured Gateway...', {
          id: 'checkout-toast'
        });

        // Create virtual form and automatically transition to PayU sandbox or production
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = payuData.actionUrl;

        const parameters = {
          key: payuData.key,
          txnid: payuData.txnid,
          amount: String(payuData.amount),
          productinfo: payuData.productinfo,
          firstname: payuData.firstname,
          email: payuData.email,
          phone: payuData.phone,
          surl: `${window.location.origin}/api/payu/callback`,
          furl: `${window.location.origin}/api/payu/callback`,
          hash: payuData.hash,
          service_provider: 'payu_paisa',
          udf1: payuData.udf1
        };

        Object.entries(parameters).forEach(([name, val]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = name;
          input.value = val;
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
      } else {
        // Standard Cash on Delivery order flow
        if (user) {
          await addDoc(collection(db, 'orders'), {
            userId: user.uid || user.email,
            userEmail: user.email,
            items: checkoutItems,
            total: subtotal,
            status: 'Order Placed',
            shippingAddress: formData,
            orderNumber,
            createdAt: serverTimestamp()
          });
        }

        setTimeout(() => {
          setIsProcessing(false);
          setIsSuccess(true);
          if (!directProduct) clearCart();
          toast.success('Official Order Confirmed!', {
            id: 'checkout-toast'
          });
        }, 1500);
      }
    } catch (error: any) {
      console.error("Payment initiation / registration failure:", error);
      toast.error(error.message || "Checkout protocol failed. Try again.", { id: 'checkout-toast' });
      setIsProcessing(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-28 pb-24 px-6 text-center min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
          <ShieldCheck size={48} className="text-green-600 relative z-10" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4 uppercase">Order Secured!</h2>
        <p className="text-slate-500 mb-10 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          Protocol initiated. Your order <span className="text-black font-bold">#{Math.floor(Math.random() * 900000) + 100000}</span> has been broadcast to our dispatch hub. Tracking details will be available shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <Link to="/my-orders" className="flex-1 bg-black text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl text-center">
            My Orders
          </Link>
          <Link to="/" className="flex-1 bg-white border-2 border-slate-100 text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all text-center">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <Link to={directProduct ? `/product/${directProduct.id}` : "/products"} className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-500 hover:text-black mb-8 md:mb-10 transition-colors uppercase tracking-widest">
        <ArrowLeft size={14} /> {directProduct ? 'Return to Product' : 'Continue Shopping'}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          <h1 className="text-2xl sm:text-3xl font-black mb-8 uppercase tracking-tight">Checkout Gate</h1>
          <form onSubmit={handleCheckout} className="space-y-10">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-xs font-bold">01</div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Shipping Protocol</h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Gmail Account</label>
                    <input 
                      required type="email" name="email" placeholder="youraccount@gmail.com" 
                      value={formData.email} onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-xs sm:text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Identity First Name</label>
                    <input 
                      required type="text" name="firstName" placeholder="First Name" 
                      value={formData.firstName} onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-xs sm:text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Identity Last Name</label>
                    <input 
                      required type="text" name="lastName" placeholder="Last Name" 
                      value={formData.lastName} onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-xs sm:text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Shipping Address</label>
                  <input 
                    required type="text" name="address" placeholder="House No, Street, Landmark" 
                    value={formData.address} onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-xs sm:text-sm outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">City / Region</label>
                    <input 
                      required type="text" name="city" placeholder="City Name" 
                      value={formData.city} onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-xs sm:text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">PIN Code</label>
                    <input 
                      required type="text" name="pincode" placeholder="6-Digit Code" 
                      value={formData.pincode} onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-xs sm:text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Contact Active Mobile</label>
                  <input 
                    required type="tel" name="phone" placeholder="+91 XXXXX XXXXX" 
                    value={formData.phone} onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 px-4 text-xs sm:text-sm outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-xs font-bold">02</div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Payment Authorization</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <label 
                  onClick={() => setPaymentType('payu')}
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer relative overflow-hidden group shadow-sm transition-all ${
                    paymentType === 'payu' ? 'border-black bg-slate-50' : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="paymentType" 
                    value="payu" 
                    checked={paymentType === 'payu'}
                    onChange={() => setPaymentType('payu')}
                    className="mt-1 accent-black w-4 h-4" 
                  />
                  <div className="flex-1">
                    <span className="block text-sm font-black text-black uppercase tracking-tight">Prepaid Credit / Debit Cards / UPI</span>
                    <p className="text-[11px] text-slate-500 mt-2 font-medium leading-relaxed">
                      Safe & secure transaction powered by <strong className="text-black">PayU</strong>. Instant checkout confirmation via popular UPI platforms (GPay, PhonePe, Paytm) or cards.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 p-3">
                    <div className="bg-black text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest">Recommended</div>
                  </div>
                </label>

                <label 
                  onClick={() => setPaymentType('pod')}
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer relative overflow-hidden group shadow-sm transition-all ${
                    paymentType === 'pod' ? 'border-black bg-slate-50' : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="paymentType" 
                    value="pod" 
                    checked={paymentType === 'pod'}
                    onChange={() => setPaymentType('pod')}
                    className="mt-1 accent-black w-4 h-4" 
                  />
                  <div className="flex-1">
                    <span className="block text-sm font-black text-black uppercase tracking-tight">Pay On Delivery (POD)</span>
                    <p className="text-[11px] text-slate-500 mt-2 font-medium leading-relaxed">
                      Secure payment verification upon arrival. Pay via Cash, Mini-ATM or UPI directly to our logistics partner.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 p-3">
                    <div className="bg-slate-500 text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest">COD</div>
                  </div>
                </label>
              </div>
            </section>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full bg-black text-white font-bold py-5 rounded-2xl text-[10px] sm:text-xs hover:bg-slate-800 transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-2xl hover:shadow-black/20"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Authenticating Order...
                  </>
                ) : (
                  <>
                    <Lock size={16} /> Confirm Official Order (&#8377;{subtotal})
                  </>
                )}
              </button>
              <p className="text-center text-[9px] text-slate-400 mt-6 font-medium">Secure End-to-End Encryption Enabled</p>
            </div>
          </form>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <aside className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
              <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900">Official Bill</h3>
              <span className="text-[10px] font-bold text-slate-400">{checkoutItems.length} Item(s)</span>
            </div>
            
            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 scrollbar-hide">
              {checkoutItems.map((item, idx) => (
                <div key={item.id + (item.size || idx)} className="flex gap-4 group relative">
                  <div className="w-20 h-20 bg-slate-50 rounded-xl p-2 relative flex-shrink-0 group-hover:bg-slate-100 transition-colors">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded-lg" 
                      referrerPolicy="no-referrer"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"; }}
                    />
                    <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full font-black shadow-lg">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center pr-8">
                    <p className="text-xs font-black text-neutral-900 line-clamp-2 uppercase tracking-tight leading-tight">{item.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                       <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.size ? `Size: ${item.size}` : item.category}</p>
                    </div>
                    <p className="text-xs font-bold text-black mt-2">&#8377;{item.price * item.quantity}</p>
                  </div>
                  
                  {!directProduct && (
                    <button 
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="absolute top-1/2 -right-2 -translate-y-1/2 p-2 text-slate-300 hover:text-red-500 transition-colors"
                      title="Remove Item"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Subtotal</span>
                <span className="text-xs font-bold text-black">&#8377;{subtotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Logistics / Tax</span>
                <span className="text-[11px] font-black text-green-600 uppercase tracking-widest">FREE</span>
              </div>
              <div className="pt-6 mt-2 border-t-2 border-dashed border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black text-black uppercase tracking-tight">Total Amount</span>
                  <span className="text-xl font-black text-black tracking-tight">&#8377;{subtotal}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-2xl flex items-center gap-4 border border-slate-100">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                 <ShieldCheck size={18} className="text-black" />
              </div>
              <p className="text-[10px] font-bold text-slate-500 leading-snug uppercase tracking-tight">Official garenaofficialshop Protected Purchase</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
