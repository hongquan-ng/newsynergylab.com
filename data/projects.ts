export interface Project {
  id: string
  slug: string
  title: string
  client: string
  image: string
  description: string
  fullDescription: string
  technologies: string[]
  results: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "ai-customer-service",
    slug: "ai-customer-service",
    title: "AI-Powered Customer Service",
    client: "TechCorp Inc.",
    image: "/placeholder.svg?height=250&width=400",
    description: "Developed an intelligent chatbot that reduced support tickets by 65%",
    fullDescription:
      "TechCorp Inc. was struggling with an overwhelming volume of customer support tickets. Our team developed a sophisticated AI-powered chatbot that could understand complex customer queries and provide accurate responses in real-time. The system integrates with their existing CRM and knowledge base, continuously learning from interactions to improve its responses over time.",
    technologies: ["Natural Language Processing", "Machine Learning", "Python", "TensorFlow", "React"],
    results: [
      "65% reduction in support tickets",
      "Customer satisfaction increased by 42%",
      "Average response time reduced from 24 hours to 2 minutes",
      "System handles over 10,000 conversations daily",
    ],
    testimonial: {
      quote:
        "The team at New SynergyLab delivered an AI solution that transformed our customer service operations. Their expertise and professionalism exceeded our expectations.",
      author: "Jennifer Lee",
      position: "CTO, TechCorp Inc.",
    },
    featured: true,
  },
  {
    id: "predictive-maintenance",
    slug: "predictive-maintenance",
    title: "Predictive Maintenance System",
    client: "Industrial Solutions",
    image: "/placeholder.svg?height=250&width=400",
    description: "ML system that predicts equipment failures before they happen",
    fullDescription:
      "Industrial Solutions operates large manufacturing facilities with expensive equipment where downtime can cost millions. We developed a predictive maintenance system that analyzes sensor data in real-time to detect patterns that precede equipment failures. This allows maintenance teams to address issues before they cause costly breakdowns.",
    technologies: ["Time Series Analysis", "IoT", "PyTorch", "AWS", "React Native"],
    results: [
      "Reduced unplanned downtime by 78%",
      "Maintenance costs reduced by 35%",
      "Equipment lifespan extended by 15%",
      "ROI achieved within 6 months",
    ],
    testimonial: {
      quote:
        "Working with these freelancers was a game-changer for our business. Their predictive maintenance system has saved us millions in prevented equipment failures.",
      author: "Robert Martinez",
      position: "Operations Director, Industrial Solutions",
    },
    featured: true,
  },
  {
    id: "sentiment-analysis",
    slug: "sentiment-analysis",
    title: "Sentiment Analysis Tool",
    client: "Global Media Group",
    image: "/placeholder.svg?height=250&width=400",
    description: "NLP solution analyzing customer feedback across multiple channels",
    fullDescription:
      "Global Media Group needed to understand audience sentiment across their various media properties and social channels. We built a comprehensive sentiment analysis tool that aggregates feedback from multiple sources, analyzes emotional tone, identifies key topics, and provides actionable insights through an intuitive dashboard.",
    technologies: ["BERT", "NLP", "Python", "Node.js", "D3.js"],
    results: [
      "Real-time analysis of over 1 million comments daily",
      "Content strategy adjustments led to 28% higher engagement",
      "Identified emerging audience interests 3 months ahead of competitors",
      "Reduced negative sentiment by 23% through targeted interventions",
    ],
    testimonial: {
      quote:
        "The sentiment analysis tool they built gives us insights we never had before. Their team was responsive, knowledgeable, and delivered on time and within budget.",
      author: "David Wilson",
      position: "Marketing VP, Global Media Group",
    },
    featured: true,
  },
  {
    id: "computer-vision-retail",
    slug: "computer-vision-retail",
    title: "Computer Vision for Retail",
    client: "ShopSmart",
    image: "/placeholder.svg?height=250&width=400",
    description: "AI system for inventory management and customer behavior analysis",
    fullDescription:
      "ShopSmart wanted to optimize their retail operations and improve customer experience. We developed a computer vision system that uses existing security cameras to track inventory levels, analyze customer shopping patterns, and provide insights on store layout effectiveness. The system integrates with their inventory management software to automate restocking processes.",
    technologies: ["Computer Vision", "TensorFlow", "OpenCV", "Python", "React"],
    results: [
      "Inventory accuracy improved from 92% to 99.5%",
      "Store layout optimizations increased sales by 18%",
      "Labor costs reduced by 22% through optimized staffing",
      "Customer dwell time in high-value areas increased by 35%",
    ],
    featured: false,
  },
  {
    id: "recommendation-engine",
    slug: "recommendation-engine",
    title: "Recommendation Engine",
    client: "StreamFlix",
    image: "/placeholder.svg?height=250&width=400",
    description: "Personalized content recommendation system increasing engagement by 40%",
    fullDescription:
      "StreamFlix needed to improve user engagement and reduce churn on their streaming platform. We built a sophisticated recommendation engine that analyzes viewing history, user preferences, and content metadata to deliver highly personalized recommendations. The system also incorporates collaborative filtering and trending content analysis.",
    technologies: ["Collaborative Filtering", "Neural Networks", "Python", "AWS", "React"],
    results: [
      "User engagement increased by 40%",
      "Average session time increased by 25 minutes",
      "Churn rate reduced by 17%",
      "Content discovery improved with 65% of users exploring new genres",
    ],
    featured: false,
  },
  {
    id: "fraud-detection",
    slug: "fraud-detection",
    title: "Fraud Detection System",
    client: "SecureBank",
    image: "/placeholder.svg?height=250&width=400",
    description: "AI-based system that reduced fraudulent transactions by 92%",
    fullDescription:
      "SecureBank was experiencing increasing levels of fraudulent transactions that were costing millions annually. We developed an advanced fraud detection system using machine learning to analyze transaction patterns and identify suspicious activities in real-time. The system continuously learns from new data to stay ahead of evolving fraud techniques.",
    technologies: ["Anomaly Detection", "Machine Learning", "Python", "Kafka", "React"],
    results: [
      "Fraudulent transactions reduced by 92%",
      "False positive rate below 0.1%",
      "Real-time detection and prevention capabilities",
      "Annual savings of $4.5 million in fraud losses",
    ],
    featured: false,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
