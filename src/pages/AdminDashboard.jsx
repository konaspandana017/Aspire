import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Tabs,
  Tab
} from '@mui/material';
import { 
  People, 
  School, 
  Event, 
  TrendingUp,
  Edit,
  Delete,
  Dashboard,
  ManageAccounts,
  Folder
} from '@mui/icons-material';
import Header from '../components/Header';
import AdminAnalytics from '../components/AdminAnalytics';
import ResourceUpload from '../components/ResourceUpload';

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = [
    { icon: <People />, label: 'Total Users', value: '1,234', color: 'primary' },
    { icon: <School />, label: 'Active Sessions', value: '47', color: 'secondary' },
    { icon: <Event />, label: 'Bookings This Week', value: '23', color: 'success' },
    { icon: <TrendingUp />, label: 'Engagement Rate', value: '68%', color: 'warning' }
  ];

  const users = [
    { id: 1, name: 'John Student', email: 'john@student.com', sessions: 3, status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Sarah Learner', email: 'sarah@student.com', sessions: 1, status: 'Active', joinDate: '2024-02-20' },
    { id: 3, name: 'Mike Explorer', email: 'mike@student.com', sessions: 0, status: 'Inactive', joinDate: '2024-01-08' },
    { id: 4, name: 'Emily Career', email: 'emily@student.com', sessions: 5, status: 'Active', joinDate: '2024-03-01' }
  ];

  const resources = [
    { id: 1, title: 'Software Engineering Guide', type: 'PDF', downloads: 156, uploadDate: '2024-01-10' },
    { id: 2, title: 'Career Assessment v2', type: 'Quiz', completions: 89, uploadDate: '2024-02-15' },
    { id: 3, title: 'Resume Template Pack', type: 'Template', downloads: 203, uploadDate: '2024-01-22' },
    { id: 4, title: 'Interview Preparation', type: 'Video', views: 312, uploadDate: '2024-03-05' }
  ];

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      alert(`User ${userId} deleted successfully!`);
    }
  };

  const handleDeleteResource = (resourceId) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      alert(`Resource ${resourceId} deleted successfully!`);
    }
  };

  const renderOverview = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Dashboard Overview
      </Typography>
      
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ color: `${stat.color}.main`, fontSize: 40, mb: 1 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography color="text.secondary" variant="h6">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Analytics Component */}
      <AdminAnalytics />

      {/* Resource Upload Component */}
      <ResourceUpload />

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <People sx={{ mr: 1 }} /> Recent Users
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Sessions</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.slice(0, 3).map((user) => (
                      <TableRow key={user.id} hover>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.sessions}</TableCell>
                        <TableCell>
                          <Chip 
                            label={user.status} 
                            color={user.status === 'Active' ? 'success' : 'default'}
                            size="small"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <Folder sx={{ mr: 1 }} /> Popular Resources
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Resource</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Engagement</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {resources.slice(0, 3).map((resource) => (
                      <TableRow key={resource.id} hover>
                        <TableCell>{resource.title}</TableCell>
                        <TableCell>
                          <Chip label={resource.type} size="small" variant="outlined" />
                        </TableCell>
                        <TableCell>
                          {resource.downloads || resource.completions || resource.views}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderUsers = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        <ManageAccounts sx={{ mr: 1, verticalAlign: 'middle' }} />
        User Management
      </Typography>
      
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Total Users: {users.length}
        </Typography>
        <Button variant="contained" color="primary">
          Add New User
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Sessions</strong></TableCell>
              <TableCell><strong>Join Date</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.sessions}</TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <Chip 
                    label={user.status} 
                    color={user.status === 'Active' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" title="Edit User">
                    <Edit />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    color="error" 
                    title="Delete User"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const renderResources = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        <Folder sx={{ mr: 1, verticalAlign: 'middle' }} />
        Resource Management
      </Typography>
      
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Total Resources: {resources.length}
        </Typography>
        <Button variant="contained" color="primary">
          Add New Resource
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Engagement</strong></TableCell>
              <TableCell><strong>Upload Date</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.id} hover>
                <TableCell>{resource.title}</TableCell>
                <TableCell>
                  <Chip 
                    label={resource.type} 
                    color={resource.type === 'PDF' ? 'primary' : resource.type === 'Quiz' ? 'secondary' : 'success'}
                    variant="outlined" 
                    size="small" 
                  />
                </TableCell>
                <TableCell>
                  <strong>{resource.downloads || resource.completions || resource.views}</strong>
                </TableCell>
                <TableCell>{resource.uploadDate}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" title="Edit Resource">
                    <Edit />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    color="error" 
                    title="Delete Resource"
                    onClick={() => handleDeleteResource(resource.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          <Dashboard sx={{ mr: 2, verticalAlign: 'middle' }} />
          Admin Dashboard
        </Typography>

        {/* Navigation Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
            <Tab 
              icon={<Dashboard />} 
              iconPosition="start"
              label="Overview" 
              value="overview" 
            />
            <Tab 
              icon={<ManageAccounts />} 
              iconPosition="start"
              label="User Management" 
              value="users" 
            />
            <Tab 
              icon={<Folder />} 
              iconPosition="start"
              label="Resource Management" 
              value="resources" 
            />
          </Tabs>
        </Box>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'resources' && renderResources()}
      </Container>
    </div>
  );
};

export default AdminDashboard;