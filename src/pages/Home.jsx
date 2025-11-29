import CareerQuiz from '../components/CareerQuiz';

// Add this section to your Home component
<section style={styles.assessmentSection}>
  <div style={styles.container}>
    <h2 style={styles.sectionTitle}>Discover Your Career Path</h2>
    <CareerQuiz />
  </div>
</section>

// Add this to your styles
assessmentSection: {
  padding: '4rem 2rem',
  background: '#f7fafc',
},