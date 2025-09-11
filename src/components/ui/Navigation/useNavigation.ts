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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(currentScrollY / docHeight, 1) * 100

      // Improved scroll direction detection with minimum scroll threshold
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)
      const minimumScrollThreshold = 10 // Minimum scroll distance to trigger hide/show

      if (scrollDifference > minimumScrollThreshold) {
        const isScrollingDown = currentScrollY > lastScrollY
        const isAtTop = currentScrollY < 50 // Show navbar when very close to top
        const isNearBottom = currentScrollY > docHeight - 100 // Show navbar when near bottom

        // Show navigation when:
        // 1. At the top of the page
        // 2. Scrolling up
        // 3. Near the bottom of the page
        setIsVisible(isAtTop || !isScrollingDown || isNearBottom)
        setLastScrollY(currentScrollY)
      }

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

    // Optimized throttling for better performance (following memory guidance)
    let ticking = false
    let lastCallTime = 0
    const throttleDelay = 16 // ~60fps for smooth navigation behavior
    
    const throttledHandleScroll = () => {
      const now = Date.now()
      if (!ticking && now - lastCallTime >= throttleDelay) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
          lastCallTime = now
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [lastScrollY, pathname])

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


