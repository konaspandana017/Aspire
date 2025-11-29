import React, { useState } from 'react';
import { 
  Container, Grid, Card, CardContent, Typography, Button, 
  TextField, Box, Chip, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';
import { Search, TrendingUp, AttachMoney, Schedule } from '@mui/icons-material';
import Header from '../components/Header';

const CareerPaths = ({ user, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDemand, setFilterDemand] = useState('all');
  const [filterSalary, setFilterSalary] = useState('all');

  const careers = [
    { 
      id: 1,
      title: 'Software Engineering', 
      demand: 'High', 
      salary: '$100k+', 
      skills: ['Programming', 'Problem Solving', 'Algorithms'],
      description: 'Design, develop, and test software applications and systems',
      growth: '22% (Much faster than average)',
      education: "Bachelor's degree"
    },
    { 
      id: 2,
      title: 'Data Science', 
      demand: 'High', 
      salary: '$95k+', 
      skills: ['Statistics', 'Python', 'Machine Learning'],
      description: 'Analyze and interpret complex data to help organizations make decisions',
      growth: '31% (Much faster than average)',
      education: "Master's degree preferred"
    },
    { 
      id: 3,
      title: 'Digital Marketing', 
      demand: 'Medium', 
      salary: '$65k+', 
      skills: ['SEO', 'Analytics', 'Content Creation'],
      description: 'Promote brands and products through digital channels and platforms',
      growth: '10% (Faster than average)',
      education: "Bachelor's degree"
    },
    { 
      id: 4,
      title: 'UX/UI Design', 
      demand: 'High', 
      salary: '$85k+', 
      skills: ['User Research', 'Wireframing', 'Prototyping'],
      description: 'Create user-friendly and visually appealing digital interfaces',
      growth: '13% (Faster than average)',
      education: "Bachelor's degree"
    },
    { 
      id: 5,
      title: 'Cybersecurity', 
      demand: 'Very High', 
      salary: '$110k+', 
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment'],
      description: 'Protect systems and networks from digital attacks',
      growth: '33% (Much faster than average)',
      education: "Bachelor's degree"
    },
    { 
      id: 6,
      title: 'Healthcare Administration', 
      demand: 'Medium', 
      salary: '$75k+', 
      skills: ['Management', 'Healthcare Laws', 'Finance'],
      description: 'Manage healthcare facilities and ensure efficient operations',
      growth: '8% (As fast as average)',
      education: "Bachelor's degree"
    }
  ];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDemand = filterDemand === 'all' || career.demand === filterDemand;
    const matchesSalary = filterSalary === 'all' || 
                         (filterSalary === 'high' && career.salary.includes('100')) ||
                         (filterSalary === 'medium' && !career.salary.includes('100'));
    
    return matchesSearch && matchesDemand && matchesSalary;
  });

  const handleLearnMore = (career) => {
    // In a real app, this would navigate to a detailed page
    alert(`Detailed information for ${career.title}:\n\n` +
          `Description: ${career.description}\n` +
          `Job Growth: ${career.growth}\n` +
          `Education: ${career.editation}\n` +
          `Key Skills: ${career.skills.join(', ')}`);
  };

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Explore Career Paths
        </Typography>

        {/* Search and Filters */}
        <Box sx={{ mb: 4, p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Search careers or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Demand Level</InputLabel>
                <Select
                  value={filterDemand}
                  label="Demand Level"
                  onChange={(e) => setFilterDemand(e.target.value)}
                >
                  <MenuItem value="all">All Demand Levels</MenuItem>
                  <MenuItem value="Very High">Very High</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Salary Range</InputLabel>
                <Select
                  value={filterSalary}
                  label="Salary Range"
                  onChange={(e) => setFilterSalary(e.target.value)}
                >
                  <MenuItem value="all">All Salaries</MenuItem>
                  <MenuItem value="high">$100k+</MenuItem>
                  <MenuItem value="medium">Under $100k</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Results Count */}
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Found {filteredCareers.length} career paths
        </Typography>

        {/* Career Cards */}
        <Grid container spacing={3}>
          {filteredCareers.map((career) => (
            <Grid item xs={12} md={6} lg={4} key={career.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {career.title}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      icon={<TrendingUp />} 
                      label={`Demand: ${career.demand}`} 
                      color={career.demand === 'Very High' ? 'error' : career.demand === 'High' ? 'warning' : 'default'}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                    <Chip 
                      icon={<AttachMoney />} 
                      label={`Salary: ${career.salary}`} 
                      color="success"
                      variant="outlined"
                      size="small"
                      sx={{ mb: 1 }}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {career.description}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Education:</strong> {career.education}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <strong>Growth:</strong> {career.growth}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1 }}><strong>Key Skills:</strong></Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {career.skills.map((skill, index) => (
                        <Chip key={index} label={skill} size="small" variant="outlined" />
                      ))}
                    </Box>
                  </Box>

                  <Button 
                    variant="contained" 
                    fullWidth
                    onClick={() => handleLearnMore(career)}
                    startIcon={<Schedule />}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredCareers.length === 0 && (
          <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 4 }}>
            No careers found matching your criteria. Try adjusting your filters.
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default CareerPaths;