import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { products } from '../data/products';
import { ArrowLeft, ShieldCheck, Truck, RotateCcw, ShoppingCart, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, openAuthModal } = useAuth();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="pt-32 pb-24 px-6 text-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/products" className="text-neutral-500 hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const hasSizes = Array.isArray(product.sizes) && product.sizes.length > 0;
  const sizes = hasSizes ? product.sizes! : [];
  const colors = product.colors || [];
  const [selectedSize, setSelectedSize] = useState<string | null>(hasSizes ? sizes[0] : null);

  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleBuyNow = () => {
    if (hasSizes && !selectedSize) {
      toast.error("Please select a size to continue.");
      return;
    }

    if (!user) {
      openAuthModal();
      return;
    }

    navigate('/checkout', { state: { product, size: selectedSize, color: selectedColor } });
  };

  const handleAddToCart = () => {
    if (hasSizes && !selectedSize) {
      toast.error("Please select a size first.");
      return;
    }
    
    addToCart(product, selectedSize || undefined);
    setIsAdded(true);
    toast.success(`${product.title.slice(0, 30)}... added to cart!`);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen selection:bg-black selection:text-white">
      <div className="mb-6 md:mb-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-black transition-colors uppercase tracking-widest">
          <ArrowLeft size={14} /> Back to Catalog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left: Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-4 lg:sticky lg:top-28"
        >
          <div className="w-full aspect-[4/5] sm:aspect-square bg-slate-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-slate-100 relative group flex items-center justify-center">
            <img
              src={galleryImages[activeImage] || product.image}
              alt={product.title}
              className="w-full h-full object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
            />
            {product.isNew && (
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
                New Arrival
              </div>
            )}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              {activeImage + 1} / {galleryImages.length}
            </div>
          </div>

          {galleryImages.length > 1 && (
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 bg-slate-50 flex items-center justify-center outline-none focus:outline-none ${
                    activeImage === idx
                      ? 'border-black shadow-md scale-105 z-10'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:shadow-sm'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Right: Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-center bg-white p-6 sm:p-8 rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
        >
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-slate-100 text-slate-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-3 leading-snug text-neutral-950">
              {product.title}
            </h1>
            
            <div className="flex flex-wrap items-end gap-3 sm:gap-4 mb-4">
              <span className="text-xl sm:text-2xl font-extrabold text-black">&#8377;{product.price}</span>
              {product.oldPrice > product.price && (
                <>
                  <span className="text-sm sm:text-base text-slate-400 line-through font-medium mb-1">&#8377;{product.oldPrice}</span>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded mb-1">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF (SAVE &#8377;{product.oldPrice - product.price})
                  </span>
                </>
              )}
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {product.description || product.shortDescription}
            </p>
          </div>

          {/* Color/Variant Selection */}
          {colors.length > 0 && (
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-900 block mb-3">
                Color / Variant: <span className="text-slate-500 font-normal">{selectedColor || colors[0]}</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border outline-none ${
                      (selectedColor === color || (!selectedColor && color === colors[0]))
                        ? 'border-black bg-black text-white shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {hasSizes && (
            <div className="mb-6">
              <div className="flex justify-between items-end mb-2.5">
                <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-900">Select Size</span>
                <span className="text-[10px] text-slate-400 font-medium">Standard Fitting</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-10 h-9 px-2.5 rounded-lg flex items-center justify-center text-[11px] font-bold transition-all duration-200 border outline-none ${
                      selectedSize === size
                        ? 'border-black bg-black text-white shadow-sm scale-102'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              className={`w-full sm:w-1/2 font-bold py-4 rounded-xl text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 border-2 outline-none ${
                isAdded 
                  ? 'bg-emerald-600 border-emerald-600 text-white' 
                  : 'bg-white border-black text-black hover:bg-slate-50'
              }`}
            >
              <ShoppingCart size={16} className={isAdded ? 'hidden' : 'block'} />
              {isAdded ? 'Added ✓' : 'Add to Cart'}
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full sm:w-1/2 bg-black border-2 border-black text-white font-bold py-4 rounded-xl text-xs sm:text-sm hover:bg-neutral-800 hover:border-neutral-800 transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl outline-none"
            >
              <Zap size={16} /> Buy Now
            </button>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-1 gap-2.5 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <div className="bg-white p-1.5 rounded shadow-sm"><Truck size={14} className="text-black" /></div>
              <span className="text-[11px] font-bold uppercase tracking-wider">Free Express Delivery Across India</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <div className="bg-white p-1.5 rounded shadow-sm"><ShieldCheck size={14} className="text-black" /></div>
              <span className="text-[11px] font-bold uppercase tracking-wider">Pay on Delivery & Secure Checkout</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <div className="bg-white p-1.5 rounded shadow-sm"><RotateCcw size={14} className="text-black" /></div>
              <span className="text-[11px] font-bold uppercase tracking-wider">Hassle-Free 7-Day Easy Returns</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
