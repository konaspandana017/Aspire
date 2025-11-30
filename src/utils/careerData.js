// Career assessment questions
export const quizQuestions = [
  {
    id: 1,
    question: 'Which activity sounds most appealing to you?',
    options: [
      'Designing and building software',
      'Helping people and offering care',
      'Creating visual or written content',
      'Exploring data and research'
    ]
  },
  {
    id: 2,
    question: 'What kind of daily task would you enjoy?',
    options: [
      'Solving algorithmic problems',
      'Advising or counseling individuals',
      'Sketching, composing, or drafting ideas',
      'Running experiments and analyzing results'
    ]
  },
  {
    id: 3,
    question: 'Which environment suits you best?',
    options: [
      'Fast-paced tech startup',
      'Clinical or community setting',
      'Creative studio or agency',
      'Laboratory or analytics team'
    ]
  },
  {
    id: 4,
    question: 'What skill are you strongest at?',
    options: [
      'Programming and system design',
      'Empathy and communication',
      'Visual/creative problem solving',
      'Statistical thinking and analysis'
    ]
  },
  {
    id: 5,
    question: 'What outcome motivates you most?',
    options: [
      'Shipping products that users love',
      'Improving someone’s wellbeing',
      'Producing expressive work that moves people',
      'Discovering insights from complex data'
    ]
  },
  {
    id: 6,
    question: 'Which tool would you pick to learn next?',
    options: [
      'A new programming framework (e.g., React)',
      'Counseling or coaching certification',
      'Design tools (Figma, Illustrator)',
      'Data tools (Python, SQL, R)'
    ]
  },
  {
    id: 7,
    question: 'How do you prefer to approach problems?',
    options: [
      'Break them into code-able steps',
      'Listen and iterate with people',
      'Prototype visually and iterate rapidly',
      'Form hypotheses and test them quantitatively'
    ]
  },
  {
    id: 8,
    question: 'Which of these career descriptions appeals most?',
    options: [
      'Software developer building apps and services',
      'Counselor/health professional supporting clients',
      'Designer / content creator shaping experiences',
      'Data scientist or researcher answering questions with data'
    ]
  }
]

// Career paths data
export const careerPaths = [
  {
    id: 1,
    title: "Software Developer",
    category: "Technology",
    description: "Design, develop, and maintain software applications",
    skills: ["Programming", "Problem Solving", "Teamwork"],
    salary: "$70,000 - $120,000",
    growth: "22% (Much faster than average)",
    demand: "High"
  },
  {
    id: 2,
    title: "Data Scientist",
    category: "Technology",
    description: "Analyze and interpret complex data to help organizations make decisions",
    skills: ["Statistics", "Machine Learning", "Python"],
    salary: "$85,000 - $140,000",
    growth: "31% (Much faster than average)",
    demand: "Very High"
  },
  {
    id: 3,
    title: "Healthcare Professional",
    category: "Healthcare",
    description: "Provide medical care and support to patients",
    skills: ["Empathy", "Medical Knowledge", "Communication"],
    salary: "$60,000 - $110,000",
    growth: "16% (Faster than average)",
    demand: "High"
  },
  {
    id: 4,
    title: "Graphic Designer",
    category: "Creative",
    description: "Create visual concepts to communicate ideas",
    skills: ["Creativity", "Design Software", "Communication"],
    salary: "$45,000 - $85,000",
    growth: "3% (As fast as average)",
    demand: "Moderate"
  }
]

// Career matches based on quiz answers
export const getCareerMatches = (answers) => {
  const scores = {
    technology: 0,
    healthcare: 0,
    creative: 0,
    research: 0,
    business: 0
  }
  
  answers.forEach(answer => {
    if (answer.includes("coding") || answer.includes("tech") || answer.includes("programming")) {
      scores.technology += 2
    }
    if (answer.includes("helping") || answer.includes("healthcare") || answer.includes("empathy")) {
      scores.healthcare += 2
    }
    if (answer.includes("creative") || answer.includes("art") || answer.includes("design")) {
      scores.creative += 2
    }
    if (answer.includes("research") || answer.includes("analysis") || answer.includes("data")) {
      scores.research += 2
    }
    if (answer.includes("leadership") || answer.includes("business") || answer.includes("management")) {
      scores.business += 2
    }
  })
  
  const maxScore = Math.max(...Object.values(scores))
  const topCategories = Object.keys(scores).filter(cat => scores[cat] === maxScore)
  
  return careerPaths.filter(career => 
    topCategories.includes(career.category.toLowerCase())
  )
}