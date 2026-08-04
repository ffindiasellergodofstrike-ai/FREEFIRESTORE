import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useLocation, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cart, clearCart, getTotalPrice, cartCount } = useCart();
  const { user } = useAuth();
  
  const statusParam = searchParams.get('status');
  const messageParam = searchParams.get('message');
  
  const { product: directProduct, size: directSize, qty: directQty } = location.state || {};
  
  const [showLoginModal, setShowLoginModal] = useState(false);

  const checkoutItems = directProduct 
    ? [{ 
        key: `${directProduct.id}-${directSize}`,
        id: directProduct.id, 
        name: directProduct.name, 
        price: directProduct.price, 
        cat: directProduct.cat,
        size: directSize || 'M', 
        qty: directQty || 1
      }] 
    : cart;

  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: user?.name ? user.name.split(' ')[0] : '',
    lastName: user?.name ? user.name.split(' ').slice(1).join(' ') : '',
    phone: user?.mobile || '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  
  useEffect(() => {
    if (!user) {
      setShowLoginModal(true);
      if (directProduct?.id) {
        localStorage.setItem('redirect_product_id', String(directProduct.id));
      }
    } else {
      setShowLoginModal(false);
      setFormData(prev => ({ 
        ...prev, 
        email: user.email || '',
        firstName: user.name ? user.name.split(' ')[0] : prev.firstName,
        lastName: user.name ? user.name.split(' ').slice(1).join(' ') : prev.lastName,
        phone: user.mobile || prev.phone
      }));
    }
  }, [user, directProduct]);

  const [paymentType, setPaymentType] = useState<'payu' | 'pod'>('pod');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showOnlinePaymentNotice, setShowOnlinePaymentNotice] = useState(false);

  useEffect(() => {
    if (statusParam === 'success') {
      if (!directProduct) clearCart();
      setIsSuccess(true);
      toast.success('Prepaid Payment Successful! Order confirmed.');
    } else if (statusParam === 'failure' || statusParam === 'error') {
      toast.error(messageParam || 'Payment error. Please try again.');
    }
  }, [statusParam, messageParam, directProduct]);

  if (checkoutItems.length === 0 && !isSuccess) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛍️</div>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>YOUR CART IS EMPTY</h2>
        <p style={{ color: 'var(--gray)', marginBottom: '28px' }}>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn btn-black btn-lg">
          Start Shopping
        </Link>
      </div>
    );
  }

  const subtotal = directProduct ? directProduct.price : getTotalPrice();
  const grandTotal = subtotal; // Free delivery is standard

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.pincode || !formData.phone) {
      toast.error('⚠ Please fill in all shipping details.');
      return;
    }

    setIsProcessing(true);
    toast.loading('Securing order details...');
    
    try {
      const orderNumber = Math.floor(Math.random() * 900000) + 100000;
      
      if (paymentType === 'payu') {
        setIsProcessing(false);
        setShowOnlinePaymentNotice(true);
        toast.dismiss();
        return;
      } else {
        if (db) {
          try {
            await addDoc(collection(db, 'orders'), {
              userId: user?.uid || user?.email || 'guest',
              userEmail: formData.email,
              items: checkoutItems,
              total: grandTotal,
              status: 'Order Placed',
              shippingAddress: formData,
              orderNumber,
              createdAt: new Date().toISOString()
            });
          } catch (e) {
            console.log('Firestore write notice:', e);
          }
        }

        setTimeout(() => {
          setIsProcessing(false);
          setIsSuccess(true);
          if (!directProduct) clearCart();
          toast.dismiss();
          toast.success('Garena Store Order Confirmed!');
        }, 1200);
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message || "Checkout failed. Please try again.");
      setIsProcessing(false);
    }
  };

  const fmt = (n: number) => '₹' + n.toLocaleString('en-IN');
  const emoji = (cat: string) => cat === 'men' ? '👕' : cat === 'women' ? '👗' : '💻';

  if (isSuccess) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center', minHeight: '60vh' }}>
        <div style={{ width: '80px', height: '80px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <i className="fa fa-check" style={{ fontSize: '36px', color: '#166534' }}></i>
        </div>
        <h1 style={{ fontSize: '28px', marginBottom: '12px', fontFamily: 'var(--font-h)' }}>ORDER SECURED!</h1>
        <p style={{ color: 'var(--gray)', maxWidth: '480px', margin: '0 auto 32px', fontSize: '15px' }}>
          Thank you for shopping with Garena Store. Your order has been placed successfully and will be delivered to your address soon.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-black btn-lg">RETURN TO HOME</Link>
          <Link to="/my-orders" className="btn btn-outline btn-lg">VIEW MY ORDERS</Link>
        </div>
      </div>
    );
  }

  return (
    <div id="checkout-page-root">
      {showLoginModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          padding: '16px'
        }} id="checkout-login-modal">
          <div style={{
            background: '#ffffff',
            maxWidth: '520px',
            width: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(0,0,0,0.03)',
            borderRadius: '0',
            border: '1px solid #111111',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Modal Top Header (E-Commerce Branding style) */}
            <div style={{
              background: '#111111',
              color: '#ffffff',
              padding: '24px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #333333'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck style={{ width: '22px', height: '22px', color: '#4ade80' }} />
                <span style={{
                  fontFamily: 'var(--font-h)',
                  fontSize: '14px',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  SECURE GATEWAY
                </span>
              </div>
              <span style={{
                fontSize: '10px',
                background: '#333333',
                color: '#4ade80',
                padding: '4px 8px',
                fontWeight: '700',
                letterSpacing: '1px'
              }}>
                SSL ENCRYPTED
              </span>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '36px 32px 32px' }}>
              {/* Shopping Bag representation */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{
                  background: '#f4f4f5',
                  padding: '18px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShoppingBag style={{ width: '32px', height: '32px', color: '#111111' }} />
                </div>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-h)',
                fontSize: '20px',
                fontWeight: 900,
                textAlign: 'center',
                color: '#111111',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Sign in to Complete Order
              </h2>

              <p style={{
                color: '#666666',
                fontSize: '13px',
                lineHeight: '1.6',
                textAlign: 'center',
                marginBottom: '24px',
                maxWidth: '420px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                To ensure a secure, smooth transaction and accurate parcel tracking, please identify yourself.
              </p>

              {/* Benefits Box */}
              <div style={{
                background: '#fafafa',
                border: '1px solid #eaeaea',
                padding: '16px 20px',
                marginBottom: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', color: '#111111' }}>⚡</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '12px', fontWeight: '800', fontFamily: 'var(--font-h)', color: '#111111', letterSpacing: '0.5px' }}>
                      1-CLICK SECURE CHECKOUT
                    </div>
                    <div style={{ fontSize: '11px', color: '#71717a', marginTop: '1px' }}>
                      Save delivery details for seamless future orders
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', color: '#111111' }}>📦</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '12px', fontWeight: '800', fontFamily: 'var(--font-h)', color: '#111111', letterSpacing: '0.5px' }}>
                      REAL-TIME ORDER TRACKING
                    </div>
                    <div style={{ fontSize: '11px', color: '#71717a', marginTop: '1px' }}>
                      Track status updates and dynamic shipping in real-time
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '14px', color: '#111111' }}>🏷️</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '12px', fontWeight: '800', fontFamily: 'var(--font-h)', color: '#111111', letterSpacing: '0.5px' }}>
                      MEMBER PRIVILEGES & REWARDS
                    </div>
                    <div style={{ fontSize: '11px', color: '#71717a', marginTop: '1px' }}>
                      Unlock exclusive coupons and automatic discount schemes
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button 
                  className="btn btn-black btn-full btn-lg" 
                  onClick={() => navigate('/login')}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-h)',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '1.5px',
                    padding: '16px 20px',
                    border: '1px solid #111111'
                  }}
                >
                  LOG IN TO YOUR ACCOUNT <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
                
                <button 
                  className="btn btn-outline btn-full btn-lg" 
                  onClick={() => navigate('/register')}
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'var(--font-h)',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '1.5px',
                    padding: '16px 20px',
                    border: '1px solid #dddddd'
                  }}
                >
                  NEW CUSTOMER? CREATE ACCOUNT
                </button>

                <Link 
                  to="/" 
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-h)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#888888',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    marginTop: '16px',
                    display: 'inline-block',
                    textAlign: 'center',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#111111')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
                >
                  ← CANCEL AND RETURN TO STORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="page-hero">
        <h1>SECURE CHECKOUT</h1>
        <p>COMPLETE YOUR PURCHASE SECURELY</p>
      </div>

      <div className="container" style={{ padding: '40px 20px 60px' }}>
        <div className="cart-pg-layout" id="checkoutLayout">
          {/* Form */}
          <div>
            <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Shipping Address Card */}
              <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '24px' }}>
                <h3 style={{ fontSize: '14px', letterSpacing: '1px', fontFamily: 'var(--font-h)', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '20px' }}>
                  1. SHIPPING DETAILS
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">EMAIL ADDRESS *</label>
                    <input 
                      required 
                      type="email" 
                      name="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label">FIRST NAME *</label>
                      <input 
                        required 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        value={formData.firstName} 
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">LAST NAME *</label>
                      <input 
                        required 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName} 
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">ADDRESS (STREET / LANDMARK) *</label>
                    <input 
                      required 
                      type="text" 
                      name="address" 
                      placeholder="House No, Street Name, Landmark" 
                      value={formData.address} 
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label">CITY *</label>
                      <input 
                        required 
                        type="text" 
                        name="city" 
                        placeholder="City" 
                        value={formData.city} 
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">PINCODE *</label>
                      <input 
                        required 
                        type="text" 
                        name="pincode" 
                        placeholder="6-digit ZIP code" 
                        value={formData.pincode} 
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">STATE *</label>
                    <select 
                      name="state" 
                      value={formData.state} 
                      onChange={handleInputChange} 
                      className="form-input"
                      required
                    >
                      <option value="">Select your state</option>
                      <option value="UTTAR PRADESH">Uttar Pradesh</option>
                      <option value="DELHI">Delhi</option>
                      <option value="MAHARASHTRA">Maharashtra</option>
                      <option value="KARNATAKA">Karnataka</option>
                      <option value="TAMIL NADU">Tamil Nadu</option>
                      <option value="WEST BENGAL">West Bengal</option>
                      <option value="GUJARAT">Gujarat</option>
                      <option value="OTHER">Other State</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">PHONE NUMBER (FOR DELIVERY UPDATES) *</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone" 
                      placeholder="+91 XXXXX XXXXX" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Option Card */}
              <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '24px' }}>
                <h3 style={{ fontSize: '14px', letterSpacing: '1px', fontFamily: 'var(--font-h)', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '20px' }}>
                  2. PAYMENT METHOD
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      border: '2px solid var(--dark)',
                      background: '#fcfcfc',
                      cursor: 'pointer'
                    }}
                  >
                    <input 
                      type="radio" 
                      name="paymentType" 
                      value="pod" 
                      checked={paymentType === 'pod'}
                      onChange={() => setPaymentType('pod')}
                    />
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>CASH / PAY ON DELIVERY (COD)</strong>
                      <span style={{ fontSize: '12px', color: 'var(--gray)' }}>Pay via Cash, UPI, or Card upon delivery</span>
                    </div>
                  </label>

                  <label 
                    onClick={() => setShowOnlinePaymentNotice(true)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      border: '1px solid var(--border)',
                      background: '#f9fafb',
                      cursor: 'pointer',
                      opacity: 0.7
                    }}
                  >
                    <input type="radio" disabled name="paymentType" value="payu" />
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px', color: '#999' }}>ONLINE PAYMENT (UPI / CARDS)</strong>
                      <span style={{ fontSize: '12px', color: '#aaa' }}>Currently paused (use Cash on Delivery)</span>
                    </div>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="btn btn-black btn-full btn-lg"
              >
                {isProcessing ? 'PLACING SECURE ORDER...' : `SECURE MY ORDER (${fmt(grandTotal)})`}
              </button>
            </form>
          </div>

          {/* Sidebar Summary */}
          <div className="order-summary" style={{ height: 'fit-content' }}>
            <div className="os-title">ORDER SUMMARY</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px', maxHeight: '350px', overflowY: 'auto' }}>
              {checkoutItems.map((item, idx) => (
                <div key={item.key || idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '48px', height: '48px', objectFit: 'cover', flexShrink: 0 }}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className={`ph ph-${item.cat === 'electronics' ? 'elec' : item.cat}`} style={{ width: '48px', height: '48px', fontSize: '24px', flexShrink: 0 }}>
                      {emoji(item.cat || 'men')}
                    </div>
                  )}
                  <div style={{ flex: 1, fontSize: '13px' }}>
                    <div style={{ fontWeight: 700, color: 'var(--dark)' }}>{item.name}</div>
                    <div style={{ color: 'var(--gray)', fontSize: '11px', marginTop: '2px' }}>Size: {item.size} &nbsp;|&nbsp; Qty: {item.qty}</div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--dark)' }}>{fmt(item.price * item.qty)}</div>
                </div>
              ))}
            </div>

            <div className="os-row">
              <span>Subtotal</span>
              <span>{fmt(subtotal)}</span>
            </div>

            <div className="os-row">
              <span>Shipping</span>
              <span style={{ color: '#166534', fontWeight: 700 }}>FREE</span>
            </div>

            <div className="os-ship">✓ FREE SHIPPING TO YOUR ADDRESS</div>

            <div className="os-row total">
              <span>GRAND TOTAL</span>
              <span>{fmt(grandTotal)}</span>
            </div>
          </div>
        </div>
      </div>

      {showOnlinePaymentNotice && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: '#fff', padding: '32px', borderRadius: '0', border: '2px solid var(--dark)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
            <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-h)', fontWeight: 700, letterSpacing: '1px', marginBottom: '12px' }}>ONLINE PAYMENT NOTICE</h3>
            <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '24px' }}>
              Online prepaid transactions are temporarily offline. Please select Cash on Delivery (COD) to place your order. Garena Store offers free delivery and easy checkout for all COD orders!
            </p>
            <button className="btn btn-black btn-full" onClick={() => setShowOnlinePaymentNotice(false)}>
              CONTINUE WITH CASH ON DELIVERY
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
