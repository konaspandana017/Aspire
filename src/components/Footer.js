import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CareerGuide Pro</h3>
          <p>Your trusted partner in career guidance and counseling. We help students discover their perfect career paths with expert advice.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Career Paths</a></li>
            <li><a href="/sessions">My Sessions</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Counselors</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: support@careerguide.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Education Street, City, State</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 CareerGuide Pro. All rights reserved. Empowering students for better career decisions.</p>
      </div>
    </footer>
  );
};

export default Footer;