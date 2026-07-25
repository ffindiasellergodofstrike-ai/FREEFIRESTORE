import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { motion } from 'motion/react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== 'All') {
      result = products.filter(p => p.category === activeCategory);
    }
    return [...result].reverse();
  }, [activeCategory]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Shop Collection</h1>
        <p className="text-slate-500 text-sm">Explore our complete range of premium retail products.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1.5 rounded text-xs transition-all flex items-center gap-2 ${
              activeCategory === cat 
                ? 'bg-black text-white font-bold' 
                : 'bg-white border border-slate-200 text-slate-500 hover:text-black font-medium'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-slate-500">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-2.5 sm:p-4 shadow-xs hover:shadow-md border border-stone-200/80 group cursor-pointer flex flex-col transition-all duration-300"
            >
              <Link to={`/product/${product.id}`} className="flex-grow flex flex-col">
                <div className="w-full aspect-square bg-stone-100/80 rounded-xl mb-3 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-orange-600 text-white text-[8px] sm:text-[9px] px-2 py-0.5 sm:py-1 rounded-full font-black uppercase tracking-wider">
                      NEW
                    </div>
                  )}
                  <button className="hidden sm:block absolute bottom-2 inset-x-2 bg-white/95 text-stone-900 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">QUICK VIEW</button>
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300 pointer-events-none" />
                </div>
                <div className="flex flex-col h-full mt-auto">
                  <p className="text-[9px] sm:text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-1">{product.category}</p>
                  <h4 className="font-bold text-xs sm:text-sm mb-1 line-clamp-1 text-stone-900 group-hover:text-orange-600 transition-colors">{product.title}</h4>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-xs sm:text-sm font-black text-stone-900">&#8377;{product.price}</span>
                    <span className="text-[10px] sm:text-xs text-stone-400 line-through font-medium">&#8377;{product.oldPrice}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
