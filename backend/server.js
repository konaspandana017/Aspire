const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock Data
const users = [
  { id: 1, name: 'Demo Student', email: 'student@aspire.com', password: 'demo', type: 'student' },
  { id: 2, name: 'Admin User', email: 'admin@aspire.com', password: 'demo', type: 'admin' }
];

const careers = [
  { id: 1, title: 'Software Engineering', demand: 'High', salary: '$100k+', skills: ['Programming', 'Problem Solving'] },
  { id: 2, title: 'Data Science', demand: 'High', salary: '$95k+', skills: ['Statistics', 'Python', 'ML'] }
];

// Auth Routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, type: user.type },
      token: 'mock_jwt_token_' + user.id
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Career Routes
app.get('/api/careers', (req, res) => {
  res.json(careers);
});

// Test Route
app.get('/', (req, res) => {
  res.json({ message: '🚀 Aspire Backend API Running (Mock Data)' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🎯 Backend running on http://localhost:${PORT}`);
  console.log(`📊 Using Mock Data - No MongoDB needed`);
});