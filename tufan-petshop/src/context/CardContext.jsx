import React, { createContext, useState } from 'react';

// 1. Context'i oluştur
export const CartContext = createContext();

// 2. Provider'ı oluştur (uygulamayı sarmalayacak component)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Ürün sepette zaten var mı diye kontrol et
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // Varsa sayısını artır
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Yoksa sepete 1 adet olarak ekle
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Sepetteki toplam ürün sayısını hesapla
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};