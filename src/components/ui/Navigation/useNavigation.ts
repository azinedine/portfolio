'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { navigationItems } from './navigationItems'
export type ActiveItemName = string

type UseNavigationReturn = {
  isOpen: boolean
  isScrolled: boolean
  isVisible: boolean
  hoveredItem: string | null
  scrollProgress: number
  activeItemName: ActiveItemName
  pathname: string
  toggleOpen: () => void
  closeMenu: () => void
  navigateToContact: () => void
  onItemHover: (name: string | null) => void
}

export function useNavigation(): UseNavigationReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  // Removed debounced visibility for immediate response

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(currentScrollY / docHeight, 1) * 100

      // Simple and reliable scroll direction detection
      const scrollDelta = currentScrollY - lastScrollY
      const minimumScrollThreshold = 5
      
      // Only update visibility if there's significant scroll movement
      if (Math.abs(scrollDelta) > minimumScrollThreshold) {
        const newScrollDirection = scrollDelta > 0 ? 'down' : 'up'
        
        // Define clear visibility conditions
        const isAtTop = currentScrollY <= 100 // Show when at top
        const isAtBottom = currentScrollY >= docHeight - 150 // Show when at bottom
        const isScrollingUp = newScrollDirection === 'up'
        
        // Update scroll direction
        setScrollDirection(newScrollDirection)
        
        // Simple logic: Show at top, bottom, or when scrolling up
        let shouldShowNav = false
        
        if (isAtTop || isAtBottom || isScrollingUp) {
          shouldShowNav = true
        } else {
          shouldShowNav = false
        }
        
        // Direct visibility update for smooth behavior
        setIsVisible(shouldShowNav)
        setLastScrollY(currentScrollY)
      }

      // Update other scroll states
      setIsScrolled(currentScrollY > 10)
      setScrollProgress(progress)

      const sections = navigationItems.map(item => item.section)
      let currentSection = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section
            break
          }
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            currentSection = section
          }
        }
      }

      if (pathname === '/' && !currentSection) {
        if (currentScrollY < 100) currentSection = 'hero'
      }

      setActiveSection(currentSection)
    }

    // Optimized throttling for better performance and consistency
    let ticking = false
    let timeoutId: NodeJS.Timeout
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        // Clear any pending timeout
        clearTimeout(timeoutId)
        
        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        
        // Set a fallback timeout to ensure updates aren't missed
        timeoutId = setTimeout(() => {
          if (ticking) {
            handleScroll()
            ticking = false
          }
        }, 50) // 50ms fallback following memory guidance
        
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    // Initialize scroll state
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      clearTimeout(timeoutId)
    }
  }, [lastScrollY, pathname, isVisible])

  const closeMenu = () => {
    setIsOpen(false)
  }
  
  const navigateToContact = () => {
    setIsOpen(false)
    router.push('/contact')
  }
  
  const toggleOpen = () => setIsOpen(prev => !prev)
  const onItemHover = (name: string | null) => setHoveredItem(name)

  const activeItemName = useMemo(() => {
    const pathMatch = navigationItems.find(item => item.href === pathname)
    if (pathMatch) return pathMatch.name
    const sectionMatch = navigationItems.find(item => item.section === activeSection)
    return sectionMatch ? sectionMatch.name : 'Home'
  }, [pathname, activeSection])

  return {
    isOpen,
    isScrolled,
    isVisible,
    hoveredItem,
    scrollProgress,
    activeItemName,
    pathname,
    toggleOpen,
    closeMenu,
    navigateToContact,
    onItemHover,
  }
}


