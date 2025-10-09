import React, { useState, useEffect } from 'react';
import CareerCard from './CareerCard';
import './CareerList.css';

const CareerList = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const mockCareers = [
      {
        id: 1,
        name: "Software Engineering Career",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
        description: "Become a software developer with high-demand skills in programming and system design",
        category: "technology",
        features: ["High Salary", "Remote Work", "Global Opportunities", "Continuous Learning"]
      },
      {
        id: 2,
        name: "Data Science Career Path", 
        price: 59.99,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
        description: "Master data analysis, machine learning, and statistical modeling",
        category: "technology",
        features: ["AI/ML Focus", "Research Opportunities", "High Growth", "Big Data"]
      },
      {
        id: 3,
        name: "Business Management",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
        description: "Lead teams and drive business success with strategic management skills",
        category: "business", 
        features: ["Leadership Skills", "Networking", "Career Growth", "Entrepreneurship"]
      },
      {
        id: 4,
        name: "Healthcare Professional",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
        description: "Pursue a rewarding career in healthcare with various specializations",
        category: "healthcare",
        features: ["Job Security", "Helping Others", "Diverse Specialties", "Stable Career"]
      }
    ];

    setTimeout(() => {
      setCareers(mockCareers);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredCareers = filter === 'all' 
    ? careers 
    : careers.filter(career => career.category === filter);

  const categories = ['all', ...new Set(careers.map(career => career.category))];

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading career paths...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="career-list-header">
        <h1>Explore Career Paths</h1>
        <p className="subtitle">Find your perfect career with expert guidance</p>
        <div className="filter-controls">
          <label htmlFor="category-filter">Filter by field:</label>
          <select 
            id="category-filter"
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-3">
        {filteredCareers.map(career => (
          <CareerCard key={career.id} career={career} />
        ))}
      </div>
      
      {filteredCareers.length === 0 && (
        <div className="no-careers">
          No career paths found in this category.
        </div>
      )}
    </div>
  );
};

export default CareerList;