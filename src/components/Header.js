 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          ShopEase
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;