import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Header = ({ user, onLogout }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 2 }}>
      <Toolbar>
        <PsychologyIcon sx={{ mr: 2, color: 'primary.main' }} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Aspire
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {user && (
            <Chip 
              label={`Hello, ${user.name}`} 
              color="primary" 
              variant="outlined" 
            />
          )}
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/career-paths">Careers</Button>
          <Button color="inherit" component={Link} to="/counseling">Counseling</Button>
          <Button color="inherit" component={Link} to="/resources">Resources</Button>
          {user && (
            <Button color="error" onClick={onLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;