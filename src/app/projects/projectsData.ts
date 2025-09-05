// projectsData.ts - Fixed version
export type ProjectItem = {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  date: string
  featured: boolean
  links: {
    demo: string
    github: string
  }
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring real-time inventory, payment integration, and admin dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe"],
    category: "Web App",
    date: "2024",
    featured: true,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
  {
    id: 2,
    title: "Task Management Mobile App",
    description:
      "Cross-platform mobile app for team collaboration and task management with real-time sync and offline support.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.io"],
    category: "Mobile App",
    date: "2024",
    featured: true,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Business intelligence dashboard with machine learning insights and interactive data visualizations.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "FastAPI"],
    category: "Web App",
    date: "2023",
    featured: false,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description:
      "Full-stack real estate platform with property listings, virtual tours, and CRM functionality.",
    image: "/api/placeholder/600/400",
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS", "WebRTC"],
    category: "Web App",
    date: "2023",
    featured: false,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description:
      "Mobile fitness app with workout tracking, nutrition logging, and social features for fitness enthusiasts.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Node.js", "MongoDB", "Redis", "HealthKit"],
    category: "Mobile App",
    date: "2023",
    featured: false,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
  {
    id: 6,
    title: "Cryptocurrency Portfolio Tracker",
    description:
      "Real-time crypto portfolio tracking with advanced charts, alerts, and market analysis.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React",
      "Node.js",
      "WebSocket",
      "Chart.js",
      "CoinGecko API",
    ],
    category: "Web App",
    date: "2022",
    featured: false,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
  // Add a Design project to match your categories
  {
    id: 7,
    title: "Brand Identity Design System",
    description:
      "Complete brand identity and design system for a modern tech startup, including logo, colors, typography, and components.",
    image: "/api/placeholder/600/400",
    technologies: ["Figma", "Adobe Creative Suite", "Design System", "Prototyping"],
    category: "Design",
    date: "2024",
    featured: false,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
]

// Generate categories dynamically from actual data to avoid mismatches
export const projectCategories = [
  "All", 
  ...Array.from(new Set(projectsData.map(project => project.category))).sort()
]

// Alternative: If you want to keep your predefined categories, make sure they match your data
// export const projectCategories = ["All", "Web App", "Mobile App", "Design"]