import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>🚀 Welcome to Aspire</h1>
          <p style={styles.heroSubtitle}>
            Your personalized career guidance platform. Discover your path, connect with mentors, 
            and build your future with confidence.
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.primaryBtn}>Explore Career Paths</button>
            <button style={styles.secondaryBtn}>Take Assessment</button>
          </div>
        </div>
      </section>
      
      <section style={styles.features}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>How Aspire Helps You</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3>🎯 Career Assessment</h3>
              <p>Discover your perfect career path based on your skills and interests</p>
            </div>
            <div style={styles.featureCard}>
              <h3>👥 Expert Counseling</h3>
              <p>Connect with experienced career counselors and mentors</p>
            </div>
            <div style={styles.featureCard}>
              <h3>📚 Learning Resources</h3>
              <p>Access curated resources and guides for various career paths</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '6rem 2rem',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    fontWeight: '700',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    marginBottom: '3rem',
    opacity: '0.9',
    lineHeight: '1.6',
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '15px 30px',
    fontSize: '1.1rem',
    background: 'white',
    color: '#667eea',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  secondaryBtn: {
    padding: '15px 30px',
    fontSize: '1.1rem',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  features: {
    padding: '5rem 2rem',
    background: '#f8fafc',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#2d3748',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    background: 'white',
    padding: '2.5rem 2rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease',
  },
}

export default Home