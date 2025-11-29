import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Box,
  Chip,
  Avatar,
  Stack,
  Paper,
  alpha
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  School, 
  ConnectWithoutContact, 
  Assignment, 
  Psychology,
  TrendingUp,
  Groups,
  EmojiEvents,
  Star,
  PlayArrow
} from '@mui/icons-material';
import Header from '../components/Header';
import CareerQuiz from '../components/CareerQuiz';

const Home = ({ user, onLogout }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  const features = [
    { 
      icon: <Psychology fontSize="large" />, 
      title: 'Career Assessment', 
      desc: 'Take our scientific assessment to discover careers that match your personality and skills',
      link: '#',
      buttonText: 'Start Assessment',
      action: () => setShowQuiz(true),
      color: '#2563eb'
    },
    { 
      icon: <ConnectWithoutContact fontSize="large" />, 
      title: 'Expert Counseling', 
      desc: '1-on-1 sessions with certified career counselors specializing in various industries',
      link: '/counseling',
      buttonText: 'Book Session',
      color: '#7c3aed'
    },
    { 
      icon: <Assignment fontSize="large" />, 
      title: 'Learning Resources', 
      desc: 'Access guides, video courses, and templates to build your career skills',
      link: '/resources',
      buttonText: 'Explore Resources',
      color: '#10b981'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students Helped' },
    { number: '50+', label: 'Career Experts' },
    { number: '95%', label: 'Success Rate' },
    { number: '4.9/5', label: 'User Rating' }
  ];

  const successStories = [
    {
      name: 'Sarah M.',
      role: 'Software Engineer at Google',
      story: 'Aspire helped me transition from marketing to tech. The career assessment pinpointed my strengths!',
      avatar: '/static/images/avatar/1.jpg',
      rating: 5
    },
    {
      name: 'James K.',
      role: 'Data Scientist at Netflix',
      story: 'The counseling sessions and resources were invaluable for my career change journey.',
      avatar: '/static/images/avatar/2.jpg',
      rating: 5
    },
    {
      name: 'Emily R.',
      role: 'UX Designer at Apple',
      story: 'Found my perfect career path through the assessment and expert guidance.',
      avatar: '/static/images/avatar/3.jpg',
      rating: 5
    }
  ];

  const popularCareers = [
    { title: 'Software Engineering', demand: 'Very High', salary: '$100K+', growth: '22%' },
    { title: 'Data Science', demand: 'Very High', salary: '$95K+', growth: '31%' },
    { title: 'UX/UI Design', demand: 'High', salary: '$85K+', growth: '13%' },
    { title: 'Digital Marketing', demand: 'Medium', salary: '$65K+', growth: '10%' }
  ];

  if (showQuiz) {
    return (
      <div>
        <Header user={user} onLogout={onLogout} />
        <CareerQuiz onComplete={() => setShowQuiz(false)} />
      </div>
    );
  }

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip 
                label="🚀 Trusted by 10,000+ Students" 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  color: 'white', 
                  mb: 3,
                  fontWeight: 'bold'
                }} 
              />
              <Typography 
                variant="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                Find Your Perfect Career Path
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  opacity: 0.9,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                AI-powered career assessment, expert counseling, and personalized guidance to launch your dream career.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => setShowQuiz(true)}
                  sx={{ 
                    py: 2, 
                    px: 4,
                    backgroundColor: 'white',
                    color: '#667eea',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#f8fafc'
                    }
                  }}
                >
                  Start Free Assessment
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  component={Link}
                  to="/career-paths"
                  sx={{ 
                    py: 2, 
                    px: 4,
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Explore Careers
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  textAlign: 'center'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 300,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 120,
                    color: 'rgba(255,255,255,0.3)'
                  }}
                >
                  🚀
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            How Aspire Helps You Succeed
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            From career discovery to job placement, we provide comprehensive support at every step
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  textAlign: 'center', 
                  p: 4,
                  transition: '0.3s',
                  border: `2px solid ${alpha(feature.color, 0.1)}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${alpha(feature.color, 0.15)}`,
                    border: `2px solid ${alpha(feature.color, 0.3)}`
                  }
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      backgroundColor: alpha(feature.color, 0.1),
                      color: feature.color,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '72px' }}>
                    {feature.desc}
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="large"
                    component={feature.action ? undefined : Link}
                    to={feature.action ? undefined : feature.link}
                    onClick={feature.action}
                    sx={{
                      backgroundColor: feature.color,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: feature.color,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {feature.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Popular Careers Section */}
      <Box sx={{ backgroundColor: '#f8fafc', py: 8 }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Explore In-Demand Careers
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Discover high-growth career paths with excellent opportunities
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {popularCareers.map((career, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    transition: '0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {career.title}
                  </Typography>
                  <Chip 
                    label={career.demand} 
                    color={career.demand === 'Very High' ? 'error' : 'success'}
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Salary: {career.salary}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                    Growth: {career.growth}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="outlined" 
              size="large"
              component={Link}
              to="/career-paths"
              sx={{ px: 4 }}
            >
              View All Career Paths
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Success Stories */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Success Stories
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Hear from students who transformed their careers with Aspire
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {successStories.map((story, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ p: 3, height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ width: 60, height: 60, mr: 2, backgroundColor: 'primary.main' }}>
                      {story.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {story.name}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {story.role}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} sx={{ fontSize: 16, color: 'warning.main' }} />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary" fontStyle="italic">
                    "{story.story}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <EmojiEvents sx={{ fontSize: 64, mb: 3, color: 'gold' }} />
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Start Your Career Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of students who have found their dream careers with Aspire
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              size="large"
              onClick={() => setShowQuiz(true)}
              sx={{ 
                py: 2, 
                px: 4,
                backgroundColor: 'white',
                color: '#4f46e5',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#f8fafc'
                }
              }}
            >
              Start Free Assessment
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              component={Link}
              to="/counseling"
              sx={{ 
                py: 2, 
                px: 4,
                borderColor: 'white',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Book Expert Session
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Home;