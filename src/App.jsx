import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CareerPaths from './pages/CareerPaths'
import Counseling from './pages/Counseling'
import Resources from './pages/Resources'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career-paths" element={<CareerPaths />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App