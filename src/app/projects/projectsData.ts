// Updated projectsData.ts with photos array support
export type ProjectItem = {
  id: number
  title: string
  description: string
  image?: string // Keep for backward compatibility
  photos?: string[] // New photos array for carousel
  technologies: string[]
  category: string
  date: string
  featured: boolean
  status?: string // Add status like portfolio
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
    photos: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/401",
      "/api/placeholder/600/402"
    ],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe"],
    category: "Web App",
    date: "2024",
    status: "Completed",
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
    photos: [
      "/api/placeholder/600/410",
      "/api/placeholder/600/411"
    ],
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.io"],
    category: "Mobile App",
    date: "2024",
    status: "In Progress",
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
    photos: [
      "/api/placeholder/600/420"
    ],
    technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "FastAPI"],
    category: "Web App",
    date: "2023",
    status: "Completed",
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
    photos: [
      "/api/placeholder/600/430",
      "/api/placeholder/600/431",
      "/api/placeholder/600/432",
      "/api/placeholder/600/433"
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS", "WebRTC"],
    category: "Web App",
    date: "2023",
    status: "Completed",
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
    photos: [
      "/api/placeholder/600/440",
      "/api/placeholder/600/441"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Redis", "HealthKit"],
    category: "Mobile App",
    date: "2023",
    status: "Completed",
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
    photos: [
      "/api/placeholder/600/450"
    ],
    technologies: [
      "React",
      "Node.js",
      "WebSocket",
      "Chart.js",
      "CoinGecko API",
    ],
    category: "Web App",
    date: "2022",
    status: "Completed",
    featured: false,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
  {
    id: 7,
    title: "Brand Identity Design System",
    description:
      "Complete brand identity and design system for a modern tech startup, including logo, colors, typography, and components.",
    photos: [
      "/api/placeholder/600/460",
      "/api/placeholder/600/461",
      "/api/placeholder/600/462"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Design System", "Prototyping"],
    category: "Design",
    date: "2024",
    status: "Completed",
    featured: false,
    links: {
      demo: "https://example.com",
      github: "https://github.com/username/project",
    },
  },
]

export const projectCategories = [
  "All", 
  ...Array.from(new Set(projectsData.map(project => project.category))).sort()
]