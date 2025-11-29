import React, { useState } from 'react';

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What type of activities do you enjoy most?",
      options: [
        "Working with technology and computers",
        "Helping and supporting people",
        "Creative arts and design",
        "Analyzing data and solving problems"
      ]
    },
    {
      question: "What's your preferred work environment?",
      options: [
        "Office with modern technology",
        "Helping people directly",
        "Creative and flexible space",
        "Research lab or analytical setting"
      ]
    },
    {
      question: "Which skills do you feel most confident about?",
      options: [
        "Programming and technical skills",
        "Communication and empathy",
        "Design and creativity",
        "Logical thinking and analysis"
      ]
    }
  ];

  const careerMatches = {
    technical: {
      title: "Technology Careers",
      careers: ["Software Developer", "Data Scientist", "IT Specialist", "Cybersecurity Analyst"],
      description: "You enjoy working with technology and solving technical challenges."
    },
    helping: {
      title: "Helping Professions", 
      careers: ["Teacher", "Counselor", "Healthcare Worker", "Social Worker"],
      description: "You have strong empathy and enjoy supporting others."
    },
    creative: {
      title: "Creative Fields",
      careers: ["Graphic Designer", "Writer", "Artist", "Marketing Specialist"],
      description: "You're imaginative and enjoy expressing creativity."
    },
    analytical: {
      title: "Analytical Roles",
      careers: ["Researcher", "Analyst", "Scientist", "Engineer"],
      description: "You love digging deep into data and solving complex problems."
    }
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateCareer = () => {
    // Simple scoring based on answer patterns
    const techKeywords = ['technology', 'computers', 'programming', 'technical'];
    const helpKeywords = ['helping', 'supporting', 'communication', 'empathy'];
    const creativeKeywords = ['creative', 'design', 'arts', 'flexible'];
    const analyticKeywords = ['analyzing', 'solving', 'logical', 'research'];

    let scores = { technical: 0, helping: 0, creative: 0, analytical: 0 };

    answers.forEach(answer => {
      const lowerAnswer = answer.toLowerCase();
      if (techKeywords.some(keyword => lowerAnswer.includes(keyword))) scores.technical++;
      if (helpKeywords.some(keyword => lowerAnswer.includes(keyword))) scores.helping++;
      if (creativeKeywords.some(keyword => lowerAnswer.includes(keyword))) scores.creative++;
      if (analyticKeywords.some(keyword => lowerAnswer.includes(keyword))) scores.analytical++;
    });

    // Get top 2 career matches
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return [careerMatches[sortedScores[0][0]], careerMatches[sortedScores[1][0]]];
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const [primaryMatch, secondaryMatch] = calculateCareer();
    
    return (
      <div style={styles.quizContainer}>
        <h2>🎯 Your Career Assessment Results</h2>
        
        <div style={styles.results}>
          <div style={styles.primaryResult}>
            <h3>Best Match: {primaryMatch.title}</h3>
            <p>{primaryMatch.description}</p>
            <h4>Suggested Careers:</h4>
            <ul>
              {primaryMatch.careers.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
          </div>

          <div style={styles.secondaryResult}>
            <h3>Also Consider: {secondaryMatch.title}</h3>
            <p>{secondaryMatch.description}</p>
            <h4>Related Careers:</h4>
            <ul>
              {secondaryMatch.careers.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
          </div>
        </div>

        <button style={styles.restartButton} onClick={restartQuiz}>
          Take Quiz Again
        </button>
      </div>
    );
  }

  return (
    <div style={styles.quizContainer}>
      <h2>Career Assessment Quiz</h2>
      <div style={styles.progress}>
        Question {currentQuestion + 1} of {questions.length}
      </div>
      
      <div style={styles.questionCard}>
        <h3>{questions[currentQuestion].question}</h3>
        <div style={styles.options}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={styles.optionButton}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  quizContainer: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  progress: {
    textAlign: 'center',
    color: '#667eea',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  questionCard: {
    textAlign: 'center',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '2rem',
  },
  optionButton: {
    padding: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    background: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  results: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    margin: '2rem 0',
  },
  primaryResult: {
    padding: '1.5rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '12px',
  },
  secondaryResult: {
    padding: '1.5rem',
    border: '2px solid #667eea',
    borderRadius: '12px',
  },
  restartButton: {
    padding: '12px 24px',
    background: '#48bb78',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default CareerQuiz;