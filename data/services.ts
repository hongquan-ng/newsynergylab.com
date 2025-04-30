export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  caseStudyId?: string;
}

export const services: Service[] = [
  {
    id: "ai-machine-learning",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Solutions",
    shortDescription:
      "Drive innovation with tailored AI solutions to solve complex business problems.",
    fullDescription:
      "We help organizations harness the power of AI to solve their most pressing challenges. Our end-to-end development—from ideation to deployment—ensures your solution is not only technically sound, but strategically aligned with your business goals.",
    icon: "Brain",
    benefits: [
      "Accelerate growth through intelligent automation",
      "Make smarter decisions with AI-driven insights",
      "Streamline operations and reduce overhead",
      "Stay ahead of the curve with tailored AI systems",
      "Future-proof your business with scalable AI models",
      "Ensure regulatory compliance with AI-powered transparency",
      "Enhance auditability with clear, traceable decision-making",
      "Minimize legal risks with built-in data security and privacy features",
    ],
    features: [
      {
        title: "Custom AI Model Finetuning",
        description:
          "We help build and train AI models specifically designed to address your business challenges, ensuring optimal performance for your unique use case.",
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
    caseStudyId: "ai-optimization",
  },
  {
    id: "data-engineering-analytics",
    slug: "data-engineering-analytics",
    title: "Data Engineering & Advanced Analytics",
    shortDescription:
      "Transform raw data into valuable business insights with advanced data engineering and analytics.",
    fullDescription:
      "Our Data Engineering and Advanced Analytics services enable businesses to process and analyze large datasets efficiently. We provide comprehensive solutions that span data collection, cleaning, transformation, and advanced analytics, helping organizations make data-driven decisions that drive growth and innovation.",
    icon: "Database",
    benefits: [
      "Enable data-driven decision making with actionable insights",
      "Ensure high-quality, accessible data for analysis",
      "Automate data pipelines to reduce manual efforts",
      "Integrate disparate data sources for a unified view",
      "Enhance forecasting and predictive capabilities",
    ],
    features: [
      {
        title: "Data Pipeline Development",
        description:
          "We design and implement efficient data pipelines to transform raw data into usable insights.",
      },
      {
        title: "Data Warehousing & Storage",
        description:
          "Our solutions provide scalable storage for structured and unstructured data, optimizing access for analytics.",
      },
      {
        title: "Predictive Analytics & Modeling",
        description:
          "We apply machine learning techniques to generate forecasts and identify patterns in large datasets.",
      },
      {
        title: "Advanced Reporting & Dashboards",
        description:
          "Create dynamic dashboards and custom reports that provide real-time insights and actionable intelligence.",
      },
      {
        title: "Data Security & Compliance",
        description:
          "We implement strong data governance frameworks to ensure data privacy, security, and regulatory compliance.",
      },
    ],
    caseStudyId: "data-analytics",
  },
  {
    id: "infrastructure-platform-engineering",
    slug: "infrastructure-platform-engineering",
    title: "Infrastructure & Platform Engineering Solutions",
    shortDescription:
      "Building scalable and secure infrastructures to support business growth and digital transformation.",
    fullDescription:
      "We specialize in designing and deploying robust infrastructure and platform solutions that scale with your business needs. Our engineering services cover everything from cloud infrastructure to platform optimization, ensuring your technology stack is secure, efficient, and future-ready.",
    icon: "Cloud",
    benefits: [
      "Ensure high availability and reliability of your platform",
      "Achieve seamless scalability as your business grows",
      "Reduce infrastructure costs with optimized solutions",
      "Enhance security and compliance with best practices",
      "Accelerate digital transformation with modernized platforms",
    ],
    features: [
      {
        title: "Cloud Infrastructure Design & Deployment",
        description:
          "We design and deploy cloud-native infrastructures using leading providers like AWS, Azure, and GCP.",
      },
      {
        title: "Platform Optimization & Automation",
        description:
          "Optimize existing platforms for performance, cost efficiency, and automation of routine tasks.",
      },
      {
        title: "Security Architecture & Best Practices",
        description:
          "Our engineers implement industry-standard security measures to protect your data and infrastructure.",
      },
      {
        title: "Disaster Recovery & High Availability",
        description:
          "Ensure business continuity with reliable disaster recovery plans and high-availability architecture.",
      },
      {
        title: "DevOps Integration & Automation",
        description:
          "We integrate DevOps practices into your platform to streamline development, deployment, and monitoring.",
      },
    ],
    caseStudyId: "cloud-optimization",
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    shortDescription:
      "Building scalable, reliable software solutions tailored to your business needs.",
    fullDescription:
      "We develop custom software solutions to help businesses optimize processes, improve efficiency, and drive innovation. From initial concept to final deployment, we ensure your software is designed with scalability, security, and performance in mind.",
    icon: "Code",
    benefits: [
      "Create high-performance, scalable software solutions",
      "Improve operational efficiency through automation",
      "Enhance customer experience with tailored features",
      "Achieve better alignment with business goals",
      "Ensure long-term support and adaptability",
    ],
    features: [
      {
        title: "Custom Software Design & Development",
        description:
          "We create tailored software applications that address your specific business requirements.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Develop software solutions that work seamlessly across multiple platforms, including web, mobile, and desktop.",
      },
      {
        title: "Integration with Legacy Systems",
        description:
          "We ensure smooth integration with your existing systems for continuity and optimized workflows.",
      },
      {
        title: "Agile Development Process",
        description:
          "Our team uses agile development methodologies to deliver software iteratively and with flexibility.",
      },
      {
        title: "Post-Launch Support & Maintenance",
        description:
          "We offer continuous support to ensure your software remains secure, up-to-date, and optimized.",
      },
    ],
    caseStudyId: "custom-software",
  },
  {
    id: "offshore-development-tech-talent",
    slug: "offshore-development-tech-talent",
    title: "Offshore Development & Tech Talent",
    shortDescription:
      "Leverage global talent to scale your development teams and accelerate project timelines.",
    fullDescription:
      "We connect you with highly skilled offshore developers and tech talent to expand your development capacity. Whether you're scaling quickly or need specific expertise, we help you build strong, diverse teams that meet your business requirements.",
    icon: "Users",
    benefits: [
      "Access to a global pool of skilled developers",
      "Reduce development costs with offshore teams",
      "Accelerate project timelines with flexible resources",
      "Enhance team diversity and innovation",
      "Ensure high-quality code and productivity",
    ],
    features: [
      {
        title: "Dedicated Offshore Teams",
        description:
          "Build dedicated offshore teams that work as an extension of your in-house staff.",
      },
      {
        title: "Full-stack Development Expertise",
        description:
          "Access a wide range of technical expertise across various tech stacks and development frameworks.",
      },
      {
        title: "Rapid Scaling & Resource Flexibility",
        description:
          "Quickly scale your team up or down based on project requirements and timelines.",
      },
      {
        title: "Project Management & Collaboration Tools",
        description:
          "We provide seamless project management tools to enhance team collaboration and transparency.",
      },
      {
        title: "Continuous Support & Quality Assurance",
        description:
          "Ensure your offshore team is consistently delivering high-quality work with ongoing support and quality checks.",
      },
    ],
    caseStudyId: "offshore-team",
  },
  {
    id: "headhunting-staff-augmentation",
    slug: "headhunting-staff-augmentation",
    title: "Headhunting & Staff Augmentation",
    shortDescription:
      "Find the right talent to meet your business needs with our headhunting and staff augmentation services.",
    fullDescription:
      "We provide tailored headhunting and staff augmentation solutions to help you find and onboard the best talent. Whether you need short-term contract staff or full-time employees, we ensure you have the right people for your team, on-demand.",
    icon: "UserPlus",
    benefits: [
      "Fill critical roles with top-tier talent",
      "Enhance team capabilities with specialized skills",
      "Save time in recruitment and hiring processes",
      "Scale your team quickly with contract or full-time staff",
      "Reduce hiring risks with vetted professionals",
    ],
    features: [
      {
        title: "Tailored Talent Acquisition",
        description:
          "We work closely with you to understand your requirements and source the best candidates for your team.",
      },
      {
        title: "Flexible Staff Augmentation",
        description:
          "Whether you need temporary staff or long-term hires, we offer flexibility to meet your workforce needs.",
      },
      {
        title: "Vetting & Screening Process",
        description:
          "Our comprehensive vetting process ensures only the best professionals are selected for your team.",
      },
      {
        title: "Market Intelligence & Insights",
        description:
          "We leverage our market expertise to provide insights on industry trends and salary benchmarks.",
      },
      {
        title: "Onboarding & Integration Support",
        description:
          "We help integrate new hires seamlessly into your team to ensure a smooth transition and optimal productivity.",
      },
    ],
    caseStudyId: "staff-augmentation",
  },
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
 