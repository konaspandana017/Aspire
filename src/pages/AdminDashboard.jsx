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
  IconButton
} from '@mui/material';
import { 
  People, 
  School, 
  Event, 
  TrendingUp,
  Edit,
  Delete
} from '@mui/icons-material';
import Header from '../components/Header';

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
    { id: 1, name: 'John Student', email: 'john@student.com', sessions: 3, status: 'Active' },
    { id: 2, name: 'Sarah Learner', email: 'sarah@student.com', sessions: 1, status: 'Active' },
    { id: 3, name: 'Mike Explorer', email: 'mike@student.com', sessions: 0, status: 'Inactive' }
  ];

  const resources = [
    { id: 1, title: 'Software Engineering Guide', type: 'PDF', downloads: 156 },
    { id: 2, title: 'Career Assessment v2', type: 'Quiz', completions: 89 },
    { id: 3, title: 'Resume Template Pack', type: 'Template', downloads: 203 }
  ];

  const renderOverview = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ color: `${stat.color}.main`, fontSize: 40 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {stat.value}
                </Typography>
                <Typography color="text.secondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Users
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
                      <TableRow key={user.id}>
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
              <Typography variant="h6" gutterBottom>
                Popular Resources
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
                      <TableRow key={resource.id}>
                        <TableCell>{resource.title}</TableCell>
                        <TableCell>
                          <Chip label={resource.type} size="small" variant="outlined" />
                        </TableCell>
                        <TableCell>
                          {resource.downloads || resource.completions}
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
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        User Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Sessions</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.sessions}</TableCell>
                <TableCell>
                  <Chip 
                    label={user.status} 
                    color={user.status === 'Active' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error">
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
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Resource Management
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained">
          Add New Resource
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Engagement</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell>{resource.title}</TableCell>
                <TableCell>
                  <Chip label={resource.type} variant="outlined" size="small" />
                </TableCell>
                <TableCell>
                  {resource.downloads || resource.completions}
                </TableCell>
                <TableCell>
                  <IconButton size="small" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error">
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
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Admin Dashboard
        </Typography>

        {/* Navigation Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Button
            variant={activeTab === 'overview' ? 'contained' : 'text'}
            onClick={() => setActiveTab('overview')}
            sx={{ mr: 2 }}
          >
            Overview
          </Button>
          <Button
            variant={activeTab === 'users' ? 'contained' : 'text'}
            onClick={() => setActiveTab('users')}
            sx={{ mr: 2 }}
          >
            Users
          </Button>
          <Button
            variant={activeTab === 'resources' ? 'contained' : 'text'}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </Button>
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