// ProductCard Component 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="card product-card">
        <img
          src={product.image}
          alt={product.name}
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-description">{product.description}</p>
          <div className="card-price">${product.price}</div>
          <button
            className="btn btn-primary btn-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

