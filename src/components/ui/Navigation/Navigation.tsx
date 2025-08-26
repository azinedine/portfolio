'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, ArrowUpRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'About', href: '/about', icon: '👨‍💻' },
  { name: 'Projects', href: '/projects', icon: '💼' },
  { name: 'Experience', href: '/experience', icon: '🚀' },
  { name: 'Contact', href: '/contact', icon: '📧' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-4 left-4 right-4 z-50 transition-all duration-700',
          isScrolled
            ? 'top-3'
            : 'top-4'
        )}
      >
        <nav className={cn(
          'mx-auto max-w-7xl relative transition-all duration-700',
          isScrolled
            ? 'bg-black/40 backdrop-blur-2xl   rounded-2xl shadow-2xl shadow-primary-500/5'
            : 'bg-white/5 backdrop-blur-xl   rounded-3xl shadow-xl'
        )}>
          <div className="flex items-center justify-between px-6 py-4">
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
                  transition={{ duration: 0.5 }}
                  className="w-11 h-11 bg-gradient-to-br from-primary-400 via-primary-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Code2 className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"
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
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                </motion.div>
              </div>
              
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-primary-200 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  A.ZINEDDINE
                </motion.span>
                <span className="text-xs text-white/50 font-medium tracking-wider">
                  Full Stack Dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2   rounded-2xl p-2  ">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={cn(
                    'relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group',
                    pathname === item.href
                      ? 'text-white bg-white/15 shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  )}
                >
                  {/* Icon */}
                  <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  
                  {/* Text */}
                  <span className="text-sm">{item.name}</span>
                  
                  {/* Active indicator */}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-primary-400/30 to-purple-500/20 rounded-xl"
                      layoutId="activeNavItem"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  {hoveredItem === item.name && pathname !== item.href && (
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              ))}
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
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-primary-500 via-primary-600 to-purple-600 hover:from-primary-400 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg group relative overflow-hidden"
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                
                <span className="relative z-10 text-sm"> {`Let's Connect`} </span>
                <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
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
            transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-24 left-4 right-4 bg-black/90 backdrop-blur-2xl border rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        'flex items-center gap-4 px-4 py-4 rounded-2xl font-medium transition-all duration-300 group relative overflow-hidden',
                        pathname === item.href
                          ? 'bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-white border border-primary-500/30'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      )}
                    >
                      {/* Icon */}
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">
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
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 + 0.1 }}
                  className="pt-4 border-t  mt-4"
                >
                  <button
                    onClick={closeMenu}
                    className="w-full bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:from-primary-400 hover:to-purple-500 shadow-lg flex items-center justify-center gap-2"
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