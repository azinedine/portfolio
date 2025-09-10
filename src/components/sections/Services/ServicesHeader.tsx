'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const decorativeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

export const ServicesHeader = memo(() => {
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-8 sm:mb-10"
    >
      {/* Decorative elements */}
      <motion.div 
        variants={decorativeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center justify-center gap-4 mb-4 sm:mb-5"
      >
        <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-primary-500"></div>
        <motion.div 
          className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="w-6 sm:w-8 h-px bg-primary-500"></div>
        <motion.div 
          className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-primary-500"></div>
      </motion.div>

      {/* Main heading with structured data */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
        <span className="block text-gray-900 dark:text-white">The Services I</span>
        <span className="block gradient-text-primary">Provide For You</span>
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-600 dark:text-white/80 max-w-2xl mx-auto leading-relaxed">
        Comprehensive digital solutions tailored to your business needs.
      </p>

      {/* Hidden structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Development Services",
            "description": "Comprehensive digital solutions including web development, mobile development, UI/UX design, backend development, and technical consulting",
            "provider": {
              "@type": "Person",
              "name": "A.ZINEDDINE",
              "jobTitle": "Full Stack Developer"
            },
            "serviceType": [
              "Web Development",
              "Mobile Development", 
              "UI/UX Design",
              "Backend Development",
              "Digital Marketing",
              "Technical Consulting"
            ]
          })
        }}
      />
    </motion.header>
  )
})

ServicesHeader.displayName = 'ServicesHeader'
