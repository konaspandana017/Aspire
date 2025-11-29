import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SchoolIcon from '@mui/icons-material/School';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CareerQuiz from '../components/CareerQuiz';

const Home = ({ user, onLogout }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  const features = [
    { 
      icon: <SchoolIcon fontSize="large" />, 
      title: 'Career Assessment', 
      desc: 'Discover your perfect career path',
      link: '/career-paths',
      buttonText: 'Take Assessment',
      action: () => setShowQuiz(true)
    },
    { 
      icon: <ConnectWithoutContactIcon fontSize="large" />, 
      title: 'Expert Counseling', 
      desc: 'Connect with career experts',
      link: '/counseling',
      buttonText: 'Book Session'
    },
    { 
      icon: <AssignmentIcon fontSize="large" />, 
      title: 'Resources', 
      desc: 'Access career guides and materials',
      link: '/resources',
      buttonText: 'View Resources'
    },
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
      
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Find Your Perfect Career Path
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Welcome back, {user?.name}! Ready to explore your future?
        </Typography>
        <Button variant="contained" size="large" onClick={() => setShowQuiz(true)} sx={{ mr: 2 }}>
          Start Career Assessment
        </Button>
        <Button variant="outlined" size="large" component={Link} to="/career-paths">
          Explore Careers
        </Button>
      </Container>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <div style={{ color: '#2563eb' }}>{feature.icon}</div>
                  <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    {feature.desc}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    component={feature.action ? undefined : Link}
                    to={feature.action ? undefined : feature.link}
                    onClick={feature.action}
                    sx={{ mt: 'auto' }}
                  >
                    {feature.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;