import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import TrackOrder from './pages/TrackOrder';
import MyOrders from './pages/MyOrders';
import Success from './pages/Success';
import Failure from './pages/Failure';
import OrderVerify from './pages/OrderVerify';
import ScrollToTop from './components/ScrollToTop';
import AuthModal from './components/AuthModal';

function StoreLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/policies/terms" element={<Terms />} />
          <Route path="/policies/refund" element={<RefundPolicy />} />
          <Route path="/policies/shipping" element={<ShippingPolicy />} />
          <Route path="/policies/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-verify" element={<OrderVerify />} />
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
        <Router>
          <Toaster
            position="top-center"
            richColors
            expand={true}
            toastOptions={{
              style: {
                borderRadius: '16px',
                border: '1px solid #e1e8ed',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              },
            }}
          />
          <ScrollToTop />
          <AuthModal />
          <StoreLayout />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
