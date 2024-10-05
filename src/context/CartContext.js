// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.id === product.id);
      if (itemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id)); // Remove the item
  };

  const increaseQuantity = (id) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return updatedCart.filter(item => item.quantity > 0); // Filter out items with quantity 0
    });
  };

  const totalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const totalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
