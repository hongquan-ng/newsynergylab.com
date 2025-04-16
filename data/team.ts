export interface TeamMember {
  id: string
  slug: string
  name: string
  role: string
  image: string
  description: string
  bio: string
  skills: string[]
  education: string[]
  experience: string[]
  socialLinks: {
    linkedin?: string
    github?: string
    twitter?: string
    website?: string
  }
  featured: boolean
}

export const teamMembers: TeamMember[] = [
  {
    id: "alex-chen",
    slug: "alex-chen",
    name: "Alex Chen",
    role: "AI Architect",
    image: "/placeholder.svg?height=300&width=300",
    description: "10+ years experience in designing scalable AI systems",
    bio: "Alex is a seasoned AI Architect with over a decade of experience designing and implementing large-scale AI systems for Fortune 500 companies. He specializes in creating robust, scalable architectures that can handle complex AI workloads while maintaining high performance and reliability.",
    skills: ["System Architecture", "Deep Learning", "MLOps", "Cloud Infrastructure", "TensorFlow", "PyTorch"],
    education: ["Ph.D. in Computer Science, Stanford University", "M.S. in Artificial Intelligence, MIT"],
    experience: [
      "Lead AI Architect at TechGiant (2018-2023)",
      "Senior ML Engineer at AI Innovations (2015-2018)",
      "Research Scientist at Advanced Computing Lab (2012-2015)",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen",
      twitter: "https://twitter.com/alexchen",
      website: "https://alexchen.dev",
    },
    featured: true,
  },
  {
    id: "sarah-johnson",
    slug: "sarah-johnson",
    name: "Sarah Johnson",
    role: "ML Engineer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Specializes in computer vision and deep learning models",
    bio: "Sarah is a machine learning engineer with a focus on computer vision and deep learning. She has developed state-of-the-art models for object detection, image segmentation, and facial recognition that are being used in various industries including retail, security, and healthcare.",
    skills: ["Computer Vision", "Deep Learning", "PyTorch", "TensorFlow", "CUDA", "OpenCV"],
    education: [
      "M.S. in Computer Vision, Carnegie Mellon University",
      "B.S. in Computer Science, University of Washington",
    ],
    experience: [
      "Senior ML Engineer at Vision AI (2019-2023)",
      "Computer Vision Researcher at Research Labs (2017-2019)",
      "ML Intern at Tech Innovations (2016-2017)",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
    },
    featured: true,
  },
  {
    id: "michael-rodriguez",
    slug: "michael-rodriguez",
    name: "Michael Rodriguez",
    role: "Data Scientist",
    image: "/placeholder.svg?height=300&width=300",
    description: "Expert in predictive analytics and statistical modeling",
    bio: "Michael is a data scientist with expertise in predictive analytics, statistical modeling, and data visualization. He has helped numerous companies transform their raw data into actionable insights, leading to significant improvements in business performance and decision-making processes.",
    skills: ["Statistical Analysis", "Predictive Modeling", "Python", "R", "SQL", "Tableau", "Power BI"],
    education: ["M.S. in Statistics, UCLA", "B.S. in Mathematics, UC Berkeley"],
    experience: [
      "Lead Data Scientist at Data Insights Inc. (2020-2023)",
      "Senior Analyst at Analytics Firm (2017-2020)",
      "Data Analyst at Tech Company (2015-2017)",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/michaelrodriguez",
      website: "https://michaelrodriguez.io",
    },
    featured: true,
  },
  {
    id: "priya-sharma",
    slug: "priya-sharma",
    name: "Priya Sharma",
    role: "NLP Specialist",
    image: "/placeholder.svg?height=300&width=300",
    description: "Develops advanced natural language processing solutions",
    bio: "Priya is a natural language processing specialist who has developed cutting-edge solutions for text analysis, sentiment analysis, and language generation. Her work has been implemented in chatbots, content analysis tools, and automated writing assistants used by major companies worldwide.",
    skills: ["NLP", "BERT", "GPT", "Transformer Models", "Python", "TensorFlow", "PyTorch"],
    education: [
      "Ph.D. in Computational Linguistics, University of Toronto",
      "M.S. in Computer Science, Indian Institute of Technology",
    ],
    experience: [
      "NLP Lead at Language AI (2019-2023)",
      "Research Scientist at NLP Lab (2016-2019)",
      "NLP Engineer at Tech Solutions (2014-2016)",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/priyasharma",
      github: "https://github.com/priyasharma",
      twitter: "https://twitter.com/priyasharma",
    },
    featured: true,
  },
  {
    id: "james-wilson",
    slug: "james-wilson",
    name: "James Wilson",
    role: "AI/ML Engineer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Specialist in reinforcement learning and autonomous systems",
    bio: "James is an AI/ML Engineer with extensive experience in reinforcement learning and autonomous systems. He has developed cutting-edge algorithms for robotics, game AI, and industrial automation. His work focuses on creating AI systems that can learn and adapt to complex, dynamic environments with minimal human intervention.",
    skills: [
      "Reinforcement Learning",
      "PyTorch",
      "TensorFlow",
      "Robotics",
      "Game AI",
      "Autonomous Systems",
      "Python",
      "C++",
    ],
    education: [
      "Ph.D. in Machine Learning, MIT",
      "M.S. in Computer Science, Stanford University",
      "B.S. in Mathematics, University of California, Berkeley",
    ],
    experience: [
      "Senior AI Engineer at Autonomous Systems Inc. (2020-2023)",
      "Research Scientist at AI Innovations Lab (2017-2020)",
      "ML Engineer at Tech Robotics (2015-2017)",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson",
      twitter: "https://twitter.com/jameswilson",
      website: "https://jameswilson.ai",
    },
    featured: true,
  },
]

export function getFeaturedTeamMembers(): TeamMember[] {
  return teamMembers.filter((member) => member.featured)
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug)
}
