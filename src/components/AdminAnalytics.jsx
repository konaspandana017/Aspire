import React from 'react';
import { Card, CardContent, Typography, Box, Grid, LinearProgress } from '@mui/material';
import { TrendingUp, People, School, Event, Assessment, Download } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AdminAnalytics = () => {
  // Analytics data
  const analyticsData = [
    { title: 'Total Users', value: '1,234', change: '+12%', icon: <People />, color: '#2563eb' },
    { title: 'Active Sessions', value: '47', change: '+5%', icon: <Event />, color: '#7c3aed' },
    { title: 'Career Quizzes', value: '289', change: '+23%', icon: <School />, color: '#10b981' },
    { title: 'Engagement Rate', value: '68%', change: '+8%', icon: <TrendingUp />, color: '#f59e0b' }
  ];

  // Chart data
  const userGrowthData = [
    { month: 'Jan', users: 400 },
    { month: 'Feb', users: 600 },
    { month: 'Mar', users: 800 },
    { month: 'Apr', users: 1000 },
    { month: 'May', users: 1200 },
    { month: 'Jun', users: 1234 }
  ];

  const careerDistributionData = [
    { name: 'Software', value: 35, color: '#2563eb' },
    { name: 'Data Science', value: 25, color: '#7c3aed' },
    { name: 'Design', value: 20, color: '#10b981' },
    { name: 'Business', value: 15, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#ef4444' }
  ];

  const activityData = [
    { activity: 'Career Quiz', completions: 289, progress: 85 },
    { activity: 'Session Booking', completions: 156, progress: 65 },
    { activity: 'Resource Download', completions: 432, progress: 92 }
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 0 }}>
          📊 Analytics Dashboard
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Last 30 days
          </Typography>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {analyticsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ 
                    backgroundColor: `${item.color}15`, 
                    borderRadius: 2, 
                    p: 1,
                    color: item.color
                  }}>
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      backgroundColor: item.change.includes('+') ? '#10b98115' : '#ef444415',
                      color: item.change.includes('+') ? '#10b981' : '#ef4444',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: 'bold'
                    }}
                  >
                    {item.change}
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {item.value}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3}>
        {/* User Growth Chart */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                User Growth Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Career Distribution */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Career Interest Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={careerDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {careerDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Activity Progress */}
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Platform Activity
              </Typography>
              <Grid container spacing={3}>
                {activityData.map((activity, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                        {activity.completions}
                      </Typography>
                      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium' }}>
                        {activity.activity}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <LinearProgress 
                          variant="determinate" 
                          value={activity.progress} 
                          sx={{ 
                            width: '80%', 
                            height: 8, 
                            borderRadius: 4,
                            backgroundColor: '#e5e7eb'
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {activity.progress}% completion rate
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Stats Footer */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f8fafc', borderRadius: 2 }}>
            <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
              94%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              User Satisfaction
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f8fafc', borderRadius: 2 }}>
            <Typography variant="h6" color="success.main" sx={{ fontWeight: 'bold' }}>
              12.3k
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Sessions
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f8fafc', borderRadius: 2 }}>
            <Typography variant="h6" color="warning.main" sx={{ fontWeight: 'bold' }}>
              3.2min
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Avg. Session Time
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f8fafc', borderRadius: 2 }}>
            <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 'bold' }}>
              87%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Retention Rate
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminAnalytics;