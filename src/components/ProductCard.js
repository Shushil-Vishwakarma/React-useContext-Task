// src/components/ProductCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card mb-4">
      <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard; // Ensure this is exported correctly
