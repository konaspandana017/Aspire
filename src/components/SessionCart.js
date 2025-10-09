import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './SessionCart.css';

const SessionCart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal 
  } = useContext(CartContext);

  const handleQuantityChange = (careerId, newQuantity) => {
    updateQuantity(careerId, parseInt(newQuantity));
  };

  const handleCheckout = () => {
    alert('Thank you for booking career sessions! Our counselors will contact you soon.');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <h2>No Sessions Booked</h2>
          <p>Book career counseling sessions to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cart-header">
        <h1>My Career Sessions</h1>
        <button 
          className="btn btn-danger"
          onClick={clearCart}
        >
          Clear All Sessions
        </button>
      </div>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item card">
              <img 
                src={item.image} 
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-description">{item.description}</p>
                <div className="cart-item-price">${item.price}/session</div>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <label htmlFor={`quantity-${item.id}`}>Sessions:</label>
                  <select
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="quantity-select"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary card">
          <h3>Session Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Counseling Fee:</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <button 
            className="btn btn-primary btn-full"
            onClick={handleCheckout}
          >
            Confirm Session Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionCart;