// Application constants and configuration
import { EmailServiceConfig } from '@/types'
import packageJson from '../../package.json'

export const APP_VERSION = packageJson.version
export const BUILD_INFO = {
  version: APP_VERSION,
  buildDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
  environment: process.env.NODE_ENV || 'development',
} as const

export const APP_CONFIG = {
    name: 'Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, React Native, Vue.js, Node.js, and Laravel',
    author: 'Developer',
    url: 'https://portfolio-git-main-azinedines-projects.vercel.app/contact',
    email: 'amarichezineddine@gmail.com',
    phone: '+213 (540) 128-550',
    location: 'Algeria Aïn Defla, Khemis Miliana',
    timezone: 'PST (UTC-8)',
  } as const
  
  export const SOCIAL_LINKS = {
    github: 'https://github.com/azinedine',
    linkedin: 'https://www.linkedin.com/in/zineddineamariche/',
    twitter: 'https://x.com/zinedineamarich',
    instagram: 'https://www.instagram.com/azinedine_/',
  } as const
  
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
  
  export const PROJECT_CATEGORIES = [
    'All',
    'Web App',
    'Mobile App',
    'API',
    'Design',
  ] as const
  
  export const SKILL_LEVELS = {
    BEGINNER: 25,
    INTERMEDIATE: 50,
    ADVANCED: 75,
    EXPERT: 90,
    MASTER: 95,
  } as const
  
  export const ANIMATION_DURATION = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
    slower: 1.0,
  } as const
  
  export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  } as const
  
  export const THEME_STORAGE_KEY = 'portfolio-theme'
  
  export const CONTACT_FORM_FIELDS = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'subject', label: 'Subject', type: 'text', required: true },
    { name: 'budget', label: 'Budget Range', type: 'select', required: false },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ] as const
  
  export const BUDGET_RANGES = [
    { value: '', label: 'Select budget range' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
  ] as const
  
  export const FAQ_DATA = [
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity, but most web applications take 4-8 weeks from start to finish. I'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. I maintain regular communication throughout the project lifecycle."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React.js, Next.js, React Native, Vue.js, Node.js, and Laravel. I'm always learning new technologies to provide the best solutions for each project."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, I offer various support packages including bug fixes, feature updates, and maintenance. We can discuss the best support option for your needs."
    },
  ] as const
  
  export const PORTFOLIO_STATS = [
    { label: 'Projects Completed', value: '50+', icon: 'Code2' },
    { label: 'Happy Clients', value: '20+', icon: 'Users' },
    { label: 'Years Experience', value: '4+', icon: 'Zap' },
    { label: 'Awards Won', value: '8', icon: 'Award' },
  ] as const
  
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
  
  export const GRADIENT_VARIANTS = [
    'from-blue-600 to-cyan-600',
    'from-purple-600 to-pink-600',
    'from-green-600 to-emerald-600',
    'from-orange-600 to-red-600',
    'from-indigo-600 to-purple-600',
  ] as const
  
  export const DEFAULT_META = {
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
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
      url: APP_CONFIG.url,
      site_name: APP_CONFIG.name,
      title: APP_CONFIG.name,
      description: APP_CONFIG.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: APP_CONFIG.name,
      description: APP_CONFIG.description,
      creator: '@yourusername',
    },
  } as const
  
  export const ERROR_MESSAGES = {
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    MESSAGE_TOO_SHORT: 'Message must be at least 10 characters long',
    FORM_SUBMIT_ERROR: 'Sorry, there was an error sending your message. Please try again.',
    FORM_SUBMIT_SUCCESS: 'Thank you for your message! I\'ll get back to you soon.',
  } as const