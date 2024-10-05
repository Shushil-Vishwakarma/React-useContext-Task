// src/App.js
import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductCart from './components/ProductCart';
import Cart from './components/Cart';
import './App.css'; // Keep any custom styles here

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <h1 className="text-center my-4">Shopping Cart App</h1>
        <div className='ProductCart_Cart'>
          <ProductCart />
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
