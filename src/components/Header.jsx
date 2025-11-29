import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <h2>🚀 Aspire</h2>
        </div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/career-paths" style={styles.navLink}>Career Paths</Link>
          <Link to="/counseling" style={styles.navLink}>Counseling</Link>
          <Link to="/resources" style={styles.navLink}>Resources</Link>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    background: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#667eea',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#4a5568',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
}

export default Header