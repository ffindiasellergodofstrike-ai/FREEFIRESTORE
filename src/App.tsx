import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ImagePreloader from './components/ImagePreloader';

import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import MyOrders from './pages/MyOrders';
import NotFound from './pages/NotFound';

const GarenaCheckout = React.lazy(() => import('./pages/GarenaCheckout'));

function StoreLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:category" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies/terms" element={<Terms />} />
          <Route path="/policies/refund" element={<RefundPolicy />} />
          <Route path="/policies/shipping" element={<ShippingPolicy />} />
          <Route path="/policies/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Toaster position="top-center" richColors />
            <ScrollToTop />
            <ImagePreloader />
            <Routes>
              <Route 
                path="/garena-checkout" 
                element={
                  <React.Suspense fallback={<div style={{ minHeight: '100vh', background: '#f5f6fa' }} />}>
                    <GarenaCheckout />
                  </React.Suspense>
                } 
              />
              <Route 
                path="/order-status" 
                element={
                  <React.Suspense fallback={<div style={{ minHeight: '100vh', background: '#f5f6fa' }} />}>
                    <GarenaCheckout />
                  </React.Suspense>
                } 
              />
              <Route path="/*" element={<StoreLayout />} />
            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}
