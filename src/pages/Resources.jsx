import React from 'react'
import Header from '../components/Header'
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import resources from '../utils/resources'

const Resources = () => {
  return (
    <div>
      <Header />
      <Container sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>Career Resources</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>Practical guides, articles, and curated learning material to help you progress.</Typography>
        </Box>

        <Grid container spacing={3}>
          {resources.map(r => (
            <Grid item xs={12} sm={6} md={3} key={r.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{r.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{r.desc}</Typography>
                  <Button size="small" variant="outlined" component={Link} to={`/resources/${r.id}`}>View</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Resources