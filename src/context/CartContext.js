import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (career) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === career.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === career.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...career, quantity: 1 }];
    });
  };

  const removeFromCart = (careerId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== careerId));
  };

  const updateQuantity = (careerId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(careerId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === careerId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };