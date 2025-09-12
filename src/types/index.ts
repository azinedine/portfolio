// Common types used throughout the application

export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    category: 'Web App' | 'Mobile App' | 'Design' | 'API'
    date: string
    featured: boolean
    links: {
      demo?: string
      github?: string
      case_study?: string
    }
    status?: 'completed' | 'in_progress' | 'planned'
  }
  
  export interface Experience {
    id: number
    type: 'work' | 'education'
    title: string
    company?: string
    institution?: string
    location: string
    period: string
    description: string
    achievements: string[]
    technologies: string[]
    link?: string
  }
  
  export interface Skill {
    name: string
    level: number
    category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'design'
    color: string
  }
  
  export interface Certification {
    id: number
    title: string
    issuer: string
    date: string
    credentialId: string
    link: string
    image?: string
  }
  
  export interface ContactInfo {
    icon: React.ComponentType<{ className?: string }> // Lucide icon component
    label: string
    value: string
    href: string
    color: string
  }
  
  export interface SocialLink {
    icon: React.ComponentType<{ className?: string }> // Lucide icon component
    label: string
    href: string
    color: string
  }
  
  export interface FormData {
    name: string
    email: string
    subject: string
    message: string
    budget: string
  }
  
  export interface NavigationItem {
    name: string
    href: string
  }
  
  export interface Stats {
    icon: React.ComponentType<{ className?: string }> // Lucide icon component
    label: string
    value: string
  }
  
  export interface Testimonial {
    id: number
    name: string
    role: string
    company: string
    avatar: string
    content: string
    rating: number
  }
  
  export interface BlogPost {
    id: number
    title: string
    excerpt: string
    content: string
    image: string
    author: string
    date: string
    readTime: number
    tags: string[]
    slug: string
    published: boolean
  }
  
  export interface EmailServiceConfig {
  provider: 'emailjs' | 'resend' | 'nodemailer' | 'webhook';
  apiKey?: string;
  serviceId?: string;
  templateId?: string;
  endpoint?: string;
}

  // Animation variants
  export interface AnimationVariants {
    hidden: {
      opacity: number
      x?: number
      y?: number
      scale?: number
    }
    visible: {
      opacity: number
      x?: number
      y?: number
      scale?: number
      transition?: {
        duration?: number
        delay?: number
        ease?: string
        staggerChildren?: number
        delayChildren?: number
      }
    }
  }
  
  // Theme types
  export type Theme = 'light' | 'dark'
  
  export interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    toggleTheme: () => void
    mounted: boolean
  }
  
  // API Response types
  export interface ApiResponse<T> {
    success: boolean
    data?: T
    message?: string
    error?: string
  }
  
  export interface ContactFormResponse {
    success: boolean
    message: string
  }
  
  // Email service configuration type
  export interface EmailServiceConfig {
    provider: 'emailjs' | 'resend' | 'nodemailer' | 'webhook'
    serviceId?: string
    templateId?: string
    apiKey?: string
  }
  
  // Component prop types
  export interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    disabled?: boolean
    loading?: boolean
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
  }
  
  export interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
    glass?: boolean
  }
  
  export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
  }
  
  // Utility types
  export type WithClassName<T = Record<string, never>> = T & {
    className?: string
  }
  
  export type WithChildren<T = Record<string, never>> = T & {
    children: React.ReactNode
  }
  
  export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
  
  export type Prettify<T> = {
    [K in keyof T]: T[K]
  } & {}