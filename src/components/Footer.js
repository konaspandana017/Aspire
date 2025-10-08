// Footer Component 
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ShopEase</h3>
          <p>Your one-stop destination for all your shopping needs. Quality products at affordable prices.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: support@shopease.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Commerce St, City, State</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;