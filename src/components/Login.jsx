import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Box, Tabs, Tab, Alert, CircularProgress, Stack } from '@mui/material';
import { Psychology, Person, Lock, Email } from '@mui/icons-material';

const Login = ({ onLogin }) => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setError('');
    setFormData({ email: '', password: '', name: '' });
  };

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.success) {
        onLogin && onLogin(data.user);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Cannot connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (userType) => {
    setLoading(true);
    try {
      const demoCredentials = {
        student: { email: 'student@aspire.com', password: 'demo' },
        admin: { email: 'admin@aspire.com', password: 'demo' }
      };

      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(demoCredentials[userType])
      });

      const data = await response.json();
      
      if (data.success) {
        onLogin && onLogin(data.user);
      } else {
        setError('Demo login failed');
      }
    } catch (err) {
      setError('Cannot connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Psychology sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>Aspire</Typography>
          <Typography variant="body2" color="text.secondary">Career guidance & resources</Typography>
        </Box>

        <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mb: 2 }}>
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            {tabValue === 1 && (
              <TextField
                fullWidth
                label="Full name"
                value={formData.name}
                onChange={handleInputChange('name')}
                InputProps={{ startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} /> }}
                variant="outlined"
                size="small"
              />
            )}

            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              InputProps={{ startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} /> }}
              variant="outlined"
              size="small"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              InputProps={{ startAdornment: <Lock sx={{ mr: 1, color: 'text.secondary' }} /> }}
              variant="outlined"
              size="small"
            />

            <Button type="submit" variant="contained" size="medium" disabled={loading} fullWidth sx={{ py: 1.25, fontWeight: 600 }}>
              {loading ? <CircularProgress size={20} color="inherit" /> : (tabValue === 0 ? 'Sign in' : 'Create account')}
            </Button>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
              <Button variant="text" size="small" onClick={() => handleDemoLogin('student')}>Demo Student</Button>
              <Button variant="text" size="small" onClick={() => handleDemoLogin('admin')}>Demo Admin</Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;