// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount } = useContext(CartContext);

  return (
    <div className="fixed-cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="list-group">
            {cart.map(item => (
              <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                  <div>
                    <h5>{item.title}</h5>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-secondary" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <h4 className="mt-3">Total Quantity: {totalQuantity()}</h4>
          <h4>Total Amount: ${totalAmount()}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
