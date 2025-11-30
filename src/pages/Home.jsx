import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { RocketLaunch } from '@mui/icons-material';
import Header from '../components/Header';
import CareerQuiz from '../components/CareerQuiz';

const Home = ({ user, onLogout }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  const features = [
    { icon: '🧠', title: 'Career Match', desc: 'Assessment to discover suitable careers', link: '#', action: () => setShowQuiz(true) },
    { icon: '💬', title: 'Mentors', desc: 'Connect with experienced counselors', link: '/counseling' },
    { icon: '📚', title: 'Resources', desc: 'Guides and learning materials', link: '/resources' },
    { icon: '🚀', title: 'Apply', desc: 'Resume and interview help', link: '/career-paths' }
  ];

  if (showQuiz) {
    return <div><Header user={user} onLogout={onLogout} /><CareerQuiz onComplete={() => setShowQuiz(false)} /></div>;
  }

  return (
    <div>
      <Header user={user} onLogout={onLogout} />

      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Find your next step</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 720, mx: 'auto' }}>
          Simple, guided career discovery — assessments, mentorship, and resources to help you grow.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Button variant="contained" size="medium" onClick={() => setShowQuiz(true)} startIcon={<RocketLaunch />}>Start Assessment</Button>
          <Button variant="outlined" size="medium" component={Link} to="/career-paths">Explore Careers</Button>
        </Stack>

        <Grid container spacing={3}>
          {features.map((f, i) => {
            const isLink = !!f.link && !f.action;
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  component={isLink ? Link : 'div'}
                  to={isLink ? f.link : undefined}
                  onClick={f.action ? f.action : undefined}
                  role="button"
                  aria-label={f.title}
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'transform 200ms ease, box-shadow 200ms ease',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }
                  }}
                >
                  <CardContent>
                    <Typography variant="h3" sx={{ fontSize: '2rem', mb: 1 }}>{f.icon}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{f.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{f.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;