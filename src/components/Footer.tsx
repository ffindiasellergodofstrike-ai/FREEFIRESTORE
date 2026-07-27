import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white flex items-center">
              Free Fire Shop
            </h3>
            <p className="text-stone-400 max-w-sm text-sm leading-relaxed font-medium">
              Premium retail e-commerce destination. Curating the best in fashion and daily essentials with uncompromising quality.
            </p>
            <div className="pt-2 flex flex-col space-y-1.5 text-xs text-stone-400 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-orange-400 font-bold">Email:</span> connectwithvexora@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-400 font-bold">Phone:</span> +919918396803
              </p>
              <p className="text-stone-300 font-bold pt-1">
                PRANKRISHNA DAS <span className="text-stone-500 font-normal">(Free Fire Shop)</span>
              </p>
              <p className="leading-relaxed text-stone-400 text-xs max-w-md">
                <strong>Address:</strong> 02 NO TAKIMARI, Mantadari, PO: Milanpally, DIST: Jalpaiguri, West Bengal - 735133
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest mb-6 text-orange-400">Shop</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/products" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">All Products</Link>
              <Link to="/products?category=Men's+Fashion" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">Men's Fashion</Link>
              <Link to="/products?category=Women's+Fashion" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">Women's Fashion</Link>
              <Link to="/products?category=Essentials" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">Essentials</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest mb-6 text-orange-400">Support</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/contact" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">Contact Us</Link>
              <Link to="/policies/terms" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">Terms & Conditions</Link>
              <Link to="/policies/refund" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">Refund Policy</Link>
              <Link to="/policies/shipping" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">Shipping Policy</Link>
              <Link to="/policies/privacy" className="text-stone-400 hover:text-white transition-colors text-xs font-semibold">Privacy Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800 text-stone-500 text-[10px] uppercase tracking-wider font-bold">
          <p>© {new Date().getFullYear()} FREE FIRE SHOP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
