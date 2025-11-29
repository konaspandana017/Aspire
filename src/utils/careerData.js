// Career assessment questions
export const quizQuestions = [
  {
    id: 1,
    question: "What type of activities do you enjoy the most?",
    options: [
      "Solving complex problems and coding",
      "Helping and caring for people",
      "Creating art, music, or writing",
      "Analyzing data and research",
      "Leading teams and making decisions"
    ]
  },
  {
    id: 2,
    question: "Which work environment do you prefer?",
    options: [
      "Tech office with latest gadgets",
      "Hospital, clinic, or healthcare setting",
      "Creative studio or flexible space",
      "Research lab or academic setting",
      "Corporate office with team meetings"
    ]
  },
  {
    id: 3,
    question: "What are your strongest skills?",
    options: [
      "Logical thinking and programming",
      "Empathy and communication",
      "Creativity and innovation",
      "Analysis and attention to detail",
      "Leadership and management"
    ]
  },
  {
    id: 4,
    question: "Which subject interests you the most?",
    options: [
      "Computer Science and Mathematics",
      "Biology and Healthcare",
      "Arts and Design",
      "Science and Research",
      "Business and Economics"
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