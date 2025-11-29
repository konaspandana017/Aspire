import React from 'react'
import Header from '../components/Header'

const Resources = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '2rem', color: '#2d3748' }}>Career Resources</h1>
          <p style={{ color: '#718096', fontSize: '1.1rem' }}>
            Access career guides, articles, and learning materials. Coming soon!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Resources