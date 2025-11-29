import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Button, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  Box, 
  LinearProgress, 
  Card, 
  CardContent,
  Grid,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { 
  Psychology, 
  EmojiEvents, 
  Share,
  Close,
  CheckCircle,
  School,
  Work,
  TrendingUp
} from '@mui/icons-material';

const CareerQuiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What type of activities do you enjoy most?",
      options: [
        "Solving complex problems and building software",
        "Helping and guiding people through challenges",
        "Creative design and artistic expression",
        "Analyzing data and discovering patterns"
      ],
      category: "Interests"
    },
    {
      id: 2,
      question: "What's your preferred work environment?",
      options: [
        "Fast-paced tech company or startup",
        "Educational or healthcare institution",
        "Creative agency or design studio",
        "Research lab or data-driven organization"
      ],
      category: "Work Environment"
    },
    {
      id: 3,
      question: "Which skills do you feel most confident in?",
      options: [
        "Programming, logical thinking, and troubleshooting",
        "Communication, empathy, and teaching",
        "Design, creativity, and visual thinking",
        "Analysis, statistics, and critical thinking"
      ],
      category: "Skills"
    },
    {
      id: 4,
      question: "What motivates you the most in a career?",
      options: [
        "Building innovative products and technologies",
        "Making a positive impact on people's lives",
        "Expressing creativity and bringing ideas to life",
        "Discovering insights and solving complex problems"
      ],
      category: "Motivation"
    },
    {
      id: 5,
      question: "How do you prefer to learn new things?",
      options: [
        "Hands-on projects and building things",
        "Working with others and sharing knowledge",
        "Visual learning and creative exploration",
        "Research, data analysis, and experimentation"
      ],
      category: "Learning Style"
    }
  ];

  const careerDatabase = {
    'Software Engineering': {
      match: ['A', 'A', 'A', 'A', 'A'],
      description: 'Design, develop, and maintain software systems and applications',
      salary: '$100,000 - $160,000',
      demand: 'Very High',
      skills: ['Programming', 'Problem Solving', 'Algorithms', 'System Design'],
      education: "Bachelor's in Computer Science",
      growth: '22% (Much faster than average)',
      companies: ['Google', 'Microsoft', 'Amazon', 'Meta'],
      personality: 'Analytical, Logical, Creative Problem-Solver'
    },
    'Career Counseling': {
      match: ['B', 'B', 'B', 'B', 'B'],
      description: 'Guide individuals in making educational and career decisions',
      salary: '$55,000 - $85,000',
      demand: 'High',
      skills: ['Communication', 'Empathy', 'Assessment', 'Guidance'],
      education: "Master's in Counseling or Psychology",
      growth: '10% (Faster than average)',
      companies: ['Schools', 'Universities', 'Private Practice', 'HR Departments'],
      personality: 'Empathetic, Patient, Good Listener'
    },
    'UX/UI Design': {
      match: ['C', 'C', 'C', 'C', 'C'],
      description: 'Create user-friendly and visually appealing digital interfaces',
      salary: '$85,000 - $130,000',
      demand: 'High',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      education: "Bachelor's in Design or related field",
      growth: '13% (Faster than average)',
      companies: ['Apple', 'Adobe', 'Design Agencies', 'Tech Startups'],
      personality: 'Creative, User-Focused, Detail-Oriented'
    },
    'Data Science': {
      match: ['D', 'D', 'D', 'D', 'D'],
      description: 'Extract insights and knowledge from structured and unstructured data',
      salary: '$95,000 - $150,000',
      demand: 'Very High',
      skills: ['Statistics', 'Machine Learning', 'Python', 'Data Visualization'],
      education: "Master's in Data Science or Statistics",
      growth: '31% (Much faster than average)',
      companies: ['Netflix', 'Spotify', 'Finance Companies', 'Research Institutes'],
      personality: 'Analytical, Curious, Pattern-Recognizer'
    },
    'Digital Marketing': {
      match: ['C', 'A', 'B', 'C', 'A'],
      description: 'Promote brands and products through digital channels and platforms',
      salary: '$65,000 - $110,000',
      demand: 'Medium',
      skills: ['SEO', 'Content Creation', 'Analytics', 'Social Media'],
      education: "Bachelor's in Marketing or Communications",
      growth: '8% (As fast as average)',
      companies: ['Marketing Agencies', 'E-commerce', 'Tech Companies', 'Media'],
      personality: 'Creative, Analytical, Trend-Aware'
    }
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
    
    Object.keys(careerDatabase).forEach(career => {
      scores[career] = 0;
      careerDatabase[career].match.forEach((expectedAnswer, index) => {
        if (answers[index] === expectedAnswer) {
          scores[career] += 20; // 20% per question
        }
      });
    });

    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 4);
  };

  const handleCareerDetail = (career) => {
    setSelectedCareer(career);
    setShowDetailDialog(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setShowDetailDialog(false);
    setSelectedCareer(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const recommendations = getCareerRecommendations();
    
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, position: 'relative' }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <EmojiEvents sx={{ fontSize: 60, color: 'gold', mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              🎉 Your Career Matches
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Based on your interests, skills, and preferences
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {recommendations.map(([career, score], index) => (
              <Grid item xs={12} md={6} key={career}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    cursor: 'pointer',
                    transition: '0.3s',
                    border: index === 0 ? 2 : 0,
                    borderColor: 'primary.main',
                    '&:hover': { 
                      transform: 'translateY(-4px)', 
                      boxShadow: 6 
                    }
                  }}
                  onClick={() => handleCareerDetail(career)}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                          {index + 1}. {career}
                        </Typography>
                        <Chip 
                          icon={<TrendingUp />}
                          label={careerDatabase[career].demand} 
                          color={careerDatabase[career].demand === 'Very High' ? 'error' : 'success'}
                          size="small"
                        />
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                          {score}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Match
                        </Typography>
                      </Box>
                    </Box>
                    
                    <LinearProgress 
                      variant="determinate" 
                      value={score} 
                      sx={{ 
                        mb: 2, 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: '#e5e7eb'
                      }}
                    />
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {careerDatabase[career].description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label={careerDatabase[career].salary} size="small" variant="outlined" />
                      <Chip label={careerDatabase[career].growth} size="small" variant="outlined" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => window.location.href = '/career-paths'}
              sx={{ mr: 2 }}
            >
              Explore All Careers
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              onClick={handleRestartQuiz}
            >
              Retake Assessment
            </Button>
          </Box>
        </Paper>

        {/* Career Detail Dialog */}
        <Dialog 
          open={showDetailDialog} 
          onClose={() => setShowDetailDialog(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {selectedCareer} Career Details
            </Typography>
            <IconButton onClick={() => setShowDetailDialog(false)}>
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {selectedCareer && (
              <Box>
                <Typography variant="h6" gutterBottom color="primary">
                  Overview
                </Typography>
                <Typography paragraph>
                  {careerDatabase[selectedCareer].description}
                </Typography>

                <Grid container spacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      📊 Career Info
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography><strong>Salary Range:</strong> {careerDatabase[selectedCareer].salary}</Typography>
                      <Typography><strong>Job Growth:</strong> {careerDatabase[selectedCareer].growth}</Typography>
                      <Typography><strong>Demand Level:</strong> {careerDatabase[selectedCareer].demand}</Typography>
                      <Typography><strong>Education:</strong> {careerDatabase[selectedCareer].education}</Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      🎯 Key Skills
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {careerDatabase[selectedCareer].skills.map((skill, idx) => (
                        <Chip key={idx} label={skill} color="primary" variant="outlined" />
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      🏢 Top Employers
                    </Typography>
                    <Typography>
                      {careerDatabase[selectedCareer].companies.join(', ')}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      💫 Personality Fit
                    </Typography>
                    <Typography>
                      {careerDatabase[selectedCareer].personality}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowDetailDialog(false)}>Close</Button>
            <Button variant="contained" onClick={() => window.location.href = '/counseling'}>
              Book Career Session
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Psychology sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Career Assessment
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Discover careers that match your personality and interests
          </Typography>
        </Box>

        {/* Progress */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
              {Math.round(progress)}% Complete
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              backgroundColor: '#e5e7eb'
            }}
          />
        </Box>

        {/* Current Question */}
        <Box sx={{ mb: 1 }}>
          <Chip 
            label={questions[currentQuestion].category}
            color="primary"
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Box>
        
        <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          {questions[currentQuestion].question}
        </Typography>

        {/* Options */}
        <RadioGroup>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              fullWidth
              sx={{ 
                mb: 2, 
                p: 3, 
                justifyContent: 'flex-start',
                textTransform: 'none',
                borderColor: '#e5e7eb',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: '#f0f9ff'
                }
              }}
              onClick={() => handleAnswer(String.fromCharCode(65 + index))}
            >
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    {option}
                  </Typography>
                }
                sx={{ width: '100%', ml: 0 }}
              />
            </Button>
          ))}
        </RadioGroup>

        {/* Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="outlined"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            Previous
          </Button>
          
          <Typography variant="body2" color="text.secondary">
            Choose the option that best describes you
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default CareerQuiz;