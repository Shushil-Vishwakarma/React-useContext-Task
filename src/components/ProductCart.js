// src/components/ProductCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json'; // Adjust the path if needed

const ProductCart = () => {
  const { addToCart, cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Products</h2>
      <div className="row">
        {products.products.map(product => {
          const isInCart = cart.some(item => item.id === product.id); // Check if product is in cart
          return (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '200px' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                  {isInCart ? (
                    <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCart;
