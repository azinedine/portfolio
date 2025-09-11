'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GlobalScrollIndicatorProps {
  className?: string
}

const sections = [
  { id: 'hero', nextId: 'why-choose', text: 'Discover more', isFooter: false },
  { id: 'why-choose', nextId: 'services', text: 'View my services', isFooter: false },
  { id: 'services', nextId: 'projects', text: 'See my work', isFooter: false },
  { id: 'projects', nextId: 'contact-cta', text: 'Get in touch', isFooter: false },
  { id: 'contact-cta', nextId: 'footer', text: 'View footer', isFooter: false },
  { id: 'footer', nextId: 'hero', text: 'Back to top', isFooter: true }
]

export function GlobalScrollIndicator({ className = "" }: GlobalScrollIndicatorProps) {
  const [currentSection, setCurrentSection] = useState<string>('hero')

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      // Clear previous timeout
      clearTimeout(scrollTimeout)
      
      // Add a small delay to account for scroll snapping animation
      scrollTimeout = setTimeout(() => {
        // Find the scroll container (the one with snap-y)
        const scrollContainer = document.querySelector('.snap-y')
        if (!scrollContainer) return

        const containerRect = scrollContainer.getBoundingClientRect()
        const containerTop = containerRect.top
        const containerHeight = containerRect.height
        const viewportCenter = containerTop + containerHeight / 2
        
        // Find which section is closest to the viewport center
        let closestSection = 'hero'
        let closestDistance = Infinity
        
        for (const section of sections) {
          const element = document.getElementById(section.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementCenter = rect.top + rect.height / 2
            const distance = Math.abs(elementCenter - viewportCenter)
            
            if (distance < closestDistance) {
              closestDistance = distance
              closestSection = section.id
            }
          }
        }
        
        setCurrentSection(closestSection)
      }, 100) // 100ms delay to account for snap animation
    }

    // Initial check
    handleScroll()

    // Listen for scroll events on the scroll container
    const scrollContainer = document.querySelector('.snap-y')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
    }
    
    // Also listen on window as fallback
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      clearTimeout(scrollTimeout)
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    const currentSectionData = sections.find(s => s.id === currentSection)
    if (!currentSectionData) return

    const { nextId } = currentSectionData
    
    if (nextId === 'hero') {
      // Scroll to top of the scroll container
      const scrollContainer = document.querySelector('.snap-y') as HTMLElement
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      // Scroll to next section using scrollIntoView with snap behavior
      const nextElement = document.getElementById(nextId)
      if (nextElement) {
        nextElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  }

  const currentSectionData = sections.find(s => s.id === currentSection)
  const text = currentSectionData?.text || 'Scroll to explore'
  const isFooter = currentSectionData?.isFooter || false

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "global-scroll-indicator bottom-4 text-center cursor-pointer sm:bottom-8",
        className
      )}
      onClick={handleClick}
      style={{ 
        pointerEvents: 'auto',
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999
      }}
    >
      {/* Conditional layout based on footer state */}
      {isFooter ? (
        // Footer layout: Icon at top, scroll indicator in middle, text at bottom
        <>
          {/* Chevron icon at top */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="mb-2 sm:mb-3"
          >
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-gray-400 dark:text-white/40 mx-auto" />
            </motion.div>
          </motion.div>

          {/* Scroll indicator container */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-white/30 rounded-full mx-auto relative backdrop-blur-sm bg-white/10 dark:bg-black/10"
          >
            {/* Scroll dot */}
            <motion.div
              animate={{ y: [16, 2, 16] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary-500 rounded-full mx-auto mt-2"
            />
          </motion.div>

          {/* Text at bottom */}
          <motion.p
            className="text-gray-600 dark:text-white/60 text-xs sm:text-sm font-medium mt-2 sm:mt-3"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {text}
          </motion.p>
        </>
      ) : (
        // Normal layout: Text at top, scroll indicator in middle, icon at bottom
        <>
          {/* Text at top */}
          <motion.p
            className="text-gray-600 dark:text-white/60 text-xs sm:text-sm font-medium mb-2 sm:mb-3"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {text}
          </motion.p>

          {/* Scroll indicator container */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-white/30 rounded-full mx-auto relative backdrop-blur-sm bg-white/10 dark:bg-black/10"
          >
            {/* Scroll dot */}
            <motion.div
              animate={{ y: [2, 16, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary-500 rounded-full mx-auto mt-2"
            />
          </motion.div>

          {/* Chevron icon at bottom */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="mt-2"
          >
            <motion.div
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-gray-400 dark:text-white/40 mx-auto" />
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}
