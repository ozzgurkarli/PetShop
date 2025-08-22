import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // Animasyonu tetikleme fonksiyonunu state'e ekleyelim
  const [triggerAnimation, setTriggerAnimation] = useState(() => {});

  const registerAnimationTrigger = (triggerFn) => {
    setTriggerAnimation(() => triggerFn);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    // Sepete ekleme sonrası animasyonu tetikle
    triggerAnimation();
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartItemCount, registerAnimationTrigger }}>
      {children}
    </CartContext.Provider>
  );
};