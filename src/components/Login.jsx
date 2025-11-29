import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Tabs, 
  Tab,
  Alert,
  CircularProgress
} from '@mui/material';
import { Psychology, Person, Lock, Email } from '@mui/icons-material';

const Login = ({ onLogin }) => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setError('');
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    });
  };

  const handleInputChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return false;
    }

    if (tabValue === 1) {
      if (!formData.name) {
        setError('Please enter your name');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // Demo authentication - in real app, connect to backend
      const userType = formData.email.includes('admin') ? 'admin' : 'user';
      
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        name: tabValue === 1 ? formData.name : (userType === 'admin' ? 'Admin User' : 'Demo User'),
        email: formData.email,
        type: userType,
        joinDate: new Date().toISOString()
      };

      onLogin(user);
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (userType) => {
    const demoUsers = {
      student: {
        id: 'demo-student-123',
        name: 'Demo Student',
        email: 'student@aspire.com',
        type: 'user'
      },
      admin: {
        id: 'demo-admin-123',
        name: 'Admin User',
        email: 'admin@aspire.com',
        type: 'admin'
      }
    };

    onLogin(demoUsers[userType]);
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        mt: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper 
        elevation={8} 
        sx={{ 
          p: 5, 
          width: '100%',
          background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
          borderRadius: 3
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Psychology 
            sx={{ 
              fontSize: 48, 
              color: 'primary.main',
              mb: 2
            }} 
          />
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Aspire
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Your Career Guidance Platform
          </Typography>
        </Box>

        {/* Tabs */}
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          centered 
          sx={{ 
            mb: 4,
            '& .MuiTab-root': {
              fontWeight: 600,
              fontSize: '1rem'
            }
          }}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Demo Login Buttons */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Quick Demo Access:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
            <Button 
              variant="outlined" 
              size="small"
              onClick={() => handleDemoLogin('student')}
            >
              Demo Student
            </Button>
            <Button 
              variant="outlined" 
              size="small"
              onClick={() => handleDemoLogin('admin')}
            >
              Demo Admin
            </Button>
          </Box>
        </Box>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {tabValue === 1 && (
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              value={formData.name}
              onChange={handleInputChange('name')}
              required
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />
              }}
            />
          )}
          
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            margin="normal"
            value={formData.email}
            onChange={handleInputChange('email')}
            required
            InputProps={{
              startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />
            }}
          />
          
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={formData.password}
            onChange={handleInputChange('password')}
            required
            InputProps={{
              startAdornment: <Lock sx={{ mr: 1, color: 'text.secondary' }} />
            }}
          />
          
          {tabValue === 1 && (
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              required
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1, color: 'text.secondary' }} />
              }}
            />
          )}
          
          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 4, 
              mb: 2, 
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
              boxShadow: '0 3px 5px 2px rgba(37, 99, 235, .3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1d4ed8 30%, #6d28d9 90%)',
              }
            }}
            size="large"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              tabValue === 0 ? 'Sign In to Aspire' : 'Create Account'
            )}
          </Button>
        </form>

        {/* Footer Info */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {tabValue === 0 ? "Don't have an account? " : "Already have an account? "}
            <Button 
              color="primary" 
              size="small" 
              onClick={() => handleTabChange(null, tabValue === 0 ? 1 : 0)}
              sx={{ fontWeight: 600 }}
            >
              {tabValue === 0 ? 'Sign Up' : 'Sign In'}
            </Button>
          </Typography>
          
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;