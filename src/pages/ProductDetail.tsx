import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products } = useProducts();

  const product = products.find(p => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [qty, setQty] = useState<number>(1);
  const [activeThumb, setActiveThumb] = useState<number>(1);

  // Reset page state and scroll to top smoothly when product changes
  useEffect(() => {
    setSelectedSize('');
    setQty(1);
    setActiveThumb(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const optimizeUnsplash = (url: string, width: number, quality: number = 80) => {
    if (!url) return url;
    if (url.includes('images.unsplash.com')) {
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?auto=format&fit=crop&w=${width}&q=${quality}`;
    }
    return url;
  };

  const nextSlide = () => {
    if (product?.images && product.images.length > 0) {
      setActiveThumb(prev => (prev >= product.images.length ? 1 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (product?.images && product.images.length > 0) {
      setActiveThumb(prev => (prev <= 1 ? product.images.length : prev - 1));
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (!product || !product.images || product.images.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [product, activeThumb]);

  // Touch Swipe Handlers
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !product) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) { // 50px threshold for swipe
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>PRODUCT NOT FOUND</h2>
        <p style={{ color: 'var(--gray)', marginBottom: '24px' }}>The product you are looking for does not exist or has been removed.</p>
        <Link to="/collections/all" className="btn btn-black">BACK TO SHOP</Link>
      </div>
    );
  }

  const fmt = (n: number) => '₹' + n.toLocaleString('en-IN');
  const disc = product.orig ? Math.round(((product.orig - product.price) / product.orig) * 100) : 0;
  const emoji = product.cat === 'men' ? '👕' : product.cat === 'women' ? '👗' : '💻';

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleQtyChange = (delta: number) => {
    setQty(prev => Math.max(1, prev + delta));
  };

  const handleAddCurrentToCart = () => {
    if (!selectedSize && product.sizes[0] !== 'ONE SIZE' && product.sizes[0] !== 'FREE SIZE') {
      toast.warning('⚠ PLEASE SELECT A SIZE');
      return;
    }
    const size = selectedSize || product.sizes[0];
    addToCart(product, size, qty);
  };

  const handleBuyNow = () => {
    if (!selectedSize && product.sizes[0] !== 'ONE SIZE' && product.sizes[0] !== 'FREE SIZE') {
      toast.warning('⚠ PLEASE SELECT A SIZE');
      return;
    }
    const size = selectedSize || product.sizes[0];
    navigate('/checkout', { state: { product, size, qty } });
  };

  return (
    <div id="product-detail-page-root">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link to="/">HOME</Link>
            <span className="sep">/</span>
            <Link to={`/collections/${product.cat}`}>{product.cat.toUpperCase()}</Link>
            <span className="sep">/</span>
            <span className="curr">{product.name}</span>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="pd-layout">
          {/* Gallery */}
          <div className="pd-gallery">
            <div 
              className="pd-main-img" 
              id="pdMainImg"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ position: 'relative', cursor: 'grab', userSelect: 'none', overflow: 'hidden' }}
            >
              {product.images && product.images.length > 0 ? (
                <>
                  <img 
                    src={optimizeUnsplash(product.images[Math.min(activeThumb - 1, product.images.length - 1)], 600, 85)} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                  {product.images.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }} 
                        className="gallery-nav-btn prev"
                        aria-label="Previous image"
                        type="button"
                      >
                        <i className="fa fa-chevron-left"></i>
                      </button>
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }} 
                        className="gallery-nav-btn next"
                        aria-label="Next image"
                        type="button"
                      >
                        <i className="fa fa-chevron-right"></i>
                      </button>
                      
                      {/* Dots indicators inside image */}
                      <div className="gallery-dots">
                        {product.images.map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`gallery-dot ${activeThumb === idx + 1 ? 'active' : ''}`}
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveThumb(idx + 1); }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className={`ph ph-${product.cat === 'electronics' ? 'elec' : product.cat}`} style={{ width: '100%', height: '100%', fontSize: '100px' }}>
                  {emoji}
                  <span>{product.name.split(' ').slice(0, 2).join(' ').toUpperCase()}</span>
                </div>
              )}
            </div>
            
            <div className="pd-thumbs" id="pdThumbs" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {product.images && product.images.length > 0 ? (
                product.images.map((imgUrl, i) => (
                  <div 
                    key={i}
                    className={`pd-thumb ${activeThumb === i + 1 ? 'active' : ''}`} 
                    onClick={() => setActiveThumb(i + 1)}
                  >
                    <img src={optimizeUnsplash(imgUrl, 120, 80)} alt={`${product.name} Thumb ${i + 1}`} referrerPolicy="no-referrer" loading="lazy" />
                  </div>
                ))
              ) : (
                [1, 2, 3].map(i => (
                  <div 
                    key={i}
                    className={`pd-thumb ${activeThumb === i ? 'active' : ''}`} 
                    onClick={() => setActiveThumb(i)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', background: 'var(--light)' }}
                  >
                    {emoji}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Info */}
          <div className="pd-info">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span className="badge badge-new" id="pdCategory">{product.cat.toUpperCase()}</span>
              {product.badge && <span className={`badge ${product.badge === 'SALE' ? 'badge-sale' : 'badge-new'}`} id="pdBadge">{product.badge}</span>}
            </div>

            <h1 id="pdName">{product.name}</h1>

            <div className="pd-rating">
              <span className="pd-stars">★★★★★</span>
              <span className="pd-revcount" id="pdRating">({product.rating}) · {product.reviews} reviews</span>
            </div>

            <div className="pd-price" id="pdPrice">
              {fmt(product.price)}
              {product.orig > 0 && <span className="was">{fmt(product.orig)}</span>}
              {disc > 0 && <span className="save">SAVE {disc}%</span>}
            </div>

            <p className="pd-desc" id="pdDesc">{product.desc}</p>

            <div className="pd-section-label">SELECT SIZE</div>
            <div className="size-grid" id="pdSizes">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`} 
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="qty-row">
              <div className="pd-section-label" style={{ marginBottom: 0 }}>QTY</div>
              <div className="qty-ctrl">
                <button onClick={() => handleQtyChange(-1)}>−</button>
                <span id="pdQty">{qty}</span>
                <button onClick={() => handleQtyChange(1)}>+</button>
              </div>
            </div>

            <div className="pd-actions">
              <button className="btn btn-black" style={{ flex: 1 }} onClick={handleAddCurrentToCart}>
                ADD TO BAG
              </button>
              <button className="btn btn-buy-now" style={{ flex: 1 }} onClick={handleBuyNow}>
                BUY NOW
              </button>
            </div>

            <div className="pd-meta">
              <div className="pd-meta-item"><i className="fa fa-shipping-fast"></i> Free delivery on all orders across India</div>
              <div className="pd-meta-item"><i className="fa fa-undo"></i> Easy 7-day return & exchange policy</div>
              <div className="pd-meta-item"><i className="fa fa-shield-alt"></i> Secure payment — UPI, Cards, Net Banking, COD</div>
              <div className="pd-meta-item"><i className="fa fa-check-circle"></i> In stock — ships in 1–2 business days</div>
            </div>
          </div>
        </div>

        {/* Suggested / Related Products Section */}
        {(() => {
          const suggestedProducts = [
            ...products.filter(p => p.cat === product.cat && p.id !== product.id),
            ...products.filter(p => p.cat !== product.cat && p.id !== product.id)
          ].slice(0, 4);

          return suggestedProducts.length > 0 ? (
            <div className="related-products-section" style={{ marginTop: '64px', borderTop: '1px solid var(--border)', paddingTop: '48px', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-h)', fontSize: '20px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>YOU MAY ALSO LIKE</h2>
              <div style={{ width: '40px', height: '2px', background: 'var(--accent)', margin: '0 auto 32px auto' }}></div>
              <div className="grid-4" id="related-products-grid">
                {suggestedProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          ) : null;
        })()}
      </div>
    </div>
  );
}
