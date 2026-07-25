import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  size: string | null;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any, size: string | null) => void;
  removeFromCart: (productId: string, size: string | null) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('ffindia_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ffindia_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any, size: string | null) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.size === size);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { 
        id: product.id, 
        title: product.title, 
        price: product.price, 
        image: product.image, 
        size, 
        quantity: 1 
      }];
    });
    
    // Silent success - only visible in total count usually, 
    // but the user said "silently add ... Do not interrupt with any modals or popups."
    // I'll skip the toast for this specific action as requested.
  };

  const removeFromCart = (productId: string, size: string | null) => {
    setCart(prev => prev.filter(item => !(item.id === productId && item.size === size)));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
