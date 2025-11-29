import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, TextField } from '@mui/material';
import Header from '../components/Header';

const Counseling = () => {
  const [counselors, setCounselors] = useState([
    { 
      id: 1, 
      name: 'Dr. Sarah Smith', 
      specialty: 'Tech Careers', 
      experience: '8 years',
      selectedDate: ''
    },
    { 
      id: 2, 
      name: 'Mr. John Doe', 
      specialty: 'Business Careers', 
      experience: '6 years',
      selectedDate: ''
    },
  ]);

  const handleDateChange = (counselorId, date) => {
    setCounselors(prevCounselors => 
      prevCounselors.map(counselor => 
        counselor.id === counselorId 
          ? { ...counselor, selectedDate: date }
          : counselor
      )
    );
  };

  const handleBookSession = (counselor) => {
    if (!counselor.selectedDate) {
      alert('Please select a date first!');
      return;
    }
    alert(`Session booked with ${counselor.name} on ${counselor.selectedDate}`);
    // Here you would typically send this data to a backend
  };

  return (
    <div>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Book Counseling Session
        </Typography>
        
        <Grid container spacing={3}>
          {counselors.map((counselor) => (
            <Grid item xs={12} md={6} key={counselor.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {counselor.name}
                  </Typography>
                  <Typography color="text.secondary">
                    Specialty: {counselor.specialty}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    Experience: {counselor.experience}
                  </Typography>
                  
                  <TextField
                    label="Select Date"
                    type="date"
                    value={counselor.selectedDate}
                    onChange={(e) => handleDateChange(counselor.id, e.target.value)}
                    sx={{ mt: 2, width: '100%' }}
                    InputLabelProps={{ shrink: true }}
                  />
                  
                  <Button 
                    variant="contained" 
                    sx={{ mt: 2 }} 
                    fullWidth
                    onClick={() => handleBookSession(counselor)}
                  >
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Counseling;