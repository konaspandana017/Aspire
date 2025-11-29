import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CareerQuiz from '../components/CareerQuiz'

const Home = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">🚀 Welcome to Aspire</h1>
          <p className="hero-subtitle">
            Your personalized career guidance platform. Discover your path, connect with mentors, 
            and build your future with confidence.
          </p>
          <div className="hero-buttons">
            <Link to="/career-paths" className="btn btn-primary">Explore Career Paths</Link>
            <Link to="/counseling" className="btn btn-secondary">Book Counseling Session</Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#2d3748' }}>
            How Aspire Helps You
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎯 Career Assessment</h3>
              <p>Discover your perfect career path based on your skills, interests, and personality</p>
            </div>
            <div className="feature-card">
              <h3>👥 Expert Counseling</h3>
              <p>Connect with experienced career counselors and industry mentors</p>
            </div>
            <div className="feature-card">
              <h3>📚 Learning Resources</h3>
              <p>Access curated resources, guides, and courses for various career paths</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Quiz Section */}
      <section style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#2d3748' }}>
            Discover Your Career Path
          </h2>
          <CareerQuiz />
        </div>
      </section>
    </div>
  )
}

export default Home