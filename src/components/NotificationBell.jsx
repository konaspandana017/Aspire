import React, { useState } from 'react';
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip
} from '@mui/material';
import {
  Notifications,
  Event,
  School,
  Assignment,
  Psychology,
  CheckCircle,
  Schedule
} from '@mui/icons-material';

const NotificationBell = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'session',
      title: 'Counseling Session Reminder',
      message: 'Your session with Dr. Sarah Chen starts in 2 hours',
      time: '10 minutes ago',
      read: false,
      icon: <Event color="primary" />,
      action: '/counseling'
    },
    {
      id: 2,
      type: 'career',
      title: 'Career Match Found',
      message: 'New career recommendations based on your assessment',
      time: '1 hour ago',
      read: false,
      icon: <Psychology color="secondary" />,
      action: '/career-paths'
    },
    {
      id: 3,
      type: 'resource',
      title: 'New Resource Available',
      message: 'Software Engineering Guide 2024 has been updated',
      time: '2 hours ago',
      read: true,
      icon: <Assignment color="success" />,
      action: '/resources'
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Assessment Completed',
      message: 'You completed the Career Personality Test!',
      time: '1 day ago',
      read: true,
      icon: <CheckCircle color="warning" />,
      action: '/'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'session': return 'primary';
      case 'career': return 'secondary';
      case 'resource': return 'success';
      case 'achievement': return 'warning';
      default: return 'default';
    }
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleOpen}
        sx={{
          position: 'relative',
          '&:hover': {
            backgroundColor: 'rgba(37, 99, 235, 0.1)'
          }
        }}
      >
        <Badge badgeContent={unreadCount} color="error">
          <Notifications />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 360,
            maxHeight: 480,
            mt: 1.5
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ p: 2, pb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Notifications
            </Typography>
            {unreadCount > 0 && (
              <Button size="small" onClick={markAllAsRead}>
                Mark all as read
              </Button>
            )}
          </Box>
        </Box>

        <Divider />

        <List sx={{ p: 0 }}>
          {notifications.length === 0 ? (
            <ListItem>
              <ListItemIcon>
                <Notifications color="disabled" />
              </ListItemIcon>
              <ListItemText 
                primary="No notifications" 
                secondary="You're all caught up!"
              />
            </ListItem>
          ) : (
            notifications.map((notification) => (
              <MenuItem 
                key={notification.id}
                onClick={() => {
                  markAsRead(notification.id);
                  handleClose();
                  // Navigate to action in real app
                  console.log('Navigate to:', notification.action);
                }}
                sx={{
                  py: 1.5,
                  px: 2,
                  borderLeft: notification.read ? 'none' : `3px solid`,
                  borderLeftColor: `${getNotificationColor(notification.type)}.main`,
                  backgroundColor: notification.read ? 'transparent' : 'action.hover'
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {notification.icon}
                </ListItemIcon>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: notification.read ? 'normal' : 'bold',
                      lineHeight: 1.2,
                      mb: 0.5
                    }}
                  >
                    {notification.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.3,
                      mb: 1
                    }}
                  >
                    {notification.message}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                      label={notification.type}
                      size="small"
                      color={getNotificationColor(notification.type)}
                      variant="outlined"
                    />
                    <Typography variant="caption" color="text.secondary">
                      <Schedule sx={{ fontSize: 12, mr: 0.5, verticalAlign: 'middle' }} />
                      {notification.time}
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
            ))
          )}
        </List>

        <Divider />

        <Box sx={{ p: 1, textAlign: 'center' }}>
          <Button size="small" color="primary">
            View All Notifications
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default NotificationBell;