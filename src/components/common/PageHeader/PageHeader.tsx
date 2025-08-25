'use client'

import { easeOut, motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  showBackButton?: boolean
  showBreadcrumb?: boolean
  breadcrumbItems?: Array<{
    label: string
    href: string
  }>
  backgroundPattern?: 'dots' | 'grid' | 'none'
  variant?: 'default' | 'centered' | 'minimal'
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

export function PageHeader({
  title,
  subtitle,
  description,
  badge,
  showBackButton = false,
  showBreadcrumb = false,
  breadcrumbItems = [],
  backgroundPattern = 'dots',
  variant = 'default'
}: PageHeaderProps) {
  const isMinimal = variant === 'minimal'
  const isCentered = variant === 'centered'

  return (
    <section className={`relative ${isMinimal ? 'pt-24 pb-12' : 'pt-32 pb-20'} overflow-hidden`}>
      {/* Background Elements */}
      {!isMinimal && (
        <div className="absolute inset-0">
          {backgroundPattern === 'dots' && (
            <div className="absolute inset-0 bg-dots opacity-20" />
          )}
          {backgroundPattern === 'grid' && (
            <div className="absolute inset-0 bg-grid opacity-10" />
          )}
          
          {/* Gradient orbs */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-600/10 to-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-primary-500/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="container-responsive relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${isCentered ? 'text-center' : ''} ${isMinimal ? 'max-w-4xl' : 'max-w-5xl'} ${isCentered ? 'mx-auto' : ''}`}
        >
          {/* Back Button */}
          {showBackButton && (
            <motion.div variants={itemVariants} className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
            </motion.div>
          )}

          {/* Breadcrumb */}
          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <motion.nav variants={itemVariants} className="mb-6" aria-label="Breadcrumb">
              <div className="flex items-center gap-2 text-sm">
                <Link
                  href="/"
                  className="flex items-center gap-1 text-white/60 hover:text-white transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                {breadcrumbItems.map((item, index) => (
                  <div key={item.href} className="flex items-center gap-2">
                    <span className="text-white/40">/</span>
                    <Link
                      href={item.href}
                      className={`transition-colors ${
                        index === breadcrumbItems.length - 1
                          ? 'text-primary-400 font-medium'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.nav>
          )}

          {/* Badge */}
          {badge && (
            <motion.div variants={itemVariants} className={`mb-6 ${isCentered ? '' : ''}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/20 border border-primary-500/30 text-primary-300 rounded-full text-sm font-medium backdrop-blur-sm">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className={`font-bold leading-tight ${
              isMinimal 
                ? 'text-3xl md:text-4xl' 
                : 'text-4xl md:text-5xl lg:text-6xl'
            }`}>
              {subtitle ? (
                <>
                  <span className="block text-white">{subtitle}</span>
                  <span className="block gradient-text-primary">{title}</span>
                </>
              ) : (
                <span className="gradient-text-primary">{title}</span>
              )}
            </h1>
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className={`leading-relaxed ${
                isMinimal
                  ? 'text-base md:text-lg text-white/80 max-w-2xl'
                  : 'text-lg md:text-xl text-white/80 max-w-3xl'
              } ${isCentered ? 'mx-auto' : ''}`}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Decorative elements */}
      {!isMinimal && (
        <>
          <div className="absolute top-20 left-10 w-6 h-6 border border-primary-400/30 rounded rotate-45 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-0 w-8 h-8 border border-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </>
      )}
    </section>
  )
}