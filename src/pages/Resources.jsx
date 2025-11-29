import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Header from '../components/Header';
import ArticleIcon from '@mui/icons-material/Article';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';

const Resources = () => {
  const resources = [
    { icon: <ArticleIcon />, title: 'Career Guides', type: 'PDF', items: '15+ guides' },
    { icon: <VideoLibraryIcon />, title: 'Video Tutorials', type: 'Videos', items: '50+ videos' },
    { icon: <DescriptionIcon />, title: 'Resume Templates', type: 'Templates', items: '20+ templates' },
  ];

  return (
    <div>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>Career Resources</Typography>
        <Grid container spacing={3}>
          {resources.map((resource, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                  <div style={{ color: '#2563eb', fontSize: '40px' }}>{resource.icon}</div>
                  <Typography variant="h6" sx={{ mt: 1 }}>{resource.title}</Typography>
                  <Typography color="text.secondary">{resource.type}</Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>{resource.items}</Typography>
                  <Button variant="outlined">Explore</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Resources;