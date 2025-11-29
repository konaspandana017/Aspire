import React, { useState } from 'react';
import { Paper, Typography, Button, Box, Alert } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const ResourceUpload = () => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    // Simulate upload
    setTimeout(() => setUploading(false), 2000);
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Upload New Resource
      </Typography>
      <Box sx={{ border: '2px dashed #ccc', p: 4, textAlign: 'center', borderRadius: 2 }}>
        <CloudUpload sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
        <Typography gutterBottom>
          Drag and drop files here or click to browse
        </Typography>
        <Button 
          variant="contained" 
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Select Files'}
        </Button>
      </Box>
    </Paper>
  );
};

export default ResourceUpload;