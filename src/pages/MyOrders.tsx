import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { Package, Clock, CheckCircle, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface OrderItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
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
          where('userId', '==', user.uid),
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

  if (!user) {
    return (
      <div className="pt-32 pb-24 px-6 text-center animate-in fade-in duration-700">
        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Access Restricted</h2>
        <p className="text-slate-500 text-sm mb-8">Please login to view your official order history.</p>
        <Link to="/" className="bg-black text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">Order Archive</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Tracking protocol for your official gear</p>
        </div>
        <div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100 self-start">
          <span className="text-[10px] font-black uppercase tracking-tight text-slate-500">Records: {orders.length}</span>
        </div>
      </div>

      {loading ? (
        <div className="space-y-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl animate-pulse">
              <div className="h-4 bg-slate-100 rounded w-1/4 mb-4"></div>
              <div className="h-20 bg-slate-50 rounded-2xl"></div>
            </div>
          ))}
        </div>
      ) : orders.length === 0 ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center shadow-sm">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package size={32} className="text-slate-300" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight mb-2">No Deployments Found</h3>
          <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto">You haven't placed any orders yet. Secure your first item from the store today.</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
            <ShoppingBag size={14} /> Browse Catalog
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, idx) => (
            <motion.div 
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] group"
            >
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Order ID</span>
                    <span className="text-sm font-black text-black">#{order.orderNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-tight">
                      {order.createdAt?.toDate().toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <div className="text-left sm:text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                    <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-black uppercase tracking-tight text-green-600">{order.status}</span>
                    </div>
                  </div>
                  <div className="h-10 w-[1px] bg-slate-100 hidden sm:block"></div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Amount</p>
                    <p className="text-sm font-black text-black tracking-tight">&#8377;{order.total}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 bg-slate-50/50">
                <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-16 h-16 bg-white rounded-xl p-1.5 border border-slate-100 relative group-hover:scale-105 transition-transform">
                      <img 
                        src={item.image} 
                        alt="" 
                        className="w-full h-full object-cover rounded-lg" 
                        referrerPolicy="no-referrer"
                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"; }}
                      />
                      <span className="absolute -top-2 -right-2 bg-black text-white text-[8px] w-5 h-5 flex items-center justify-center rounded-full font-black">
                        {item.quantity}
                      </span>
                    </div>
                  ))}
                  <div className="ml-auto pl-4">
                    <Link 
                      to={`/track-order?id=${order.orderNumber}`}
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-slate-100 text-black hover:bg-black hover:text-white transition-all shadow-sm"
                    >
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
