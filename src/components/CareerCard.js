import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CareerCard.css';

const CareerCard = ({ career }) => {
  const { addToCart } = useContext(CartContext);

  const handleBookSession = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(career);
  };

  return (
    <Link to={`/career/${career.id}`} className="career-card-link">
      <div className="card career-card">
        <img 
          src={career.image} 
          alt={career.name}
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">{career.name}</h3>
          <p className="card-description">{career.description}</p>
          <div className="card-price">${career.price}/session</div>
          <button 
            className="btn btn-primary btn-full"
            onClick={handleBookSession}
          >
            Book Career Session
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CareerCard;