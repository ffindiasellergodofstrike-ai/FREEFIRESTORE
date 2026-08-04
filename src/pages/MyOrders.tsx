import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

interface OrderItem {
  id: string | number;
  name?: string;
  title?: string;
  price: number;
  qty?: number;
  quantity?: number;
  size?: string;
  cat?: string;
  image?: string;
}

interface Order {
  id: string;
  orderNumber: number;
  total: number;
  status: string;
  createdAt: any;
  items: OrderItem[];
}

export default function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      if (!user) return;
      
      try {
        const q = query(
          collection(db, 'orders'),
          where('userId', '==', user.uid || user.email),
          orderBy('createdAt', 'desc'),
          limit(50)
        );
        
        const querySnapshot = await getDocs(q);
        const fetchedOrders: Order[] = [];
        querySnapshot.forEach((doc) => {
          fetchedOrders.push({ id: doc.id, ...doc.data() } as Order);
        });
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [user]);

  const fmt = (n: number) => '₹' + n.toLocaleString('en-IN');
  const emoji = (cat?: string) => cat === 'men' ? '👕' : cat === 'women' ? '👗' : '💻';

  const getFormattedDate = (createdAt: any) => {
    if (!createdAt) return 'Pending';
    let d: Date;
    if (typeof createdAt === 'string') {
      d = new Date(createdAt);
    } else if (createdAt.toDate) {
      d = createdAt.toDate();
    } else if (createdAt.seconds) {
      d = new Date(createdAt.seconds * 1000);
    } else {
      return 'Pending';
    }
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const getOrderStatus = (order: Order) => {
    if (!order.createdAt) return order.status || 'Order Placed';
    let datePlaced: Date;
    if (typeof order.createdAt === 'string') {
      datePlaced = new Date(order.createdAt);
    } else if (order.createdAt.toDate) {
      datePlaced = order.createdAt.toDate();
    } else if (order.createdAt.seconds) {
      datePlaced = new Date(order.createdAt.seconds * 1000);
    } else {
      return order.status || 'Order Placed';
    }

    const diffTime = Math.abs(new Date().getTime() - datePlaced.getTime());
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays >= 10) {
      return 'Delivered';
    } else if (diffDays >= 3) {
      return 'In Transit';
    }
    return order.status || 'Order Placed';
  };

  if (!user) {
    return (
      <div id="orders-page-root">
        <div className="page-hero">
          <h1>MY ORDERS</h1>
          <p>TRACK YOUR PURCHASES & SHIPMENTS</p>
        </div>
        <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔒</div>
          <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-h)', fontWeight: 700, letterSpacing: '1px', marginBottom: '8px' }}>ACCESS RESTRICTED</h2>
          <p style={{ color: 'var(--gray)', marginBottom: '28px' }}>Please log in to your account to view your purchase history and order tracks.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Link to="/login" className="btn btn-black">LOG IN NOW</Link>
            <Link to="/" className="btn btn-outline">RETURN HOME</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="orders-page-root">
      <div className="page-hero">
        <h1>MY ORDERS</h1>
        <p>SECURE LOGS OF YOUR DEPLOYMENTS</p>
      </div>

      <div className="container" style={{ padding: '40px 20px 60px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div className="spinner" style={{ border: '4px solid #f3f3f3', borderTop: '4px solid var(--dark)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }}></div>
            <p style={{ color: 'var(--gray)', fontFamily: 'var(--font-h)', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }}>RETRIVING DEPLOYMENTS...</p>
          </div>
        ) : orders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📦</div>
            <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-h)', fontWeight: 700, letterSpacing: '1px', marginBottom: '8px' }}>NO RECORDS FOUND</h2>
            <p style={{ color: 'var(--gray)', marginBottom: '24px' }}>You haven't placed any orders yet. Secure your first items today!</p>
            <Link to="/collections/all" className="btn btn-black">BROWSE SHOP</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} id="ordersArchive">
            {orders.map((order) => (
              <div 
                key={order.id} 
                style={{ background: '#fff', border: '1px solid var(--border)', padding: '24px' }}
                id={`order-record-${order.orderNumber}`}
              >
                {/* Order Top Bar */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-h)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: 'var(--gray)' }}>ORDER ID:</span>
                    <strong style={{ fontFamily: 'var(--font-h)', fontSize: '13px', marginLeft: '6px', color: 'var(--dark)' }}>#{order.orderNumber}</strong>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-h)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: 'var(--gray)' }}>DATE:</span>
                    <strong style={{ fontFamily: 'var(--font-h)', fontSize: '13px', marginLeft: '6px', color: 'var(--dark)' }}>
                      {getFormattedDate(order.createdAt)}
                    </strong>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-h)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: 'var(--gray)' }}>STATUS:</span>
                    <strong style={{ fontFamily: 'var(--font-h)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', marginLeft: '6px', color: '#166534', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '4px 10px' }}>
                      {getOrderStatus(order).toUpperCase()}
                    </strong>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-h)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: 'var(--gray)' }}>GRAND TOTAL:</span>
                    <strong style={{ fontFamily: 'var(--font-h)', fontSize: '14px', marginLeft: '6px', color: 'var(--dark)' }}>{fmt(order.total)}</strong>
                  </div>
                </div>

                {/* Items in the Order */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {order.items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name || item.title} 
                          style={{ width: '56px', height: '56px', objectFit: 'cover', flexShrink: 0 }}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className={`ph ph-${item.cat === 'electronics' ? 'elec' : item.cat || 'men'}`} style={{ width: '56px', height: '56px', fontSize: '28px', flexShrink: 0 }}>
                          {emoji(item.cat)}
                        </div>
                      )}
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--dark)' }}>{item.name || item.title}</h4>
                        <p style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '2px' }}>
                          Size: {item.size || 'ONE SIZE'} &nbsp;|&nbsp; Qty: {item.qty || item.quantity || 1}
                        </p>
                      </div>
                      <div style={{ fontWeight: 700, color: 'var(--dark)' }}>{fmt(item.price * (item.qty || item.quantity || 1))}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
