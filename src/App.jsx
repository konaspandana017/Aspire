import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from './pages/Home.jsx';
import CareerPaths from './pages/CareerPaths.jsx';
import Counseling from './pages/Counseling.jsx';
import Resources from './pages/Resources.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Login from './components/Login.jsx';

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#7c3aed' },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
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

  // Show login page if no user is logged in
  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login onLogin={handleLogin} />
      </ThemeProvider>
    );
  }

  // Show admin dashboard if admin user, otherwise normal app
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              user.type === 'admin' ? 
                <AdminDashboard user={user} onLogout={handleLogout} /> : 
                <Home user={user} onLogout={handleLogout} />
            } 
          />
          <Route path="/career-paths" element={<CareerPaths user={user} onLogout={handleLogout} />} />
          <Route path="/counseling" element={<Counseling user={user} onLogout={handleLogout} />} />
          <Route path="/resources" element={<Resources user={user} onLogout={handleLogout} />} />
          <Route path="/admin" element={<AdminDashboard user={user} onLogout={handleLogout} />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Home user={user} onLogout={handleLogout} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;