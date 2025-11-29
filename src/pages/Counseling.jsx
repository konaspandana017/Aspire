import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  TextField,
  Box,
  Chip,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  Alert,
  Avatar,
  Divider,
  Paper
} from '@mui/material';
import { 
  CalendarToday,
  Schedule,
  LocationOn,
  VideoCall,
  Person,
  WorkspacePremium,
  Star,
  CheckCircle,
  Payment
} from '@mui/icons-material';
import Header from '../components/Header';

const Counseling = ({ user, onLogout }) => {
  const [bookingStep, setBookingStep] = useState(0);
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const counselors = [
    { 
      id: 1, 
      name: 'Dr. Sarah Chen', 
      specialty: 'Tech Careers & Software Engineering', 
      experience: '8 years',
      rating: 4.9,
      reviews: 127,
      price: '$89',
      image: '/static/images/avatar/1.jpg',
      education: 'PhD in Career Psychology, Stanford University',
      languages: ['English', 'Mandarin'],
      availability: ['2024-01-15', '2024-01-16', '2024-01-18'],
      description: 'Specialized in guiding tech professionals and career switchers into software engineering roles.',
      expertise: ['Software Engineering', 'Career Transition', 'Tech Interviews', 'Salary Negotiation']
    },
    { 
      id: 2, 
      name: 'Mr. James Rodriguez', 
      specialty: 'Business & Management Careers', 
      experience: '12 years',
      rating: 4.8,
      reviews: 89,
      price: '$79',
      image: '/static/images/avatar/2.jpg',
      education: 'MBA, Harvard Business School',
      languages: ['English', 'Spanish'],
      availability: ['2024-01-14', '2024-01-17', '2024-01-19'],
      description: 'Expert in business career development, leadership coaching, and corporate advancement strategies.',
      expertise: ['Business Management', 'Leadership', 'Corporate Strategy', 'Career Advancement']
    },
    { 
      id: 3, 
      name: 'Dr. Maya Patel', 
      specialty: 'Healthcare & Medical Careers', 
      experience: '6 years',
      rating: 4.7,
      reviews: 64,
      price: '$75',
      image: '/static/images/avatar/3.jpg',
      education: 'MD, Johns Hopkins University',
      languages: ['English', 'Hindi'],
      availability: ['2024-01-16', '2024-01-18', '2024-01-20'],
      description: 'Focused on guiding students and professionals into healthcare and medical professions.',
      expertise: ['Medical Careers', 'Healthcare Administration', 'Medical School', 'Clinical Roles']
    },
    { 
      id: 4, 
      name: 'Ms. Emily Thompson', 
      specialty: 'Creative Industries & Design', 
      experience: '5 years',
      rating: 4.6,
      reviews: 42,
      price: '$69',
      image: '/static/images/avatar/4.jpg',
      education: 'MFA, Rhode Island School of Design',
      languages: ['English', 'French'],
      availability: ['2024-01-15', '2024-01-17', '2024-01-19'],
      description: 'Helping creative individuals build successful careers in design and arts industries.',
      expertise: ['UX/UI Design', 'Graphic Design', 'Creative Direction', 'Portfolio Development']
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const steps = ['Select Counselor', 'Choose Date & Time', 'Confirm Booking'];

  const handleCounselorSelect = (counselor) => {
    setSelectedCounselor(counselor);
    setBookingStep(1);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookingSubmit = () => {
    const booking = {
      id: Date.now(),
      counselor: selectedCounselor,
      date: selectedDate,
      time: selectedTime,
      notes: bookingNotes,
      bookedAt: new Date().toISOString(),
      status: 'confirmed'
    };
    
    setBookingDetails(booking);
    setShowSuccess(true);
    setBookingStep(3);
  };

  const handleNewBooking = () => {
    setBookingStep(0);
    setSelectedCounselor(null);
    setSelectedDate('');
    setSelectedTime('');
    setBookingNotes('');
    setShowSuccess(false);
    setBookingDetails(null);
  };

  const renderCounselorSelection = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Choose Your Career Counselor
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Select from our expert counselors specializing in different career fields
      </Typography>

      <Grid container spacing={3}>
        {counselors.map((counselor) => (
          <Grid item xs={12} md={6} key={counselor.id}>
            <Card 
              sx={{ 
                height: '100%', 
                cursor: 'pointer',
                transition: '0.3s',
                border: selectedCounselor?.id === counselor.id ? 2 : 0,
                borderColor: 'primary.main',
                '&:hover': { 
                  transform: 'translateY(-4px)', 
                  boxShadow: 6 
                }
              }}
              onClick={() => handleCounselorSelect(counselor)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Avatar 
                    sx={{ width: 80, height: 80, mr: 2 }}
                    src={counselor.image}
                  >
                    <Person />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {counselor.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={counselor.rating} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {counselor.rating} ({counselor.reviews} reviews)
                      </Typography>
                    </Box>
                    <Chip 
                      icon={<WorkspacePremium />}
                      label={counselor.specialty} 
                      color="primary" 
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {counselor.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                      <Schedule sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'text-bottom' }} />
                      {counselor.experience} experience
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {counselor.education}
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                    {counselor.price}
                  </Typography>
                </Box>

                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {counselor.expertise.slice(0, 3).map((skill, index) => (
                    <Chip key={index} label={skill} size="small" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderDateTimeSelection = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Select Date & Time
      </Typography>

      {selectedCounselor && (
        <Card sx={{ mb: 3, p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={selectedCounselor.image} sx={{ mr: 2 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {selectedCounselor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedCounselor.specialty}
              </Typography>
            </Box>
          </Box>
        </Card>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            📅 Select Date
          </Typography>
          <TextField
            fullWidth
            label="Choose Date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 3 }}
          />

          <Typography variant="h6" gutterBottom>
            🕒 Available Time Slots
          </Typography>
          <Grid container spacing={1}>
            {timeSlots.map((time) => (
              <Grid item xs={6} sm={4} key={time}>
                <Button
                  variant={selectedTime === time ? "contained" : "outlined"}
                  fullWidth
                  onClick={() => handleTimeSelect(time)}
                  sx={{ py: 1.5 }}
                >
                  {time}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            📝 Session Details
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Any specific topics or questions you'd like to discuss?"
            value={bookingNotes}
            onChange={(e) => setBookingNotes(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Paper sx={{ p: 2, backgroundColor: '#f8fafc' }}>
            <Typography variant="h6" gutterBottom>
              Session Summary
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Counselor Fee:</Typography>
              <Typography fontWeight="bold">{selectedCounselor?.price}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Duration:</Typography>
              <Typography>60 minutes</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Format:</Typography>
              <Typography>
                <VideoCall sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'text-bottom' }} />
                Video Call
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                {selectedCounselor?.price}
              </Typography>
            </Box>
          </Paper>

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
            disabled={!selectedDate || !selectedTime}
            onClick={() => setBookingStep(2)}
          >
            Continue to Confirmation
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  const renderConfirmation = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Confirm Your Booking
      </Typography>

      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircle color="success" sx={{ mr: 1 }} />
          Booking Summary
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary">Counselor:</Typography>
            <Typography variant="body1" fontWeight="bold">{selectedCounselor?.name}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary">Specialty:</Typography>
            <Typography variant="body1">{selectedCounselor?.specialty}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary">Date & Time:</Typography>
            <Typography variant="body1" fontWeight="bold">
              {selectedDate} at {selectedTime}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary">Session Type:</Typography>
            <Typography variant="body1">
              <VideoCall sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'text-bottom' }} />
              60-min Video Call
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">Your Notes:</Typography>
            <Typography variant="body1">
              {bookingNotes || 'No specific notes provided'}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Total Amount:</Typography>
          <Typography variant="h4" color="primary" fontWeight="bold">
            {selectedCounselor?.price}
          </Typography>
        </Box>
      </Card>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="outlined"
          onClick={() => setBookingStep(1)}
          sx={{ flex: 1 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleBookingSubmit}
          sx={{ flex: 1 }}
          size="large"
        >
          <Payment sx={{ mr: 1 }} />
          Confirm & Book Session
        </Button>
      </Box>
    </Box>
  );

  const renderSuccess = () => (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <CheckCircle sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'success.main' }}>
        Booking Confirmed!
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Your career counseling session has been scheduled successfully
      </Typography>

      {bookingDetails && (
        <Card sx={{ p: 3, mt: 3, maxWidth: 500, mx: 'auto' }}>
          <Typography variant="h6" gutterBottom>
            📋 Session Details
          </Typography>
          <Box sx={{ textAlign: 'left' }}>
            <Typography><strong>Counselor:</strong> {bookingDetails.counselor.name}</Typography>
            <Typography><strong>Date:</strong> {bookingDetails.date}</Typography>
            <Typography><strong>Time:</strong> {bookingDetails.time}</Typography>
            <Typography><strong>Meeting:</strong> Video Call (Link will be emailed)</Typography>
            <Typography><strong>Booking ID:</strong> ASP-{bookingDetails.id}</Typography>
          </Box>
        </Card>
      )}

      <Alert severity="info" sx={{ mt: 3, maxWidth: 500, mx: 'auto' }}>
        You will receive a confirmation email with the meeting details within 5 minutes.
      </Alert>

      <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleNewBooking}>
          Book Another Session
        </Button>
        <Button variant="contained" onClick={() => window.location.href = '/'}>
          Back to Dashboard
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
          Career Counseling Sessions
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 4 }}>
          Book 1-on-1 sessions with expert career counselors
        </Typography>

        {/* Booking Stepper */}
        {bookingStep < 3 && (
          <Stepper activeStep={bookingStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}

        {/* Success Message */}
        {showSuccess && renderSuccess()}

        {/* Booking Steps */}
        {!showSuccess && (
          <>
            {bookingStep === 0 && renderCounselorSelection()}
            {bookingStep === 1 && renderDateTimeSelection()}
            {bookingStep === 2 && renderConfirmation()}
          </>
        )}
      </Container>
    </div>
  );
};

export default Counseling;