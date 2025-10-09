import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CareerDetail.css';

const CareerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  const careers = [
    {
      id: 1,
      name: "Software Engineering Career",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
      description: "Software engineering is one of the most in-demand careers today. Our expert counselors will guide you through the path to becoming a successful software developer, from learning programming fundamentals to securing your dream job.",
      features: ["High Salary Potential ($80K-$150K)", "Remote Work Opportunities", "Global Job Market", "Continuous Learning & Growth", "Problem Solving Skills", "Creative Project Work"],
      category: "technology",
      demand: "Very High",
      growth: "22% (2020-2030)",
      duration: "4-6 years",
      averageSalary: "$110,000"
    },
    {
      id: 2,
      name: "Data Science Career Path",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      description: "Data science combines statistics, computer science, and domain knowledge to extract insights from data. It's one of the fastest-growing fields with applications across all industries.",
      features: ["AI/ML Integration", "Research Opportunities", "High Growth Potential", "Big Data Analytics", "Business Intelligence", "Statistical Modeling"],
      category: "technology",
      demand: "High",
      growth: "31% (2020-2030)",
      duration: "4-5 years", 
      averageSalary: "$120,000"
    },
    {
      id: 3,
      name: "Business Management Career",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      description: "Develop leadership skills and strategic thinking to drive business success in various industries and organizational settings.",
      features: ["Leadership Development", "Strategic Planning", "Team Management", "Business Analytics", "Networking Opportunities", "Career Advancement"],
      category: "business",
      demand: "High",
      growth: "8% (2020-2030)",
      duration: "4 years",
      averageSalary: "$85,000"
    }
  ];

  const career = careers.find(p => p.id === parseInt(id));

  if (!career) {
    return (
      <div className="container">
        <div className="career-not-found">
          <h2>Career path not found</h2>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Back to Career Paths
          </button>
        </div>
      </div>
    );
  }

  const handleBookSession = () => {
    addToCart(career);
    alert(`Career counseling session booked for ${career.name}!`);
  };

  return (
    <div className="container">
      <button onClick={() => navigate('/')} className="btn btn-secondary back-btn">
        ← Back to Career Paths
      </button>
      
      <div className="career-detail">
        <div className="career-image">
          <img src={career.image} alt={career.name} />
        </div>
        
        <div className="career-info">
          <h1 className="career-title">{career.name}</h1>
          <div className="career-price">${career.price}/session</div>
          <p className="career-description">{career.description}</p>
          
          <div className="career-stats">
            <div className="stat">
              <span className="stat-label">Market Demand:</span>
              <span className="stat-value">{career.demand}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Job Growth:</span>
              <span className="stat-value">{career.growth}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Average Salary:</span>
              <span className="stat-value">{career.averageSalary}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Typical Duration:</span>
              <span className="stat-value">{career.duration}</span>
            </div>
          </div>
          
          <div className="career-features">
            <h3>Career Benefits & Opportunities:</h3>
            <ul>
              {career.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="career-actions">
            <button onClick={handleBookSession} className="btn btn-primary add-to-cart-btn">
              Book Career Counseling Session
            </button>
            <button onClick={() => navigate('/sessions')} className="btn btn-secondary">
              View My Sessions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;