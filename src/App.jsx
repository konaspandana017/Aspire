import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from './pages/Home';
import CareerPaths from './pages/CareerPaths';
import Counseling from './pages/Counseling';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import AdminDashboard from './pages/AdminDashboard';
import Login from './components/Login';

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#7c3aed' },
  },
});

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login onLogin={handleLogin} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={user.type === 'admin' ? <AdminDashboard user={user} onLogout={handleLogout} /> : <Home user={user} onLogout={handleLogout} />} />
          <Route path="/career-paths" element={<CareerPaths user={user} onLogout={handleLogout} />} />
          <Route path="/counseling" element={<Counseling user={user} onLogout={handleLogout} />} />
          <Route path="/resources" element={<Resources user={user} onLogout={handleLogout} />} />
          <Route path="/resources/:id" element={<ResourceDetail user={user} onLogout={handleLogout} />} />
          <Route path="/admin" element={<AdminDashboard user={user} onLogout={handleLogout} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;