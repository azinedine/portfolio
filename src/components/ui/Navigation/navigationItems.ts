export type NavigationItem = {
  name: string
  href: string
  icon: string
  section: string
}

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/', icon: '🏠', section: 'hero' },
  { name: 'About', href: '/about', icon: '👨‍💻', section: 'about' },
  { name: 'Projects', href: '/projects', icon: '💼', section: 'projects' },
  { name: 'Experience', href: '/experience', icon: '🚀', section: 'experience' },
  { name: 'Contact', href: '/contact', icon: '📧', section: 'contact' },
]


