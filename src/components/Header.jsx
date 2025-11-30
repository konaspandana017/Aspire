import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Chip, 
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider
} from '@mui/material';
import { 
  Psychology, 
  AccountCircle, 
  Dashboard,
  Logout,
  Settings
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import NotificationBell from './NotificationBell';

const Header = ({ user, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        color: 'black', 
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
        borderBottom: '1px solid #e5e7eb'
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
          <Psychology sx={{ mr: 2, color: 'primary.main', fontSize: 32 }} />
          <Typography 
            variant="h5" 
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
        </Box>

        {/* Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, gap: 1 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontWeight: isActive('/') ? 'bold' : 'normal',
              color: isActive('/') ? 'primary.main' : 'text.primary',
              backgroundColor: isActive('/') ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.05)'
              }
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/career-paths"
            sx={{
              fontWeight: isActive('/career-paths') ? 'bold' : 'normal',
              color: isActive('/career-paths') ? 'primary.main' : 'text.primary',
              backgroundColor: isActive('/career-paths') ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.05)'
              }
            }}
          >
            Career Paths
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/counseling"
            sx={{
              fontWeight: isActive('/counseling') ? 'bold' : 'normal',
              color: isActive('/counseling') ? 'primary.main' : 'text.primary',
              backgroundColor: isActive('/counseling') ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.05)'
              }
            }}
          >
            Counseling
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/resources"
            sx={{
              fontWeight: isActive('/resources') ? 'bold' : 'normal',
              color: isActive('/resources') ? 'primary.main' : 'text.primary',
              backgroundColor: isActive('/resources') ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.05)'
              }
            }}
          >
            Resources
          </Button>
          {user?.type === 'admin' && (
            <Button
              color="inherit"
              component={Link}
              to="/admin"
              sx={{
                fontWeight: isActive('/admin') ? 'bold' : 'normal',
                color: isActive('/admin') ? 'primary.main' : 'text.primary',
                backgroundColor: isActive('/admin') ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.05)'
                }
              }}
            >
              Admin Dashboard
            </Button>
          )}
        </Box>

        {/* User Info & Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {user && (
            <>
              {/* Notification Bell */}
              <NotificationBell />
              
              <Chip 
                avatar={<Avatar sx={{ width: 24, height: 24 }}>{user.name?.charAt(0)}</Avatar>}
                label={
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Hello, {user.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {user.type === 'admin' ? 'Administrator' : 'Student'}
                    </Typography>
                  </Box>
                }
                variant="outlined"
                color="primary"
              />
              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: 1 }}
              >
                <MenuItem onClick={handleClose}>
                  <AccountCircle sx={{ mr: 2 }} />
                  My Profile
                </MenuItem>
                {user.type === 'admin' && (
                  <MenuItem 
                    component={Link} 
                    to="/admin"
                    onClick={handleClose}
                  >
                    <Dashboard sx={{ mr: 2 }} />
                    Admin Dashboard
                  </MenuItem>
                )}
                <MenuItem onClick={handleClose}>
                  <Settings sx={{ mr: 2 }} />
                  Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                  <Logout sx={{ mr: 2 }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;