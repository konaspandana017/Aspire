// ProductList Component 
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
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
      }
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product-list-header">
        <h1>Our Products</h1>
        <div className="filter-controls">
          <label htmlFor="category-filter">Filter by category:</label>
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
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-products">
          No products found in this category.
        </div>
      )}
    </div>
  );
};

export default ProductList;