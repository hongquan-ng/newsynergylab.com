export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  benefits: string[]
  features: {
    title: string
    description: string
  }[]
  caseStudyId?: string
}

export const services: Service[] = [
  {
    id: "ai-development",
    slug: "ai-development",
    title: "AI Development",
    shortDescription: "Custom AI solutions tailored to your business needs, from concept to deployment.",
    fullDescription:
      "Our AI Development service provides end-to-end solutions for businesses looking to leverage artificial intelligence to solve complex problems. We work closely with you to understand your unique challenges and develop custom AI applications that deliver measurable results. From initial concept to final deployment, our team of experts handles every aspect of the development process.",
    icon: "Zap",
    benefits: [
      "Accelerate business processes with intelligent automation",
      "Gain competitive advantage through AI-powered insights",
      "Reduce operational costs with efficient AI solutions",
      "Improve decision-making with data-driven recommendations",
      "Scale your operations with AI that grows with your business",
    ],
    features: [
      {
        title: "Custom AI Model Development",
        description:
          "We build and train AI models specifically designed to address your business challenges, ensuring optimal performance for your unique use case.",
      },
      {
        title: "Algorithm Design & Optimization",
        description:
          "Our experts design efficient algorithms and continuously optimize them to improve accuracy, speed, and resource utilization.",
      },
      {
        title: "Prototype & MVP Development",
        description:
          "We rapidly develop prototypes and minimum viable products to validate concepts and gather feedback before full-scale implementation.",
      },
      {
        title: "Full-Scale AI Application Development",
        description:
          "From front-end interfaces to back-end processing, we develop complete AI applications ready for production deployment.",
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "Rigorous testing ensures your AI solution performs reliably and accurately across various scenarios and edge cases.",
      },
    ],
    caseStudyId: "ai-customer-service",
  },
  {
    id: "ai-integration",
    slug: "ai-integration",
    title: "AI Integration",
    shortDescription: "Seamlessly integrate AI capabilities into your existing software and workflows.",
    fullDescription:
      "Our AI Integration service helps businesses incorporate artificial intelligence into their existing systems and workflows without disruption. We specialize in connecting AI models and capabilities with your current software infrastructure, ensuring smooth data flow and operation. Our approach minimizes changes to your existing processes while maximizing the benefits of AI technology.",
    icon: "Zap",
    benefits: [
      "Enhance existing systems without complete overhauls",
      "Maintain business continuity during AI adoption",
      "Leverage current data assets with new AI capabilities",
      "Reduce implementation time compared to ground-up development",
      "Minimize training requirements for staff",
    ],
    features: [
      {
        title: "API Development & Integration",
        description:
          "We create robust APIs that allow your existing systems to communicate seamlessly with new AI capabilities.",
      },
      {
        title: "Legacy System Compatibility",
        description:
          "Our solutions are designed to work with legacy systems, extending their functionality with modern AI capabilities.",
      },
      {
        title: "Workflow Automation",
        description:
          "We identify opportunities to automate workflows by integrating AI at key decision points in your business processes.",
      },
      {
        title: "Data Pipeline Engineering",
        description:
          "We build efficient data pipelines that connect your data sources to AI models for real-time processing and insights.",
      },
      {
        title: "Middleware Development",
        description:
          "Custom middleware solutions ensure smooth communication between different systems and AI components.",
      },
    ],
    caseStudyId: "sentiment-analysis",
  },
  {
    id: "ai-platform-engineer",
    slug: "ai-platform-engineer",
    title: "AI Platform Engineer",
    shortDescription: "Expert engineering to build and maintain robust AI platforms for your organization.",
    fullDescription:
      "Our AI Platform Engineering service focuses on creating the infrastructure and systems needed to support AI operations at scale. We design, build, and maintain robust platforms that enable your organization to develop, deploy, and manage AI solutions efficiently. Our engineering approach ensures your AI platform is scalable, reliable, and secure, providing a solid foundation for all your AI initiatives.",
    icon: "Zap",
    benefits: [
      "Establish a scalable foundation for all AI initiatives",
      "Reduce time-to-market for new AI solutions",
      "Ensure consistent performance across AI applications",
      "Improve resource utilization and cost efficiency",
      "Enable seamless collaboration between data science and IT teams",
    ],
    features: [
      {
        title: "AI Infrastructure Design",
        description:
          "We architect comprehensive infrastructure solutions optimized for AI workloads, including compute, storage, and networking components.",
      },
      {
        title: "MLOps Implementation",
        description:
          "Our MLOps practices automate the machine learning lifecycle, from development and training to deployment and monitoring.",
      },
      {
        title: "Model Serving Infrastructure",
        description:
          "We build robust systems for deploying and serving AI models in production environments with high availability and low latency.",
      },
      {
        title: "Monitoring & Observability",
        description:
          "Comprehensive monitoring solutions track the performance and health of your AI systems, providing early warning of potential issues.",
      },
      {
        title: "Scalability Engineering",
        description:
          "Our platforms are designed to scale horizontally and vertically to accommodate growing data volumes and user demands.",
      },
    ],
    caseStudyId: "predictive-maintenance",
  },
  {
    id: "data-solution",
    slug: "data-solution",
    title: "Data Solution",
    shortDescription: "End-to-end data solutions that solve complex business problems with innovative approaches.",
    fullDescription:
      "Our Data Solution service provides comprehensive approaches to solving business challenges through effective data management and utilization. We develop end-to-end solutions that cover everything from data collection and storage to processing, analysis, and visualization. Our team works to understand your specific business problems and creates custom data solutions that deliver actionable insights and measurable outcomes.",
    icon: "Zap",
    benefits: [
      "Transform raw data into valuable business assets",
      "Uncover hidden patterns and opportunities in your data",
      "Make data-driven decisions with confidence",
      "Improve operational efficiency through data optimization",
      "Create sustainable competitive advantage through data excellence",
    ],
    features: [
      {
        title: "Data Strategy Development",
        description:
          "We help you create a comprehensive data strategy aligned with your business objectives and technology capabilities.",
      },
      {
        title: "Data Architecture Design",
        description:
          "Our architects design scalable, efficient data architectures that support current needs and future growth.",
      },
      {
        title: "Data Integration & ETL",
        description:
          "We build robust data pipelines that collect, transform, and load data from multiple sources into unified repositories.",
      },
      {
        title: "Data Warehousing & Lakes",
        description:
          "Implementation of modern data storage solutions that provide a single source of truth for your organization.",
      },
      {
        title: "Business Intelligence & Visualization",
        description:
          "We create intuitive dashboards and reports that make complex data accessible and actionable for decision-makers.",
      },
    ],
    caseStudyId: "computer-vision-retail",
  },
  {
    id: "data-platform-engineer",
    slug: "data-platform-engineer",
    title: "Data Platform Engineer",
    shortDescription: "Building scalable, reliable data infrastructure to power your business intelligence.",
    fullDescription:
      "Our Data Platform Engineering service focuses on creating the technical foundation for your data operations. We design and implement robust data platforms that can ingest, process, store, and serve data at scale. Our engineers build reliable, high-performance infrastructure that supports your data scientists, analysts, and business users with the tools and capabilities they need to extract maximum value from your data assets.",
    icon: "Zap",
    benefits: [
      "Establish a unified platform for all data initiatives",
      "Improve data quality, accessibility, and security",
      "Reduce time to insight with efficient data processing",
      "Enable self-service analytics for business users",
      "Future-proof your data infrastructure for evolving needs",
    ],
    features: [
      {
        title: "Data Platform Architecture",
        description:
          "We design comprehensive data platforms that integrate various technologies into a cohesive, efficient system.",
      },
      {
        title: "Big Data Infrastructure",
        description:
          "Implementation of distributed systems capable of processing and analyzing massive datasets efficiently.",
      },
      {
        title: "Real-time Data Processing",
        description:
          "We build streaming data pipelines that enable real-time analytics and decision-making capabilities.",
      },
      {
        title: "Data Governance Implementation",
        description:
          "Our platforms include robust governance features to ensure data quality, security, and regulatory compliance.",
      },
      {
        title: "DevOps for Data",
        description:
          "We implement DataOps practices that bring agility and reliability to your data platform development and operations.",
      },
    ],
    caseStudyId: "recommendation-engine",
  },
  {
    id: "data-analysis",
    slug: "data-analysis",
    title: "Data Analysis",
    shortDescription: "Transform raw data into valuable business intelligence with our expert analysis.",
    fullDescription:
      "Our Data Analysis service helps businesses extract meaningful insights from their data to drive better decision-making. Our team of experienced analysts combines statistical methods, domain expertise, and visualization techniques to uncover patterns, trends, and correlations in your data. We translate complex findings into clear, actionable recommendations that directly address your business questions and challenges.",
    icon: "Zap",
    benefits: [
      "Identify growth opportunities hidden in your data",
      "Optimize operations based on data-driven insights",
      "Understand customer behavior and preferences",
      "Predict future trends and prepare accordingly",
      "Measure and improve the ROI of business initiatives",
    ],
    features: [
      {
        title: "Exploratory Data Analysis",
        description:
          "We examine your data from multiple angles to discover patterns, anomalies, and potential areas for deeper investigation.",
      },
      {
        title: "Statistical Analysis",
        description:
          "Rigorous statistical methods validate hypotheses and ensure the reliability of our findings and recommendations.",
      },
      {
        title: "Predictive Analytics",
        description:
          "We develop models that forecast future outcomes based on historical data, helping you anticipate changes and trends.",
      },
      {
        title: "Segmentation & Clustering",
        description:
          "Advanced techniques identify natural groupings in your data, revealing distinct customer segments or operational patterns.",
      },
      {
        title: "Custom Reporting & Dashboards",
        description:
          "We create tailored reports and interactive dashboards that communicate insights clearly to different stakeholders.",
      },
    ],
    caseStudyId: "fraud-detection",
  },
]

export function getAllServices(): Service[] {
  return services
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
