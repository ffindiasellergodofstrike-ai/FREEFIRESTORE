import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ArrowRight, ShieldCheck, Truck, Clock, Sparkles, Shirt, Smartphone, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop";

const CATEGORY_CARDS = [
  {
    name: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=600&auto=format&fit=crop",
    link: "/products?category=Men's+Fashion"
  },
  {
    name: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
    link: "/products?category=Women's+Fashion"
  },
  {
    name: "Essentials",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
    link: "/products?category=Essentials"
  }
];

export default function Home() {
  const newItems = products.filter(p => p.isNew);
  const featuredProducts = newItems.length >= 8 
    ? newItems.slice(0, 8) 
    : [...newItems, ...products.filter(p => !p.isNew)].slice(0, 8);

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Hero Banner Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-stone-100/90 border border-stone-200/80 rounded-2xl sm:rounded-3xl overflow-hidden min-h-[42vh] sm:min-h-[50vh] flex flex-col justify-center p-5 sm:p-12 lg:p-16 shadow-xs"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest mb-3">
              <Zap size={11} className="fill-orange-600 text-orange-600" />
              New Season Arrivals
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-2 sm:mb-3 leading-tight text-stone-900 font-display">
              ELEVATE YOUR STYLE & GEAR
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 font-medium mb-6 max-w-md leading-relaxed">
              Curated premium fashion and daily essentials delivered fast across India.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center bg-stone-900 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs font-bold hover:bg-orange-600 transition-all uppercase tracking-wider gap-2 shadow-sm hover:shadow-md"
            >
              Shop Collection <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Categories Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm sm:text-lg font-black text-stone-900 uppercase tracking-wide">Shop By Category</h2>
          <Link to="/products" className="text-[11px] sm:text-xs font-bold text-orange-600 hover:underline">
            Browse All &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {CATEGORY_CARDS.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.link}
              className="group relative h-28 sm:h-36 rounded-xl overflow-hidden border border-stone-200/80 shadow-xs flex items-end p-3"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
              <span className="relative z-10 text-white text-xs sm:text-sm font-extrabold tracking-tight uppercase group-hover:text-orange-300 transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Drops Section - STRICT 2 ITEMS PER ROW ON MOBILE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-base sm:text-xl font-black text-stone-900 font-display tracking-tight uppercase">Latest Drops</h2>
            <p className="text-stone-500 text-[11px] sm:text-xs mt-0.5 font-medium">Fresh additions to our curated store.</p>
          </div>
          <Link to="/products" className="text-xs font-bold text-stone-700 hover:text-orange-600 uppercase tracking-wider transition-colors flex items-center gap-1">
            View All <ArrowRight size={13} />
          </Link>
        </div>

        {/* 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xs hover:shadow-md border border-stone-200/80 group cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <Link to={`/product/${product.id}`} className="flex-grow flex flex-col">
                <div className="w-full aspect-square bg-stone-100/80 rounded-lg sm:rounded-xl mb-3 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-orange-600 text-white text-[8px] sm:text-[9px] px-2 py-0.5 sm:py-1 rounded-full font-black tracking-wider uppercase shadow-xs">
                      BESTSELLER
                    </div>
                  )}
                  <button className="hidden sm:block absolute bottom-2 inset-x-2 bg-white/95 text-stone-900 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">QUICK VIEW</button>
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300 pointer-events-none" />
                </div>
                <div className="pt-0.5">
                  <div className="text-[9px] sm:text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">
                    {product.category}
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm mb-1.5 line-clamp-1 text-stone-900 group-hover:text-orange-600 transition-colors">{product.title}</h3>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-xs sm:text-sm font-black text-stone-900">&#8377;{product.price}</span>
                    <span className="text-[10px] sm:text-xs text-stone-400 line-through font-medium">&#8377;{product.oldPrice}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6 sm:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
          <div className="flex items-center gap-3.5 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-stone-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Truck size={20} />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-stone-900">Fast Nationwide Delivery</h3>
              <p className="text-stone-500 text-[11px] leading-tight mt-0.5">Dispatched within 24-48 hours across India.</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-stone-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-stone-900">100% Secure Checkout</h3>
              <p className="text-stone-500 text-[11px] leading-tight mt-0.5">Encrypted PayU and UPI payment protection.</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-stone-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-stone-900">Dedicated Support</h3>
              <p className="text-stone-500 text-[11px] leading-tight mt-0.5">Direct care via WhatsApp, email, and phone.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
