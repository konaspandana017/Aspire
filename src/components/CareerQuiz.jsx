import React, { useState } from 'react'
import { quizQuestions, getCareerMatches } from '../utils/careerData'
import CareerCard from './CareerCard'
import { Container, Paper, Typography, RadioGroup, FormControlLabel, Radio, Button, LinearProgress, Box, Stack } from '@mui/material'

const CareerQuiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [careerMatches, setCareerMatches] = useState([])
  const [selectedOption, setSelectedOption] = useState('')

  const handleNext = () => {
    if (selectedOption === '') return
    const newAnswers = [...answers, selectedOption]
    setAnswers(newAnswers)
    setSelectedOption('')

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      const matches = getCareerMatches(newAnswers)
      setCareerMatches(matches)
      setShowResults(true)
      if (onComplete) onComplete()
    }
  }

  const handleBack = () => {
    if (currentQuestion === 0) return
    const before = answers.slice(0, -1)
    setAnswers(before)
    setCurrentQuestion(prev => prev - 1)
    setSelectedOption(before[before.length - 1] || '')
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setCareerMatches([])
    setSelectedOption('')
  }

  if (showResults) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper sx={{ p: 4 }} elevation={3}>
          <Typography variant="h5" fontWeight={700} align="center" sx={{ mb: 2 }}>🎉 Your Career Matches</Typography>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>Based on your answers, these careers may suit you:</Typography>

          <Stack spacing={2} sx={{ mb: 3 }}>
            {careerMatches.length ? careerMatches.map(c => (
              <CareerCard key={c.id} career={c} />
            )) : (
              <Typography align="center" color="text.secondary">No direct matches found — try again or explore career paths.</Typography>
            )}
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="outlined" onClick={restartQuiz}>Retake Quiz</Button>
          </Box>
        </Paper>
      </Container>
    )
  }

  const q = quizQuestions[currentQuestion]
  const progress = Math.round(((currentQuestion) / quizQuestions.length) * 100)

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper sx={{ p: 4 }} elevation={3}>
        <Typography variant="h5" fontWeight={700} align="center">Career Assessment Quiz</Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>Question {currentQuestion + 1} of {quizQuestions.length}</Typography>

        <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 2, mb: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>{q.question}</Typography>

          <RadioGroup
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            name={`question-${q.id}`}
          >
            {q.options.map((opt, idx) => (
              <FormControlLabel key={idx} value={opt} control={<Radio />} label={opt} sx={{ mb: 1 }} />
            ))}
          </RadioGroup>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="outlined" onClick={handleBack} disabled={currentQuestion === 0}>Back</Button>
          <Button variant="contained" onClick={handleNext} disabled={selectedOption === ''}>{currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'}</Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default CareerQuiz