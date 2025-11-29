import React, { useState } from 'react';
import { Container, Paper, Typography, Button, RadioGroup, FormControlLabel, Radio, Box, LinearProgress, Card, CardContent } from '@mui/material';

const CareerQuiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What type of activities do you enjoy most?",
      options: [
        "Solving complex problems and coding",
        "Helping and guiding people",
        "Creative design and artistic work",
        "Analyzing data and research"
      ]
    },
    {
      id: 2,
      question: "What's your preferred work environment?",
      options: [
        "Tech company or startup",
        "Educational or healthcare institution",
        "Creative agency or studio",
        "Research lab or corporate office"
      ]
    },
    {
      id: 3,
      question: "Which skills do you excel at?",
      options: [
        "Programming and logical thinking",
        "Communication and empathy",
        "Design and creativity",
        "Analysis and critical thinking"
      ]
    },
    {
      id: 4,
      question: "What motivates you at work?",
      options: [
        "Building innovative products",
        "Making a difference in people's lives",
        "Expressing creativity and ideas",
        "Discovering insights and patterns"
      ]
    }
  ];

  const careerMatches = {
    'Software Engineering': ['A', 'A', 'A', 'A'],
    'Career Counseling': ['B', 'B', 'B', 'B'],
    'UX/UI Design': ['C', 'C', 'C', 'C'],
    'Data Science': ['D', 'D', 'D', 'D']
  };

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (userAnswers) => {
    setShowResults(true);
    if (onComplete) {
      onComplete(userAnswers);
    }
  };

  const getCareerRecommendations = () => {
    const scores = {};
    
    Object.keys(careerMatches).forEach(career => {
      scores[career] = 0;
      careerMatches[career].forEach((expectedAnswer, index) => {
        if (answers[index] === expectedAnswer) {
          scores[career] += 25;
        }
      });
    });

    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const recommendations = getCareerRecommendations();
    
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            🎉 Your Career Matches
          </Typography>
          <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
            Based on your interests and skills
          </Typography>

          {recommendations.map(([career, score], index) => (
            <Card key={career} sx={{ mb: 2, border: index === 0 ? 2 : 0, borderColor: 'primary.main' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">
                    {index + 1}. {career}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {score}% Match
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={score} 
                  sx={{ mt: 1, height: 8, borderRadius: 4 }}
                />
              </CardContent>
            </Card>
          ))}

          <Button 
            variant="contained" 
            fullWidth 
            sx={{ mt: 3 }}
            onClick={() => window.location.href = '/career-paths'}
          >
            Explore These Careers
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Question {currentQuestion + 1} of {questions.length}
        </Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ mb: 3, height: 8 }} />
        
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          {questions[currentQuestion].question}
        </Typography>

        <RadioGroup>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              fullWidth
              sx={{ 
                mb: 2, 
                p: 2, 
                justifyContent: 'flex-start',
                textTransform: 'none'
              }}
              onClick={() => handleAnswer(String.fromCharCode(65 + index))}
            >
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={option}
                sx={{ width: '100%' }}
              />
            </Button>
          ))}
        </RadioGroup>
      </Paper>
    </Container>
  );
};

export default CareerQuiz;