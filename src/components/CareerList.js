<<<<<<< HEAD
// ProductList Component 
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
=======
import React, { useState, useEffect } from 'react';
import CareerCard from './CareerCard';
import './CareerList.css';

const CareerList = () => {
  const [careers, setCareers] = useState([]);
>>>>>>> main
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
<<<<<<< HEAD
    const mockProducts = [
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        description: "High-quality wireless headphones with noise cancellation",
        category: "electronics"
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        description: "Advanced fitness tracking with heart rate monitor",
        category: "electronics"
      },
      {
        id: 3,
        name: "Organic Cotton T-Shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        description: "Comfortable and sustainable cotton t-shirt",
        category: "clothing"
      },
      {
        id: 4,
        name: "Professional Camera",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
        description: "4K video recording and professional photography",
        category: "electronics"
      },
      {
        id: 5,
        name: "Designer Backpack",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        description: "Durable and stylish backpack for everyday use",
        category: "accessories"
      },
      {
        id: 6,
        name: "Running Shoes",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        description: "Lightweight running shoes with superior cushioning",
        category: "footwear"
=======
    const mockCareers = [
      {
        id: 1,
        name: "Software Engineering",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
        description: "Become a software developer with high-demand skills in programming and system design",
        category: "technology",
        features: ["High Salary", "Remote Work", "Global Opportunities", "Continuous Learning"]
      },
      {
        id: 2,
        name: "Data Science",
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
      },
      {
        id: 5,
        name: "Digital Marketing",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
        description: "Master online marketing strategies and brand management",
        category: "marketing",
        features: ["Creative Work", "Remote Options", "High Demand", "Analytics Skills"]
      },
      {
        id: 6,
        name: "Graphic Design",
        price: 42.99,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
        description: "Create visual content and build brands through design",
        category: "creative",
        features: ["Creative Freedom", "Freelance Options", "Portfolio Work", "Visual Storytelling"]
>>>>>>> main
      }
    ];

    setTimeout(() => {
<<<<<<< HEAD
      setProducts(mockProducts);
=======
      setCareers(mockCareers);
>>>>>>> main
      setLoading(false);
    }, 1000);
  }, []);

<<<<<<< HEAD
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  const categories = ['all', ...new Set(products.map(product => product.category))];
=======
  const filteredCareers = filter === 'all' 
    ? careers 
    : careers.filter(career => career.category === filter);

  const categories = ['all', ...new Set(careers.map(career => career.category))];
>>>>>>> main

  if (loading) {
    return (
      <div className="container">
<<<<<<< HEAD
        <div className="loading">Loading products...</div>
=======
        <div className="loading">Loading career paths...</div>
>>>>>>> main
      </div>
    );
  }

  return (
    <div className="container">
<<<<<<< HEAD
      <div className="product-list-header">
        <h1>Our Products</h1>
        <div className="filter-controls">
          <label htmlFor="category-filter">Filter by category:</label>
=======
      <div className="career-list-header">
        <h1>Explore Career Paths</h1>
        <p className="subtitle">Find your perfect career with expert guidance</p>
        <div className="filter-controls">
          <label htmlFor="category-filter">Filter by field:</label>
>>>>>>> main
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
<<<<<<< HEAD
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-products">
          No products found in this category.
=======
        {filteredCareers.map(career => (
          <CareerCard key={career.id} career={career} />
        ))}
      </div>
      
      {filteredCareers.length === 0 && (
        <div className="no-careers">
          No career paths found in this category.
>>>>>>> main
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default ProductList;
=======
export default CareerList;
>>>>>>> main
