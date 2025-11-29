import React, { useState } from 'react'
import { quizQuestions, getCareerMatches } from '../utils/careerData'
import CareerCard from './CareerCard'

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [careerMatches, setCareerMatches] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    setSelectedOption(null)
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const matches = getCareerMatches(newAnswers)
      setCareerMatches(matches)
      setShowResults(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setCareerMatches([])
    setSelectedOption(null)
  }

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="card">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
            🎉 Your Career Matches
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#718096' }}>
            Based on your answers, here are careers that might be perfect for you:
          </p>
          
          <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
            {careerMatches.map(career => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button onClick={restartQuiz} className="btn btn-primary">
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <div className="card">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Career Assessment Quiz</h2>
          <p>Question {currentQuestion + 1} of {quizQuestions.length}</p>
        </div>
        
        <div className="quiz-question">
          <h3 style={{ marginBottom: '1.5rem', color: '#2d3748' }}>
            {quizQuestions[currentQuestion].question}
          </h3>
          
          <div className="quiz-options">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`quiz-option ${selectedOption === index ? 'selected' : ''}`}
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => handleAnswer(quizQuestions[currentQuestion].options[selectedOption])}
            disabled={selectedOption === null}
            className="btn btn-primary"
            style={{ opacity: selectedOption === null ? 0.6 : 1 }}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CareerQuiz