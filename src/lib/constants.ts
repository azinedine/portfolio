// Application constants and configuration
import { EmailServiceConfig } from '@/types'
import packageJson from '../../package.json'

export const APP_VERSION = packageJson.version
export const BUILD_INFO = {
  version: APP_VERSION,
  buildDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
  environment: process.env.NODE_ENV || 'development',
} as const

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
] as const

// Email service configuration
export const EMAIL_CONFIG: EmailServiceConfig = {
  provider: 'emailjs',
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  apiKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC,
} as const;

// Technology categories
export const TECH_STACK = {
  frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Vue.js',
    'React Native',
    'Tailwind CSS',
    'Framer Motion',
    'HTML5',
    'CSS3',
    'JavaScript',
  ],
  backend: [
    'Node.js',
    'Laravel',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'GraphQL',
    'REST APIs',
    'Docker',
    'AWS',
  ],
  tools: [
    'Git',
    'VS Code',
    'Figma',
    'Postman',
    'GitHub Actions',
    'Vercel',
    'Netlify',
    'Heroku',
    'Jest',
    'Cypress',
  ],
} as const

// Project categories
export const PROJECT_CATEGORIES = [
  'All',
  'Web App',
  'Mobile App',
  'API',
  'Design',
] as const

// Skill levels
export const SKILL_LEVELS = {
  BEGINNER: 25,
  INTERMEDIATE: 50,
  ADVANCED: 75,
  EXPERT: 90,
  MASTER: 95,
} as const

// Animation durations
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  slower: 1.0,
} as const

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Theme storage key
export const THEME_STORAGE_KEY = 'portfolio-theme'

// Color palette
export const COLOR_PALETTE = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  dark: {
    100: '#f8fafc',
    200: '#f1f5f9',
    300: '#e2e8f0',
    400: '#cbd5e1',
    500: '#94a3b8',
    600: '#64748b',
    700: '#475569',
    800: '#334155',
    900: '#1e293b',
    950: '#0f172a',
  }
} as const

// Gradient variants
export const GRADIENT_VARIANTS = [
  'from-blue-600 to-cyan-600',
  'from-purple-600 to-pink-600',
  'from-green-600 to-emerald-600',
  'from-orange-600 to-red-600',
  'from-indigo-600 to-purple-600',
] as const

// SEO Meta defaults
export const DEFAULT_META = {
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'Vue.js Developer',
    'Node.js Developer',
    'Laravel Developer',
    'Web Development',
    'Mobile Development',
    'Frontend Developer',
    'Backend Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Portfolio',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourusername',
  },
} as const