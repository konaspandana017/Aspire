import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box,
  Chip,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  LinearProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import { 
  Search,
  Article,
  VideoLibrary,
  Description,
  Quiz,
  Download,
  PlayArrow,
  Star,
  TrendingUp,
  AccessTime,
  Person,
  Share,
  Bookmark,
  BookmarkBorder,
  FilterList,
  Sort,
  GetApp,
  Visibility,
  Favorite,
  School,
  Work,
  Code,
  DesignServices,
  BusinessCenter
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Resources = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResource, setSelectedResource] = useState(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [bookmarkedResources, setBookmarkedResources] = useState(new Set());
  const [sortBy, setSortBy] = useState('popular');
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();

  const resources = [
    {
      id: 1,
      title: 'Complete Software Engineering Career Guide 2024',
      type: 'pdf',
      category: 'Technology',
      description: 'Comprehensive guide covering programming languages, interview preparation, system design, and career paths in software engineering with latest industry trends.',
      author: 'Tech Career Institute',
      rating: 4.8,
      downloads: 1247,
      duration: '45 pages',
      level: 'Beginner to Advanced',
      fileSize: '4.2 MB',
      uploadDate: '2024-01-10',
      tags: ['Programming', 'Interviews', 'Career Path', 'Resume', 'System Design'],
      featured: true,
      premium: false,
      popularity: 95
    },
    {
      id: 2,
      title: 'Data Science Interview Preparation Masterclass',
      type: 'video',
      category: 'Data Science',
      description: 'Complete video series covering statistics, machine learning concepts, real-world data science interview questions, and portfolio building strategies.',
      author: 'Dr. Sarah Chen',
      rating: 4.9,
      views: 2890,
      duration: '2h 15m',
      level: 'Intermediate',
      fileSize: '320 MB',
      uploadDate: '2024-01-15',
      tags: ['Machine Learning', 'Statistics', 'Python', 'Interviews', 'Portfolio'],
      featured: true,
      premium: true,
      popularity: 92
    },
    {
      id: 3,
      title: 'Career Assessment & Personality Analysis',
      type: 'quiz',
      category: 'Assessment',
      description: 'Comprehensive interactive assessment to discover your strengths, interests, personality traits and ideal career matches with detailed analysis.',
      author: 'Career Psychology Lab',
      rating: 4.7,
      completions: 3560,
      duration: '20 min',
      level: 'All Levels',
      fileSize: 'Online',
      uploadDate: '2024-01-08',
      tags: ['Assessment', 'Personality', 'Career Match', 'Skills', 'Analysis'],
      featured: false,
      premium: false,
      popularity: 88
    },
    {
      id: 4,
      title: 'Professional Resume & Cover Letter Template Pack',
      type: 'template',
      category: 'Career Tools',
      description: 'Collection of 20 professionally designed resume and cover letter templates for various industries, experience levels, and job types.',
      author: 'Design Professionals',
      rating: 4.6,
      downloads: 3102,
      duration: '20 templates',
      level: 'All Levels',
      fileSize: '8.7 MB',
      uploadDate: '2024-01-12',
      tags: ['Resume', 'Templates', 'Design', 'Professional', 'Cover Letter'],
      featured: false,
      premium: false,
      popularity: 85
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy Masterclass 2024',
      type: 'video',
      category: 'Marketing',
      description: 'Complete guide to digital marketing strategies, SEO optimization, social media marketing, content strategy, and analytics for modern businesses.',
      author: 'Marketing Experts Inc.',
      rating: 4.5,
      views: 1870,
      duration: '3h 45m',
      level: 'Beginner',
      fileSize: '450 MB',
      uploadDate: '2024-01-18',
      tags: ['Marketing', 'SEO', 'Social Media', 'Content', 'Analytics'],
      featured: false,
      premium: true,
      popularity: 78
    },
    {
      id: 6,
      title: 'UX/UI Design Portfolio & Case Study Guide',
      type: 'pdf',
      category: 'Design',
      description: 'Step-by-step guide to creating an impressive UX/UI design portfolio with real case studies, user research methods, and presentation techniques.',
      author: 'Design Career Hub',
      rating: 4.8,
      downloads: 1560,
      duration: '32 pages',
      level: 'Intermediate',
      fileSize: '3.8 MB',
      uploadDate: '2024-01-14',
      tags: ['UX Design', 'Portfolio', 'UI Design', 'Case Studies', 'Research'],
      featured: true,
      premium: false,
      popularity: 82
    },
    {
      id: 7,
      title: 'Salary Negotiation & Career Advancement Handbook',
      type: 'pdf',
      category: 'Career Tools',
      description: 'Learn proven strategies for negotiating your salary, benefits package, promotions, and career advancement in any industry.',
      author: 'Career Negotiation Experts',
      rating: 4.9,
      downloads: 2890,
      duration: '28 pages',
      level: 'All Levels',
      fileSize: '2.1 MB',
      uploadDate: '2024-01-16',
      tags: ['Salary', 'Negotiation', 'Career', 'Compensation', 'Promotion'],
      featured: false,
      premium: true,
      popularity: 90
    },
    {
      id: 8,
      title: 'Tech Interview Coding Challenges & Solutions',
      type: 'quiz',
      category: 'Technology',
      description: 'Practice 100+ coding challenges and algorithm problems for technical interviews at FAANG companies with detailed solutions and explanations.',
      author: 'Tech Interview Prep',
      rating: 4.7,
      completions: 4230,
      duration: 'Self-paced',
      level: 'Advanced',
      fileSize: 'Online',
      uploadDate: '2024-01-11',
      tags: ['Coding', 'Algorithms', 'Interviews', 'Practice', 'FAANG'],
      featured: true,
      premium: false,
      popularity: 89
    },
    {
      id: 9,
      title: 'Business Analytics & Excel Mastery Course',
      type: 'video',
      category: 'Business',
      description: 'Master business analytics, Excel advanced functions, data visualization, and business intelligence tools for career advancement.',
      author: 'Business Analytics Pro',
      rating: 4.6,
      views: 2150,
      duration: '4h 20m',
      level: 'Intermediate',
      fileSize: '520 MB',
      uploadDate: '2024-01-20',
      tags: ['Excel', 'Analytics', 'Business', 'Data', 'Visualization'],
      featured: false,
      premium: true,
      popularity: 75
    },
    {
      id: 10,
      title: 'Freelancing & Remote Work Success Guide',
      type: 'pdf',
      category: 'Career Tools',
      description: 'Complete guide to starting and growing a successful freelancing career, finding clients, setting rates, and managing remote work.',
      author: 'Freelance Success Academy',
      rating: 4.4,
      downloads: 1890,
      duration: '36 pages',
      level: 'All Levels',
      fileSize: '3.2 MB',
      uploadDate: '2024-01-22',
      tags: ['Freelancing', 'Remote Work', 'Clients', 'Business', 'Productivity'],
      featured: false,
      premium: false,
      popularity: 80
    },
    {
      id: 11,
      title: 'Artificial Intelligence Career Path Guide',
      type: 'pdf',
      category: 'Technology',
      description: 'Explore career opportunities in AI and machine learning, required skills, learning paths, and industry trends for 2024 and beyond.',
      author: 'AI Career Institute',
      rating: 4.8,
      downloads: 1670,
      duration: '40 pages',
      level: 'Intermediate',
      fileSize: '4.5 MB',
      uploadDate: '2024-01-25',
      tags: ['AI', 'Machine Learning', 'Career Path', 'Skills', 'Future'],
      featured: true,
      premium: false,
      popularity: 87
    },
    {
      id: 12,
      title: 'Leadership & Management Development Program',
      type: 'video',
      category: 'Business',
      description: 'Develop essential leadership skills, team management techniques, and strategic thinking for career advancement into management roles.',
      author: 'Leadership Excellence',
      rating: 4.7,
      views: 1450,
      duration: '5h 10m',
      level: 'Advanced',
      fileSize: '610 MB',
      uploadDate: '2024-01-28',
      tags: ['Leadership', 'Management', 'Team Building', 'Strategy', 'Development'],
      featured: false,
      premium: true,
      popularity: 83
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources', count: resources.length, icon: <Description /> },
    { id: 'pdf', label: 'Guides & eBooks', count: resources.filter(r => r.type === 'pdf').length, icon: <Article /> },
    { id: 'video', label: 'Video Courses', count: resources.filter(r => r.type === 'video').length, icon: <VideoLibrary /> },
    { id: 'quiz', label: 'Assessments', count: resources.filter(r => r.type === 'quiz').length, icon: <Quiz /> },
    { id: 'template', label: 'Templates', count: resources.filter(r => r.type === 'template').length, icon: <GetApp /> }
  ];

  const careerCategories = [
    { id: 'all', label: 'All Categories', icon: <BusinessCenter /> },
    { id: 'Technology', label: 'Technology', icon: <Code /> },
    { id: 'Data Science', label: 'Data Science', icon: <TrendingUp /> },
    { id: 'Design', label: 'Design', icon: <DesignServices /> },
    { id: 'Business', label: 'Business', icon: <BusinessCenter /> },
    { id: 'Marketing', label: 'Marketing', icon: <Work /> },
    { id: 'Career Tools', label: 'Career Tools', icon: <School /> }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'pdf': return <Description color="error" />;
      case 'video': return <VideoLibrary color="primary" />;
      case 'quiz': return <Quiz color="secondary" />;
      case 'template': return <GetApp color="success" />;
      default: return <Article />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'pdf': return 'error';
      case 'video': return 'primary';
      case 'quiz': return 'secondary';
      case 'template': return 'success';
      default: return 'default';
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTab = activeTab === 'all' || resource.type === activeTab;
    const matchesCategory = category === 'all' || resource.category === category;
    
    return matchesSearch && matchesTab && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popularity - a.popularity;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      case 'downloads':
        return (b.downloads || b.views || b.completions) - (a.downloads || a.views || a.completions);
      default:
        return 0;
    }
  });

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setDetailDialogOpen(true);
  };

  const handleBookmark = (resourceId) => {
    const newBookmarks = new Set(bookmarkedResources);
    if (newBookmarks.has(resourceId)) {
      newBookmarks.delete(resourceId);
    } else {
      newBookmarks.add(resourceId);
    }
    setBookmarkedResources(newBookmarks);
  };

  const handleDownload = (resource) => {
    alert(`Starting download: ${resource.title}`);
    // In real app, this would trigger actual download
  };

  const handleExplore = (resource) => {
    if (resource.type === 'quiz') {
      navigate('/');
      // This would trigger the quiz component
    } else {
      handleResourceClick(resource);
    }
  };

  const renderResourceCard = (resource) => (
    <Card 
      key={resource.id}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        borderRadius: '16px',
        background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)',
        border: '1px solid rgba(255,255,255,0.8)',
        position: 'relative',
        overflow: 'visible',
        '&:hover': { 
          transform: 'translateY(-12px) scale(1.02)', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)',
          '&::before': {
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, 
            ${resource.type === 'pdf' ? '#f44336' : 
              resource.type === 'video' ? '#2196f3' : 
              resource.type === 'quiz' ? '#9c27b0' : '#4caf50'}, 
            ${resource.type === 'pdf' ? '#ff9800' : 
              resource.type === 'video' ? '#03a9f4' : 
              resource.type === 'quiz' ? '#e91e63' : '#8bc34a'})`,
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          transform: 'scaleX(0.8)',
          transition: 'all 0.3s ease',
          opacity: 0.8
        }
      }}
      onClick={() => handleExplore(resource)}
    >
      <CardContent sx={{ 
        flexGrow: 1, 
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          mb: 2,
          minHeight: '40px'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '10px',
              backgroundColor: resource.type === 'pdf' ? 'rgba(244, 67, 54, 0.1)' : 
                            resource.type === 'video' ? 'rgba(33, 150, 243, 0.1)' : 
                            resource.type === 'quiz' ? 'rgba(156, 39, 176, 0.1)' : 'rgba(76, 175, 80, 0.1)',
              border: `1px solid ${resource.type === 'pdf' ? 'rgba(244, 67, 54, 0.2)' : 
                              resource.type === 'video' ? 'rgba(33, 150, 243, 0.2)' : 
                              resource.type === 'quiz' ? 'rgba(156, 39, 176, 0.2)' : 'rgba(76, 175, 80, 0.2)'}`
            }}>
              {getTypeIcon(resource.type)}
            </Box>
            <Chip 
              label={resource.type.toUpperCase()} 
              color={getTypeColor(resource.type)}
              size="small"
              sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}
            />
            {resource.premium && (
              <Chip 
                label="PREMIUM" 
                color="warning"
                size="small"
                sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}
              />
            )}
          </Box>
          <IconButton 
            size="small" 
            onClick={(e) => {
              e.stopPropagation();
              handleBookmark(resource.id);
            }}
            sx={{
              backgroundColor: 'rgba(0,0,0,0.04)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.08)'
              }
            }}
          >
            {bookmarkedResources.has(resource.id) ? 
              <Bookmark color="primary" /> : 
              <BookmarkBorder />
            }
          </IconButton>
        </Box>

        {/* Category */}
        <Chip 
          label={resource.category}
          variant="outlined"
          size="small"
          sx={{ 
            mb: 2, 
            alignSelf: 'flex-start',
            fontSize: '0.75rem',
            fontWeight: '500'
          }}
        />

        {/* Title & Description */}
        <Typography variant="h6" gutterBottom sx={{ 
          fontWeight: '700', 
          minHeight: '64px',
          overflow: 'hidden',
          lineHeight: 1.3,
          background: 'linear-gradient(135deg, #2c3e50, #34495e)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {resource.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ 
          mb: 3, 
          minHeight: '60px',
          overflow: 'hidden',
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {resource.description}
        </Typography>

        {/* Stats */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Star sx={{ fontSize: 18, color: 'warning.main', mr: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              {resource.rating}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
              ({resource.downloads ? `${resource.downloads} downloads` : 
                 resource.views ? `${resource.views} views` : 
                 `${resource.completions} completions`})
            </Typography>
          </Box>
          <Chip 
            label={`${resource.popularity}%`} 
            color={resource.popularity > 85 ? 'success' : 'primary'}
            size="small"
            sx={{ fontWeight: 'bold' }}
          />
        </Box>

        {/* Progress Bar for Popularity */}
        <LinearProgress 
          variant="determinate" 
          value={resource.popularity} 
          sx={{ 
            mb: 3, 
            height: 6, 
            borderRadius: 3,
            backgroundColor: 'rgba(0,0,0,0.1)',
            '& .MuiLinearProgress-bar': {
              borderRadius: 3,
              background: `linear-gradient(90deg, 
                ${resource.popularity > 85 ? '#4caf50' : '#2196f3'}, 
                ${resource.popularity > 85 ? '#8bc34a' : '#03a9f4'})`
            }
          }}
        />

        {/* Tags */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 0.5, 
          mb: 3,
          minHeight: '32px'
        }}>
          {resource.tags.slice(0, 3).map((tag, index) => (
            <Chip 
              key={index} 
              label={tag} 
              size="small" 
              variant="outlined"
              sx={{ 
                fontSize: '0.7rem',
                backgroundColor: 'rgba(0,0,0,0.02)'
              }}
            />
          ))}
          {resource.tags.length > 3 && (
            <Chip 
              label={`+${resource.tags.length - 3}`} 
              size="small" 
              sx={{ fontSize: '0.7rem' }}
            />
          )}
        </Box>

        {/* Footer */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mt: 'auto',
          pt: 2,
          borderTop: '1px solid rgba(0,0,0,0.06)'
        }}>
          <Box>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 0.5 }}>
              <AccessTime sx={{ fontSize: 14, mr: 0.5, verticalAlign: 'middle' }} />
              {resource.duration}
            </Typography>
            <Chip 
              label={resource.level} 
              size="small"
              variant="filled"
              sx={{ 
                fontSize: '0.65rem',
                height: '20px',
                backgroundColor: resource.level.includes('Beginner') ? 'rgba(76, 175, 80, 0.1)' :
                               resource.level.includes('Intermediate') ? 'rgba(255, 152, 0, 0.1)' :
                               'rgba(244, 67, 54, 0.1)',
                color: resource.level.includes('Beginner') ? '#4caf50' :
                      resource.level.includes('Intermediate') ? '#ff9800' :
                      '#f44336',
                fontWeight: 'bold'
              }}
            />
          </Box>
          <Button 
            variant={resource.premium ? "contained" : "outlined"}
            color={resource.premium ? "warning" : "primary"}
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleDownload(resource);
            }}
            startIcon={resource.type === 'video' ? <PlayArrow /> : 
                      resource.type === 'quiz' ? <Visibility /> : 
                      <Download />}
            sx={{
              borderRadius: '8px',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: resource.premium ? '0 4px 12px rgba(255, 152, 0, 0.3)' : 'none',
              '&:hover': {
                boxShadow: resource.premium ? '0 6px 16px rgba(255, 152, 0, 0.4)' : '0 2px 8px rgba(0,0,0,0.1)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            {resource.type === 'video' ? 'Watch' : 
             resource.type === 'quiz' ? 'Take Quiz' : 
             'Download'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <Header user={user} onLogout={onLogout} />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ffffff, #e3f2fd)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            Career Resources Library
          </Typography>
          <Typography variant="h5" sx={{ 
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '300'
          }}>
            Access 100+ guides, video courses, assessments, and templates to advance your career
          </Typography>
        </Box>

        {/* Search and Filters */}
        <Box sx={{ 
          mb: 4,
          backgroundColor: 'rgba(255,255,255,0.95)',
          borderRadius: '16px',
          p: 3,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <TextField
            fullWidth
            placeholder="Search resources, topics, skills, or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              ),
            }}
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.8)'
              }
            }}
          />

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                  sx={{ borderRadius: '12px' }}
                >
                  <MenuItem value="popular">Most Popular</MenuItem>
                  <MenuItem value="rating">Highest Rated</MenuItem>
                  <MenuItem value="newest">Newest First</MenuItem>
                  <MenuItem value="downloads">Most Downloads</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{ borderRadius: '12px' }}
                >
                  {careerCategories.map(cat => (
                    <MenuItem key={cat.id} value={cat.id}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {cat.icon}
                        {cat.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ 
            borderBottom: 1, 
            borderColor: 'divider', 
            mb: 2 
          }}>
            <Tabs 
              value={activeTab} 
              onChange={(e, newValue) => setActiveTab(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  borderRadius: '8px 8px 0 0',
                  marginRight: 1,
                  fontWeight: '600',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white'
                  }
                }
              }}
            >
              {categories.map(category => (
                <Tab 
                  key={category.id}
                  value={category.id}
                  icon={category.icon}
                  iconPosition="start"
                  label={`${category.label} (${category.count})`}
                />
              ))}
            </Tabs>
          </Box>
        </Box>

        {/* Results Count */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 3,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: '12px',
          p: 2,
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
        }}>
          <Typography variant="h6" sx={{ fontWeight: '600', color: 'text.primary' }}>
            Showing {filteredResources.length} of {resources.length} resources
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              startIcon={<FilterList />} 
              variant="outlined" 
              size="small"
              sx={{ borderRadius: '8px', fontWeight: '600' }}
            >
              More Filters
            </Button>
            <Button 
              startIcon={<Sort />} 
              variant="outlined" 
              size="small"
              sx={{ borderRadius: '8px', fontWeight: '600' }}
            >
              Sort
            </Button>
          </Box>
        </Box>

        {/* Featured Resources */}
        {activeTab === 'all' && searchTerm === '' && category === 'all' && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ 
              fontWeight: 'bold', 
              display: 'flex', 
              alignItems: 'center',
              color: 'white',
              mb: 3
            }}>
              <TrendingUp sx={{ mr: 2 }} />
              Featured Resources
            </Typography>
            <Grid container spacing={3}>
              {resources.filter(r => r.featured).slice(0, 4).map(resource => renderResourceCard(resource))}
            </Grid>
            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />
          </Box>
        )}

        {/* All Resources */}
        <Typography variant="h4" gutterBottom sx={{ 
          fontWeight: 'bold', 
          mb: 3,
          color: 'white'
        }}>
          {activeTab === 'all' ? 'All Resources' : categories.find(c => c.id === activeTab)?.label}
          {category !== 'all' && ` - ${careerCategories.find(c => c.id === category)?.label}`}
        </Typography>

        {filteredResources.length === 0 ? (
          <Box sx={{ 
            textAlign: 'center', 
            py: 8,
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <Search sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              No resources found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Try adjusting your search terms or filters
            </Typography>
            <Button 
              variant="contained" 
              onClick={() => {
                setSearchTerm('');
                setCategory('all');
                setActiveTab('all');
              }}
              sx={{ borderRadius: '8px', fontWeight: 'bold' }}
            >
              Clear All Filters
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredResources.map(resource => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={resource.id}>
                {renderResourceCard(resource)}
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Resources;