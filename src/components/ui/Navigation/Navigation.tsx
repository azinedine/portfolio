'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, ArrowUpRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  { name: 'Home', href: '/', icon: '🏠', section: 'hero' },
  { name: 'About', href: '/about', icon: '👨‍💻', section: 'about' },
  { name: 'Projects', href: '/projects', icon: '💼', section: 'projects' },
  { name: 'Experience', href: '/experience', icon: '🚀', section: 'experience' },
  { name: 'Contact', href: '/contact', icon: '📧', section: 'contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(currentScrollY / docHeight, 1) * 100
      
      // Calculate visibility
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)
      
      // Only update visibility if there's significant scroll movement (prevents jitter)
      if (scrollDifference > 5) {
        const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 100
        const isAtTop = currentScrollY < 100
        
        // Show navbar when: at top OR scrolling up
        // Hide when: scrolling down and not at top
        setIsVisible(isAtTop || !isScrollingDown)
        setLastScrollY(currentScrollY)
      }
      
      setIsScrolled(currentScrollY > 10)
      setScrollProgress(progress)

      // Check which section is currently active
      const sections = navigationItems.map(item => item.section)
      let currentSection = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Consider section active if it's in the upper half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section
            break
          }
          // Fallback: if section is visible in viewport
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            currentSection = section
          }
        }
      }

      // If on homepage, also check pathname-based sections
      if (pathname === '/' && !currentSection) {
        if (currentScrollY < 100) currentSection = 'hero'
      }

      setActiveSection(currentSection)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [lastScrollY, pathname])

  const closeMenu = () => setIsOpen(false)

  const getActiveItem = () => {
    // First priority: exact pathname match
    const pathMatch = navigationItems.find(item => item.href === pathname)
    if (pathMatch) return pathMatch.name

    // Second priority: active section match
    const sectionMatch = navigationItems.find(item => item.section === activeSection)
    return sectionMatch ? sectionMatch.name : 'Home'
  }

  const activeItemName = getActiveItem()

  return (
    <>
      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ willChange: 'transform' }}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-purple-500 z-10"
          style={{ 
            width: `${scrollProgress}%`,
            willChange: 'width'
          }}
        />

        <nav className={cn(
          'relative transition-all duration-500 w-full',
          isScrolled
            ? 'bg-black/50 backdrop-blur-2xl shadow-2xl shadow-primary-500/10'
            : 'bg-white/5 backdrop-blur-xl shadow-xl'
        )}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group relative"
              onClick={closeMenu}
            >
              <div className="relative">
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-11 h-11 bg-gradient-to-br from-primary-400 via-primary-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ willChange: 'transform' }}
                >
                  <Code2 className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  initial={false}
                />
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ 
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                >
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-primary-200 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  A.ZINEDDINE
                </motion.span>
                <span className="text-xs text-white/50 font-medium tracking-wider">
                  Full Stack Dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 relative">
              {navigationItems.map((item) => {
                const isActive = activeItemName === item.name
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative px-4 py-3 font-medium transition-all duration-300 flex items-center gap-2 group"
                  >
                    {/* Icon */}
                    <motion.span 
                      className="text-sm"
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.span>
                    
                    {/* Text with underline container */}
                    <span className={cn(
                      "text-sm font-medium transition-colors duration-200 relative",
                      isActive 
                        ? "text-white" 
                        : "text-white/70 group-hover:text-white"
                    )}>
                      {item.name}
                      
                      {/* Active underline - directly under text */}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-purple-500 rounded-full"
                          layoutId="activeTextIndicator"
                          initial={false}
                          style={{ willChange: 'transform' }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 0.3
                          }}
                        />
                      )}

                      {/* Hover underline - directly under text */}
                      {hoveredItem === item.name && !isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/40 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ transformOrigin: 'center', willChange: 'transform' }}
                        />
                      )}

                      {/* Glow effect for active - under text */}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400/60 via-primary-500/60 to-purple-500/60 rounded-full blur-sm"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ transformOrigin: 'center', willChange: 'transform, opacity' }}
                        />
                      )}
                    </span>
                    
                    {/* Hover background */}
                    {hoveredItem === item.name && !isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white/5 rounded-xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ willChange: 'transform, opacity' }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* CTA Button - Desktop */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(109, 74, 236, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-primary-500 via-primary-600 to-purple-600 hover:from-primary-400 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-200 shadow-lg group relative overflow-hidden"
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                
                <span className="relative z-10 text-sm">{`Let's Connect`}</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-2xl border rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 space-y-2">
                {navigationItems.map((item, index) => {
                  const isActive = activeItemName === item.name
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          'flex items-center gap-4 px-4 py-4 rounded-2xl font-medium transition-all duration-200 group relative overflow-hidden',
                          isActive
                            ? 'bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-white border border-primary-500/30'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        )}
                      >
                        {/* Icon */}
                        <span className="text-lg group-hover:scale-110 transition-transform duration-150">
                          {item.icon}
                        </span>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <span className="block font-semibold">{item.name}</span>
                          <span className="text-xs text-white/50 block">
                            {item.name === 'Home' && 'Welcome page'}
                            {item.name === 'About' && 'Learn about me'}
                            {item.name === 'Projects' && 'View my work'}
                            {item.name === 'Experience' && 'My journey'}
                            {item.name === 'Contact' && 'Get in touch'}
                          </span>
                        </div>
                        
                        {/* Arrow */}
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                        
                        {/* Active indicator for mobile */}
                        {isActive && (
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full" />
                        )}
                      </Link>
                      
                      {/* Mobile underline indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full"
                          layoutId="mobileActiveIndicator"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  )
                })}
                
                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 + 0.1 }}
                  className="pt-4 border-t border-white/10 mt-4"
                >
                  <button
                    onClick={closeMenu}
                    className="w-full bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 hover:from-primary-400 hover:to-purple-500 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>{`Let's Connect`}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}