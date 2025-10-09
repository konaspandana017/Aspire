import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Career Path</h1>
          <p>Get personalized career guidance from expert counselors and make informed decisions about your future.</p>
          <Link to="/" className="btn btn-primary hero-btn">
            Explore Career Paths
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose CareerGuide Pro?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Guidance</h3>
              <p>One-on-one sessions with career experts tailored to your interests and skills</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Career Analytics</h3>
              <p>Data-driven insights into job market trends and growth opportunities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Expert Counselors</h3>
              <p>Connect with experienced professionals from various industries</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Job Ready Skills</h3>
              <p>Develop the skills employers are looking for in today's market</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;