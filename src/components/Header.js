import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartItems = [] } = useContext(CartContext);
  const sessionCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          CareerGuide
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Career Paths</Link>
          <Link to="/sessions" className="nav-link cart-link">
            My Sessions {sessionCount > 0 && <span className="cart-count">{sessionCount}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;