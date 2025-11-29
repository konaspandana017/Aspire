import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>🚀 Aspire</h2>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/career-paths" className="nav-link">Career Paths</Link>
        <Link to="/counseling" className="nav-link">Counseling</Link>
        <Link to="/resources" className="nav-link">Resources</Link>
      </nav>
    </header>
  )
}

export default Header