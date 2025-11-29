import React from 'react'
import Header from '../components/Header'
import CareerCard from '../components/CareerCard'
import { careerPaths } from '../utils/careerData'

const CareerPaths = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '2rem' }}>
        <div className="container">
          <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: '#2d3748' }}>
            Explore Career Paths
          </h1>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {careerPaths.map(career => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerPaths