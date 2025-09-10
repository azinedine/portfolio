'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useNavigation } from './useNavigation'
import { Logo } from './Logo'
import { DesktopNav } from './DesktopNav'
import { CtaButton } from './CtaButton'
import { MenuToggle } from './MenuToggle'
import { MobileNav } from './MobileNav'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Navigation() {
  const {
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
  } = useNavigation()

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
            ? 'bg-white/80 dark:bg-black/50 backdrop-blur-2xl shadow-2xl shadow-primary-500/10 border-b border-gray-200/50 dark:border-gray-800/50'
            : 'bg-white/30 dark:bg-white/3 backdrop-blur-xl shadow-xl'
        )}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Logo onClick={closeMenu} />

            <DesktopNav
              activeItemName={activeItemName}
              hoveredItem={hoveredItem}
              onItemHover={onItemHover}
            />

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              {pathname !== '/contact' && (
                <CtaButton onClick={navigateToContact} />
              )}
              <MenuToggle isOpen={isOpen} onToggle={toggleOpen} />
            </div>
          </div>
        </nav>
      </motion.header>

      <MobileNav isOpen={isOpen} activeItemName={activeItemName} onClose={closeMenu} />
    </>
  )
}