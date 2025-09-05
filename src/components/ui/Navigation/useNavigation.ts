'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { navigationItems } from './navigationItems'
export type ActiveItemName = string

type UseNavigationReturn = {
  isOpen: boolean
  isScrolled: boolean
  isVisible: boolean
  hoveredItem: string | null
  scrollProgress: number
  activeItemName: ActiveItemName
  toggleOpen: () => void
  closeMenu: () => void
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(currentScrollY / docHeight, 1) * 100

      const scrollDifference = Math.abs(currentScrollY - lastScrollY)

      if (scrollDifference > 5) {
        const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 100
        const isAtTop = currentScrollY < 100

        setIsVisible(isAtTop || !isScrollingDown)
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
    handleScroll()
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [lastScrollY, pathname])

  const closeMenu = () => setIsOpen(false)
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
    toggleOpen,
    closeMenu,
    onItemHover,
  }
}


