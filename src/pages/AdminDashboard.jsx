import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'
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
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Badge } from '@mui/material'

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: <People />, label: 'Total Users', value: '1,234', color: 'primary' },
    { icon: <School />, label: 'Active Sessions', value: '47', color: 'secondary' },
    { icon: <Event />, label: 'Bookings This Week', value: '23', color: 'success' },
    { icon: <TrendingUp />, label: 'Engagement Rate', value: '68%', color: 'warning' }
  ];

  // Sample last 3 days metrics (labels are last 3 dates)
  const today = new Date()
  const formatDate = (d) => `${d.getMonth()+1}/${d.getDate()}`
  const dates = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate()-2),
    new Date(today.getFullYear(), today.getMonth(), today.getDate()-1),
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  ]
  const last3Labels = dates.map(formatDate)
  const last3NewUsersSample = [5, 12, 8]
  const last3SessionsSample = [22, 30, 27]

  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New user signed up: alice@example.com', time: '2h ago', read: false },
    { id: 2, text: 'Resource uploaded: Resume Guide', time: '1d ago', read: false },
    { id: 3, text: 'Quiz completions increased by 12%', time: '2d ago', read: true }
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAllRead = () => setNotifications(notifications.map(n => ({ ...n, read: true })))
  // API endpoints you can change — if endpoints respond, we'll use live data
  const METRICS_API = '/api/admin/metrics'
  const NOTIFICATIONS_API = '/api/admin/notifications'

  const [last3NewUsers, setLast3NewUsers] = useState(last3NewUsersSample)
  const [last3Sessions, setLast3Sessions] = useState(last3SessionsSample)

  // Try to fetch metrics and notifications from backend; fall back to sample data on error
  useEffect(() => {
    let mounted = true

    fetch(METRICS_API)
      .then(res => res.json())
      .then(data => {
        if (!mounted || !data) return
        // Expecting an object like { last3NewUsers: [...], last3Sessions: [...] }
        if (Array.isArray(data.last3NewUsers) && Array.isArray(data.last3Sessions)) {
          setLast3NewUsers(data.last3NewUsers)
          setLast3Sessions(data.last3Sessions)
        }
      }).catch(() => {})

    fetch(NOTIFICATIONS_API)
      .then(res => res.json())
      .then(data => {
        if (!mounted || !data) return
        // Expecting array of notifications
        if (Array.isArray(data)) {
          setNotifications(data)
        }
      }).catch(() => {})

    return () => { mounted = false }
  }, [])

  // Recharts-based small area chart wrapper
  const SmallAreaChart = ({ data, labels, color = '#2563eb' }) => {
    const chartData = data.map((v, i) => ({ name: labels[i] || `P${i+1}`, value: v }))

    return (
      <div style={{ width: '100%', height: 120 }}>
        <ResponsiveContainer>
          <AreaChart data={chartData} margin={{ top: 6, right: 6, left: 6, bottom: 6 }}>
            <defs>
              <linearGradient id={`grad-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.06} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis hide />
            <Tooltip formatter={(value) => [value, 'Value']} />
            <Area type="monotone" dataKey="value" stroke={color} fill={`url(#grad-${color.replace('#','')})`} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }

  const users = [
    { id: 1, name: 'John Student', email: 'john@student.com', sessions: 3, status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Sarah Learner', email: 'sarah@student.com', sessions: 1, status: 'Active', joinDate: '2024-02-20' },
    { id: 3, name: 'Mike Explorer', email: 'mike@student.com', sessions: 0, status: 'Inactive', joinDate: '2024-01-08' }
  ];

  const resources = [
    { id: 1, title: 'Software Engineering Guide', type: 'PDF', downloads: 156, uploadDate: '2024-01-10' },
    { id: 2, title: 'Career Assessment v2', type: 'Quiz', completions: 89, uploadDate: '2024-02-15' },
    { id: 3, title: 'Resume Template Pack', type: 'Template', downloads: 203, uploadDate: '2024-01-22' }
  ];

  const renderOverview = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Dashboard Overview
      </Typography>
      
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

      {/* Recent trends + Notifications */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6">Last 3 Days Trends</Typography>
                <Typography variant="caption" color="text.secondary"><AccessTimeIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} />Updated now</Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary">New Users</Typography>
                  <SmallLineChart data={last3NewUsers} labels={last3Labels} color="#2563eb" />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    {last3Labels.map((lbl, i) => (
                      <Typography key={lbl} variant="caption" color="text.secondary">{lbl}</Typography>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary">Sessions</Typography>
                  <SmallLineChart data={last3Sessions} labels={last3Labels} color="#7c3aed" />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    {last3Labels.map((lbl) => (
                      <Typography key={lbl} variant="caption" color="text.secondary">{lbl}</Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Badge color="error" badgeContent={unreadCount}>
                    <NotificationsIcon />
                  </Badge>
                  <Typography variant="h6">Notifications</Typography>
                </Box>
                <Box>
                  <IconButton size="small" onClick={markAllRead} title="Mark all read"><DoneAllIcon /></IconButton>
                </Box>
              </Box>

              <Box>
                {notifications.map(n => (
                  <Box key={n.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: n.read ? 400 : 700 }}>{n.text}</Typography>
                      <Typography variant="caption" color="text.secondary">{n.time}</Typography>
                    </Box>
                    <Box>
                      {n.read ? <NotificationsNoneIcon color="disabled" /> : <NotificationsIcon color="primary" />}
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
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
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        <ManageAccounts sx={{ mr: 1, verticalAlign: 'middle' }} />
        User Management
      </Typography>
      
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
                  <IconButton size="small" color="error" title="Delete User">
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
                  <Chip label={resource.type} variant="outlined" size="small" />
                </TableCell>
                <TableCell>
                  <strong>{resource.downloads || resource.completions}</strong>
                </TableCell>
                <TableCell>{resource.uploadDate}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" title="Edit Resource">
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error" title="Delete Resource">
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