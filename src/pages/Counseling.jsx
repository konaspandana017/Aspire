import React from 'react'
import Header from '../components/Header'

const Counseling = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '2rem', color: '#2d3748' }}>Career Counseling</h1>
          <p style={{ color: '#718096', fontSize: '1.1rem' }}>
            Connect with expert career counselors. This feature is coming soon!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Counseling