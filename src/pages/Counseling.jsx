import React from 'react'
import Header from '../components/Header'
import { Container, Grid, Card, CardContent, Typography, Avatar, Button, Stack, Chip, Box } from '@mui/material'
import Rating from '@mui/material/Rating'
import counselors from '../utils/counselors'

const CounselorCard = ({ person }) => {
  const initials = person.name.split(' ').map(n => n[0]).slice(0,2).join('')
  return (
    <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>{initials}</Avatar>
          <Box>
            <Typography variant="h6">{person.name}</Typography>
            <Typography variant="body2" color="text.secondary">{person.title}</Typography>
          </Box>
        </Stack>

        <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">{person.bio}</Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
          {person.specialties.map(s => (
            <Chip key={s} label={s} size="small" />
          ))}
        </Stack>

        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Rating name="read-only" value={person.rating} precision={0.1} readOnly size="small" />
          <Button size="small" variant="outlined" href={`mailto:${person.email}`}>Contact</Button>
        </Box>
      </CardContent>
    </Card>
  )
}

const Counseling = () => {
  return (
    <div>
      <Header />
      <Container sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>Career Counseling</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Connect with expert career counselors — book a session or reach out via email.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {counselors.map(person => (
            <Grid item xs={12} sm={6} md={4} key={person.id}>
              <CounselorCard person={person} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Counseling