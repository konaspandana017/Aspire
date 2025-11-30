import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Box, Tabs, Tab, Alert, CircularProgress, Stack } from '@mui/material';
import { Psychology, Person, Lock, Email } from '@mui/icons-material';

const Login = ({ onLogin }) => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setError('');
    setFormData({ email: '', password: '', firstName: '', lastName: '' });
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
      if (tabValue === 0) {
        // Sign in
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });

        const data = await response.json().catch(() => null);
        if (data && data.success) {
          onLogin && onLogin(data.user);
        } else {
          setError((data && data.message) || 'Login failed');
        }
      } else {
        // Sign up — only collect name, email, password (no admin role or access code)
        const payload = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        }

        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json().catch(() => null);
        if (data && data.success) {
          onLogin && onLogin(data.user);
        } else {
          setError((data && data.message) || 'Registration failed')
        }
      }
    } catch (err) {
      // Network or unexpected error
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

      const data = await response.json().catch(() => null);

      if (data && data.success) {
        onLogin && onLogin(data.user);
      } else {
        // Backend login failed or returned unexpected response.
        // Fall back to a local demo account so the UI remains usable offline.
        const localDemoUser = {
          id: `demo-${userType}`,
          name: userType === 'admin' ? 'Demo Admin' : 'Demo Student',
          email: demoCredentials[userType].email,
          type: userType
        };
        onLogin && onLogin(localDemoUser);
        setError('Using local demo account (offline fallback)');
      }
    } catch (err) {
      // Network error — fallback to local demo account
      const demoCredentials = {
        student: { email: 'student@aspire.com', password: 'demo' },
        admin: { email: 'admin@aspire.com', password: 'demo' }
      };
      const localDemoUser = {
        id: `demo-${userType}`,
        name: userType === 'admin' ? 'Demo Admin' : 'Demo Student',
        email: demoCredentials[userType].email,
        type: userType
      };
      onLogin && onLogin(localDemoUser);
      setError('Cannot connect to server — signed in with local demo account');
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
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField
                  fullWidth
                  label="First name"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  InputProps={{ startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} /> }}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  variant="outlined"
                  size="small"
                />
              </Stack>
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

            {/* admin sign-up option removed — signup collects only name, email and password */}

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