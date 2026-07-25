import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, Search, X, User, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user, logout, openAuthModal } = useAuth();
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* Top Announcement Bar */}
        <div className="bg-stone-900 text-white text-[10px] sm:text-xs py-1.5 px-4 text-center font-bold tracking-wider uppercase flex items-center justify-center gap-2">
          <span>⚡ FREE EXPRESS SHIPPING ON ALL ORDERS</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">100% SECURE CHECKOUT</span>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-[#faf8f5]/90 backdrop-blur-md border-b border-stone-200/80 py-2.5 sm:py-3.5 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-8">
              <button 
                className="lg:hidden p-1.5 -ml-1.5 text-stone-800 hover:text-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
              <Link to="/" className="text-sm sm:text-base md:text-lg font-black tracking-tight uppercase text-stone-900 flex items-center">
                garenaofficialshop
              </Link>

              <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wide text-stone-600">
                <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
                <Link to="/products" className="hover:text-orange-600 transition-colors">Shop All</Link>
                {user ? (
                  <Link to="/my-orders" className="hover:text-orange-600 transition-colors">My Orders</Link>
                ) : (
                  <Link to="/track-order" className="hover:text-orange-600 transition-colors">Track Order</Link>
                )}
                <Link to="/policies/shipping" className="hover:text-orange-600 transition-colors">Shipping</Link>
                <Link to="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
              </nav>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              <div className="relative hidden md:block">
                <input type="text" placeholder="Search products..." className="bg-stone-100/80 border border-stone-200/60 rounded-full px-4 py-1.5 text-xs w-44 focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 outline-none text-stone-800 placeholder-stone-400 transition-all" />
              </div>
              <div className="flex items-center gap-2 sm:gap-4 text-stone-700">
                {user ? (
                  <div className="hidden md:flex items-center gap-2 bg-stone-100/70 border border-stone-200/80 px-2.5 py-1 rounded-full">
                    <div className="w-5 h-5 bg-stone-900 rounded-full flex items-center justify-center">
                      <User size={10} className="text-white" />
                    </div>
                    <Link to="/my-orders" className="text-[10px] font-bold uppercase tracking-tight text-stone-900 max-w-[90px] truncate hover:underline underline-offset-4">
                      {user.email.split('@')[0]}
                    </Link>
                    <button onClick={logout} className="hover:text-red-600 transition-colors ml-0.5">
                      <LogOut size={13} />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={openAuthModal}
                    className="hidden md:flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest bg-stone-900 text-white px-3.5 py-1.5 rounded-full hover:bg-orange-600 transition-all shadow-xs"
                  >
                    <User size={11} /> Login
                  </button>
                )}
                <Link 
                  to="/checkout" 
                  className="p-1.5 hover:text-orange-600 transition-colors relative group text-stone-800"
                >
                  <motion.div
                    key={cartItemsCount}
                    initial={{ scale: 1 }}
                    animate={{ scale: cartItemsCount > 0 ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ShoppingBag size={20} />
                  </motion.div>
                  {cartItemsCount > 0 && (
                    <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-orange-600 text-white text-[8px] flex items-center justify-center rounded-full leading-none font-bold animate-in fade-in zoom-in duration-300 shadow-xs">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="px-5 py-4 flex justify-between items-center border-b border-stone-200">
            <span className="text-lg font-black tracking-tight uppercase text-stone-900">garenaofficialshop</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2 text-stone-500 hover:text-stone-900">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6 gap-5 text-base font-bold text-stone-700">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-600 transition-colors">Shop All</Link>
            {user ? (
              <Link to="/my-orders" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-600 transition-colors">My Orders</Link>
            ) : (
              <Link to="/track-order" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-600 transition-colors">Track Order</Link>
            )}
            <Link to="/policies/shipping" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-600 transition-colors">Shipping Policy</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-600 transition-colors">Contact Support</Link>
            {!user ? (
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal();
                }}
                className="text-left text-white bg-stone-900 py-3 px-5 rounded-xl text-xs font-black uppercase tracking-widest mt-2"
              >
                Login / Register
              </button>
            ) : (
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  logout();
                }}
                className="text-left text-red-600 font-bold uppercase tracking-wider text-sm mt-2"
              >
                Logout ({user.email.split('@')[0]})
              </button>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
