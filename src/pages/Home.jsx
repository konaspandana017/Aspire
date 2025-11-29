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
  alpha,
  Fade
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Psychology, 
  ConnectWithoutContact, 
  Assignment, 
  TrendingUp,
  EmojiEvents,
  Star,
  PlayCircle,
  School,
  Work,
  Groups,
  RocketLaunch
} from '@mui/icons-material';
import Header from '../components/Header';
import CareerQuiz from '../components/CareerQuiz';

const Home = ({ user, onLogout }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  const features = [
    { 
      icon: <Psychology sx={{ fontSize: 40 }} />, 
      title: 'Smart Assessment', 
      desc: 'AI-powered career assessment that matches your personality with ideal career paths',
      color: '#6366f1'
    },
    { 
      icon: <ConnectWithoutContact sx={{ fontSize: 40 }} />, 
      title: 'Expert Guidance', 
      desc: '1-on-1 sessions with industry professionals and career counselors',
      color: '#10b981'
    },
    { 
      icon: <Assignment sx={{ fontSize: 40 }} />, 
      title: 'Learning Paths', 
      desc: 'Structured courses and resources to build skills for your chosen career',
      color: '#f59e0b'
    },
    { 
      icon: <Work sx={{ fontSize: 40 }} />, 
      title: 'Job Ready', 
      desc: 'Resume building, interview prep, and job placement assistance',
      color: '#ef4444'
    }
  ];

  const stats = [
    { icon: <Groups />, number: '10K+', label: 'Students Transformed' },
    { icon: <School />, number: '95%', label: 'Success Rate' },
    { icon: <Star />, number: '4.9/5', label: 'User Rating' },
    { icon: <TrendingUp />, number: '50+', label: 'Career Experts' }
  ];

  const quickActions = [
    { title: 'Take Assessment', desc: 'Discover your career matches', icon: '🧩', link: '#', action: () => setShowQuiz(true), color: '#6366f1' },
    { title: 'Browse Careers', desc: 'Explore 100+ career paths', icon: '🔍', link: '/career-paths', color: '#10b981' },
    { title: 'Book Session', desc: 'Talk to career experts', icon: '💬', link: '/counseling', color: '#f59e0b' },
    { title: 'Resources', desc: 'Learning materials & guides', icon: '📚', link: '/resources', color: '#8b5cf6' }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Software Engineer → Google',
      text: 'Aspire helped me transition from biology to tech. The assessment was incredibly accurate!',
      avatar: 'A'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Student → Apple',
      text: 'The career counseling sessions gave me the confidence to pursue my dream job at Apple.',
      avatar: 'S'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Teacher → Data Scientist',
      text: 'Complete career change made possible through Aspire learning paths and mentorship.',
      avatar: 'M'
    }
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
    <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', minHeight: '100vh' }}>
      <Header user={user} onLogout={onLogout} />
      
      {/* Hero Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Chip 
                    icon={<RocketLaunch />}
                    label="Transform Your Career Journey" 
                    color="primary" 
                    sx={{ mb: 3, fontWeight: 'bold', py: 1 }}
                  />
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 'bold',
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      lineHeight: 1.1,
                      mb: 2,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    Discover Your Perfect Career Path
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 4, 
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    AI-powered career guidance, expert mentorship, and personalized learning paths to help you build the career you love.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button 
                      variant="contained" 
                      size="large"
                      onClick={() => setShowQuiz(true)}
                      startIcon={<Psychology />}
                      sx={{ 
                        py: 2, 
                        px: 4,
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #5b5cea 0%, #7c4df0 100%)',
                          transform: 'translateY(-2px)'
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
                      startIcon={<PlayCircle />}
                      sx={{ 
                        py: 2, 
                        px: 4,
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Explore Careers
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade in timeout={1500}>
                <Box
                  sx={{
                    position: 'relative',
                    textAlign: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 400,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -50,
                        left: -50,
                        width: 100,
                        height: 100,
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%'
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -30,
                        right: -30,
                        width: 80,
                        height: 80,
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%'
                      }
                    }}
                  >
                    <Box sx={{ textAlign: 'center', zIndex: 1 }}>
                      <Typography variant="h1" sx={{ fontSize: 80, mb: 2 }}>
                        🚀
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Your Career Journey Starts Here
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Fade in timeout={800 + index * 200}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Quick Actions */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
          Get Started in Minutes
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          Quick actions to jumpstart your career journey
        </Typography>

        <Grid container spacing={3}>
          {quickActions.map((action, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Card 
                  sx={{ 
                    textAlign: 'center', 
                    p: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: `2px solid ${alpha(action.color, 0.1)}`,
                    background: `linear-gradient(135deg, ${alpha(action.color, 0.05)} 0%, ${alpha(action.color, 0.02)} 100%)`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: `2px solid ${alpha(action.color, 0.3)}`,
                      boxShadow: `0 20px 40px ${alpha(action.color, 0.15)}`
                    }
                  }}
                  onClick={action.action || (() => window.location.href = action.link)}
                >
                  <CardContent>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {action.icon}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: action.color }}>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {action.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ py: 8, background: 'white' }}>
        <Container>
          <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
            How Aspire Works
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
            A complete ecosystem for your career development
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Fade in timeout={1200 + index * 200}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${feature.color} 0%, ${alpha(feature.color, 0.7)} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          flexShrink: 0
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: feature.color }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {feature.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
          Success Stories
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          See how Aspire has transformed careers
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1400 + index * 200}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar 
                        sx={{ 
                          width: 60, 
                          height: 60, 
                          mr: 2,
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                          fontWeight: 'bold',
                          fontSize: '1.2rem'
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="primary" sx={{ fontWeight: 'medium' }}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" color="text.secondary" fontStyle="italic" sx={{ lineHeight: 1.6 }}>
                      "{testimonial.text}"
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Final CTA */}
      <Box sx={{ py: 8, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}>
        <Container maxWidth="md">
          <Fade in timeout={1600}>
            <Box sx={{ textAlign: 'center', color: 'white' }}>
              <EmojiEvents sx={{ fontSize: 64, mb: 3 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Ready to Transform Your Career?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Join thousands of students who discovered their dream careers with Aspire
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => setShowQuiz(true)}
                startIcon={<RocketLaunch />}
                sx={{ 
                  py: 2, 
                  px: 6,
                  backgroundColor: 'white',
                  color: '#6366f1',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#f8fafc',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Launch Your Career Journey
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>
    </div>
  );
};

export default Home;