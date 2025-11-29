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
  Avatar
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
  Sort
} from '@mui/icons-material';
import Header from '../components/Header';

const Resources = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResource, setSelectedResource] = useState(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [bookmarkedResources, setBookmarkedResources] = useState(new Set());

  const resources = [
    {
      id: 1,
      title: 'Complete Software Engineering Career Guide',
      type: 'pdf',
      category: 'Technology',
      description: 'Comprehensive guide covering programming languages, interview preparation, and career paths in software engineering.',
      author: 'Tech Career Institute',
      rating: 4.8,
      downloads: 1247,
      duration: '45 pages',
      level: 'Beginner to Advanced',
      fileSize: '4.2 MB',
      uploadDate: '2024-01-10',
      tags: ['Programming', 'Interviews', 'Career Path', 'Resume'],
      featured: true,
      premium: false
    },
    {
      id: 2,
      title: 'Data Science Interview Preparation Series',
      type: 'video',
      category: 'Data Science',
      description: 'Video series covering statistics, machine learning concepts, and real-world data science interview questions.',
      author: 'Dr. Sarah Chen',
      rating: 4.9,
      views: 2890,
      duration: '2h 15m',
      level: 'Intermediate',
      fileSize: '320 MB',
      uploadDate: '2024-01-15',
      tags: ['Machine Learning', 'Statistics', 'Python', 'Interviews'],
      featured: true,
      premium: true
    },
    {
      id: 3,
      title: 'Career Assessment & Personality Test',
      type: 'quiz',
      category: 'Assessment',
      description: 'Interactive assessment to discover your strengths, interests, and ideal career matches.',
      author: 'Career Psychology Lab',
      rating: 4.7,
      completions: 3560,
      duration: '20 min',
      level: 'All Levels',
      fileSize: 'Online',
      uploadDate: '2024-01-08',
      tags: ['Assessment', 'Personality', 'Career Match', 'Skills'],
      featured: false,
      premium: false
    },
    {
      id: 4,
      title: 'Professional Resume Template Pack',
      type: 'template',
      category: 'Career Tools',
      description: 'Collection of 15 professionally designed resume templates for various industries and experience levels.',
      author: 'Design Professionals',
      rating: 4.6,
      downloads: 3102,
      duration: '15 templates',
      level: 'All Levels',
      fileSize: '8.7 MB',
      uploadDate: '2024-01-12',
      tags: ['Resume', 'Templates', 'Design', 'Professional'],
      featured: false,
      premium: false
    },
    {
      id: 5,
      title: 'Digital Marketing Masterclass',
      type: 'video',
      category: 'Marketing',
      description: 'Complete guide to digital marketing strategies, SEO, social media, and content marketing.',
      author: 'Marketing Experts Inc.',
      rating: 4.5,
      views: 1870,
      duration: '3h 45m',
      level: 'Beginner',
      fileSize: '450 MB',
      uploadDate: '2024-01-18',
      tags: ['Marketing', 'SEO', 'Social Media', 'Content'],
      featured: false,
      premium: true
    },
    {
      id: 6,
      title: 'UX/UI Design Portfolio Guide',
      type: 'pdf',
      category: 'Design',
      description: 'Step-by-step guide to creating an impressive UX/UI design portfolio that stands out to employers.',
      author: 'Design Career Hub',
      rating: 4.8,
      downloads: 1560,
      duration: '32 pages',
      level: 'Intermediate',
      fileSize: '3.8 MB',
      uploadDate: '2024-01-14',
      tags: ['UX Design', 'Portfolio', 'UI Design', 'Case Studies'],
      featured: true,
      premium: false
    },
    {
      id: 7,
      title: 'Salary Negotiation Handbook',
      type: 'pdf',
      category: 'Career Tools',
      description: 'Learn proven strategies for negotiating your salary and benefits package effectively.',
      author: 'Career Negotiation Experts',
      rating: 4.9,
      downloads: 2890,
      duration: '28 pages',
      level: 'All Levels',
      fileSize: '2.1 MB',
      uploadDate: '2024-01-16',
      tags: ['Salary', 'Negotiation', 'Career', 'Compensation'],
      featured: false,
      premium: true
    },
    {
      id: 8,
      title: 'Tech Interview Coding Challenges',
      type: 'quiz',
      category: 'Technology',
      description: 'Practice coding challenges and algorithm problems for technical interviews at top tech companies.',
      author: 'Tech Interview Prep',
      rating: 4.7,
      completions: 4230,
      duration: 'Self-paced',
      level: 'Advanced',
      fileSize: 'Online',
      uploadDate: '2024-01-11',
      tags: ['Coding', 'Algorithms', 'Interviews', 'Practice'],
      featured: true,
      premium: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources', count: resources.length },
    { id: 'pdf', label: 'Guides & PDFs', count: resources.filter(r => r.type === 'pdf').length },
    { id: 'video', label: 'Video Courses', count: resources.filter(r => r.type === 'video').length },
    { id: 'quiz', label: 'Assessments', count: resources.filter(r => r.type === 'quiz').length },
    { id: 'template', label: 'Templates', count: resources.filter(r => r.type === 'template').length }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'pdf': return <Description color="error" />;
      case 'video': return <VideoLibrary color="primary" />;
      case 'quiz': return <Quiz color="secondary" />;
      case 'template': return <Article color="success" />;
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
    const matchesCategory = activeTab === 'all' || resource.type === activeTab;
    return matchesSearch && matchesCategory;
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

  const renderResourceCard = (resource) => (
    <Card 
      key={resource.id}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: '0.3s',
        cursor: 'pointer',
        '&:hover': { 
          transform: 'translateY(-4px)', 
          boxShadow: 6 
        }
      }}
      onClick={() => handleResourceClick(resource)}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {getTypeIcon(resource.type)}
            <Chip 
              label={resource.type.toUpperCase()} 
              color={getTypeColor(resource.type)}
              size="small"
              sx={{ ml: 1 }}
            />
            {resource.premium && (
              <Chip 
                label="PREMIUM" 
                color="warning"
                size="small"
                sx={{ ml: 1 }}
              />
            )}
          </Box>
          <IconButton 
            size="small" 
            onClick={(e) => {
              e.stopPropagation();
              handleBookmark(resource.id);
            }}
          >
            {bookmarkedResources.has(resource.id) ? <Bookmark color="primary" /> : <BookmarkBorder />}
          </IconButton>
        </Box>

        {/* Title & Description */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', height: '64px', overflow: 'hidden' }}>
          {resource.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '60px', overflow: 'hidden' }}>
          {resource.description}
        </Typography>

        {/* Stats */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Star sx={{ fontSize: 16, color: 'warning.main', mr: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              {resource.rating}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {resource.downloads ? `${resource.downloads} downloads` : 
             resource.views ? `${resource.views} views` : 
             `${resource.completions} completions`}
          </Typography>
        </Box>

        {/* Progress Bar for Popularity */}
        <LinearProgress 
          variant="determinate" 
          value={Math.min(100, ((resource.downloads || resource.views || resource.completions) / 5000) * 100)} 
          sx={{ mb: 2, height: 4, borderRadius: 2 }}
        />

        {/* Tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {resource.tags.slice(0, 3).map((tag, index) => (
            <Chip key={index} label={tag} size="small" variant="outlined" />
          ))}
        </Box>

        {/* Footer */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="caption" color="text.secondary" display="block">
              {resource.duration}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {resource.level}
            </Typography>
          </Box>
          <Button 
            variant={resource.premium ? "contained" : "outlined"}
            color={resource.premium ? "warning" : "primary"}
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleDownload(resource);
            }}
            startIcon={resource.type === 'video' ? <PlayArrow /> : <Download />}
          >
            {resource.type === 'video' ? 'Watch' : 'Download'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  const renderResourceDetail = () => (
    <Dialog 
      open={detailDialogOpen} 
      onClose={() => setDetailDialogOpen(false)}
      maxWidth="md"
      fullWidth
    >
      {selectedResource && (
        <>
          <DialogTitle>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', pr: 2 }}>
                {selectedResource.title}
              </Typography>
              <IconButton onClick={() => setDetailDialogOpen(false)}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton onClick={() => handleBookmark(selectedResource.id)}>
                    {bookmarkedResources.has(selectedResource.id) ? <Bookmark color="primary" /> : <BookmarkBorder />}
                  </IconButton>
                  <IconButton>
                    <Share />
                  </IconButton>
                </Box>
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="body1" paragraph>
                  {selectedResource.description}
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  What You'll Get:
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <AccessTime />
                    </ListItemIcon>
                    <ListItemText primary={`Duration: ${selectedResource.duration}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUp />
                    </ListItemIcon>
                    <ListItemText primary={`Level: ${selectedResource.level}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Description />
                    </ListItemIcon>
                    <ListItemText primary={`File Size: ${selectedResource.fileSize}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Person />
                    </ListItemIcon>
                    <ListItemText primary={`Author: ${selectedResource.author}`} />
                  </ListItem>
                </List>

                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Skills Covered:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {selectedResource.tags.map((tag, index) => (
                    <Chip key={index} label={tag} color="primary" variant="outlined" />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ position: 'sticky', top: 20 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom align="center">
                      Resource Details
                    </Typography>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 1 }}>
                        {getTypeIcon(selectedResource.type)}
                      </Avatar>
                      <Chip 
                        label={selectedResource.type.toUpperCase()} 
                        color={getTypeColor(selectedResource.type)}
                        sx={{ mb: 1 }}
                      />
                      {selectedResource.premium && (
                        <Chip 
                          label="PREMIUM CONTENT" 
                          color="warning"
                          sx={{ mb: 1, ml: 1 }}
                        />
                      )}
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography>Rating:</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Star sx={{ color: 'warning.main', mr: 0.5 }} />
                          <Typography>{selectedResource.rating}/5.0</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography>Popularity:</Typography>
                        <Typography>
                          {selectedResource.downloads ? `${selectedResource.downloads} downloads` : 
                           selectedResource.views ? `${selectedResource.views} views` : 
                           `${selectedResource.completions} completions`}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Uploaded:</Typography>
                        <Typography>{selectedResource.uploadDate}</Typography>
                      </Box>
                    </Box>

                    <Button
                      variant={selectedResource.premium ? "contained" : "outlined"}
                      color={selectedResource.premium ? "warning" : "primary"}
                      fullWidth
                      size="large"
                      startIcon={selectedResource.type === 'video' ? <PlayArrow /> : <Download />}
                      onClick={() => handleDownload(selectedResource)}
                    >
                      {selectedResource.premium ? 'Access Premium' : 
                       selectedResource.type === 'video' ? 'Watch Now' : 'Download Now'}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDetailDialogOpen(false)}>Close</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Career Resources Library
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Access guides, videos, assessments, and templates to advance your career
          </Typography>
        </Box>

        {/* Search and Filters */}
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search resources, topics, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Tabs 
              value={activeTab} 
              onChange={(e, newValue) => setActiveTab(newValue)}
              sx={{ flex: 1 }}
            >
              {categories.map(category => (
                <Tab 
                  key={category.id}
                  value={category.id}
                  label={`${category.label} (${category.count})`}
                />
              ))}
            </Tabs>
            
            <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
              <Button startIcon={<FilterList />} variant="outlined">
                Filter
              </Button>
              <Button startIcon={<Sort />} variant="outlined">
                Sort
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Featured Resources */}
        {activeTab === 'all' && searchTerm === '' && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <TrendingUp sx={{ mr: 1 }} />
              Featured Resources
            </Typography>
            <Grid container spacing={3}>
              {resources.filter(r => r.featured).map(resource => renderResourceCard(resource))}
            </Grid>
            <Divider sx={{ my: 4 }} />
          </Box>
        )}

        {/* All Resources */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {activeTab === 'all' ? 'All Resources' : categories.find(c => c.id === activeTab)?.label}
          <Typography component="span" color="text.secondary" sx={{ ml: 1 }}>
            ({filteredResources.length})
          </Typography>
        </Typography>

        {filteredResources.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Search sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              No resources found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search terms or filters
            </Typography>
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

        {/* Resource Detail Dialog */}
        {renderResourceDetail()}
      </Container>
    </div>
  );
};

export default Resources;