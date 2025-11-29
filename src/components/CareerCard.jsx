import React from 'react'

const CareerCard = ({ career }) => {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{career.title}</h3>
          <span style={{ 
            background: '#667eea', 
            color: 'white', 
            padding: '0.3rem 0.8rem', 
            borderRadius: '20px', 
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            {career.category}
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.9rem', color: '#718096' }}>Demand</div>
          <div style={{ 
            color: career.demand === 'Very High' ? '#38a169' : 
                   career.demand === 'High' ? '#68d391' : '#ecc94b',
            fontWeight: '600'
          }}>
            {career.demand}
          </div>
        </div>
      </div>
      
      <p style={{ color: '#718096', marginBottom: '1rem', lineHeight: '1.5' }}>
        {career.description}
      </p>
      
      <div style={{ marginBottom: '1rem' }}>
        <strong style={{ color: '#2d3748' }}>Required Skills:</strong>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          {career.skills.map((skill, index) => (
            <span key={index} style={{ 
              background: '#edf2f7', 
              padding: '0.3rem 0.8rem', 
              borderRadius: '15px', 
              fontSize: '0.8rem',
              color: '#4a5568'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
        <div>
          <strong style={{ color: '#2d3748' }}>Salary Range:</strong>
          <div style={{ color: '#718096' }}>{career.salary}</div>
        </div>
        <div>
          <strong style={{ color: '#2d3748' }}>Growth:</strong>
          <div style={{ color: '#718096' }}>{career.growth}</div>
        </div>
      </div>
    </div>
  )
}

export default CareerCard