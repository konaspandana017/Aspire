import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { TrendingUp, People, School, Event } from '@mui/icons-material';

const AdminAnalytics = () => {
  const analyticsData = [
    { title: 'Total Users', value: '1,234', change: '+12%', icon: <People /> },
    { title: 'Active Sessions', value: '47', change: '+5%', icon: <Event /> },
    { title: 'Career Quizzes', value: '289', change: '+23%', icon: <School /> },
    { title: 'Engagement Rate', value: '68%', change: '+8%', icon: <TrendingUp /> }
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>Analytics Overview</Typography>
      <Grid container spacing={3}>
        {analyticsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 2 }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6">{item.title}</Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {item.value}
                </Typography>
                <Typography color="success.main" variant="body2">
                  {item.change} from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminAnalytics;