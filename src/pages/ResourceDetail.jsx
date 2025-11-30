import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Paper, Typography, Button, Box } from '@mui/material'
import Header from '../components/Header'
import resources from '../utils/resources'

const ResourceDetail = () => {
  const { id } = useParams()
  const rid = Number(id)
  const resource = resources.find(r => r.id === rid)

  if (!resource) {
    return (
      <div>
        <Header />
        <Container sx={{ py: 6 }}>
          <Typography variant="h6">Resource not found</Typography>
          <Button component={Link} to="/resources" sx={{ mt: 2 }}>Back to Resources</Button>
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper sx={{ p: 4 }} elevation={3}>
          <Typography variant="h4" sx={{ mb: 1 }}>{resource.title}</Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>{resource.desc}</Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{resource.content}</Typography>
          </Box>
          <Button component={Link} to="/resources" variant="outlined">Back to Resources</Button>
        </Paper>
      </Container>
    </div>
  )
}

export default ResourceDetail
