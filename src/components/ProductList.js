// src/components/ProductList.js
import React from 'react';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCart';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductList = () => {
  const { handleAddToCart } = useCart();

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {productsData.products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};
