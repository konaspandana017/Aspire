 
import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  // Mock product data - in real app, this would come from API
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      description: "High-quality wireless headphones with noise cancellation technology. Perfect for music lovers and professionals.",
      features: ["Noise Cancellation", "30hr Battery", "Comfort Fit", "Bluetooth 5.0"],
      category: "electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      description: "Advanced fitness tracking with heart rate monitor, GPS, and smart notifications.",
      features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "Sleep Tracking"],
      category: "electronics"
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container">
        <div className="product-not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container">
      <button onClick={() => navigate('/')} className="btn btn-secondary back-btn">
        ← Back to Products
      </button>
      
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-price">${product.price}</div>
          <p className="product-description">{product.description}</p>
          
          <div className="product-features">
            <h3>Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="product-actions">
            <button onClick={handleAddToCart} className="btn btn-primary add-to-cart-btn">
              Add to Cart
            </button>
            <button onClick={() => navigate('/cart')} className="btn btn-secondary">
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;