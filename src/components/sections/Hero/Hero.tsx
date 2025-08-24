'use client'

import { useEffect, useState } from 'react'
import { motion, easeOut } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { AnimatedText } from '@/components/common/AnimatedText'

const techStack = [
  'React.js', 'Next.js', 'TypeScript', 'React Native', 'Vue.js', 
  'Node.js', 'Laravel', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-dark-950 dark:via-dark-900/50 dark:to-purple-950/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
          />
        ))}

        {/* Mouse follower gradient */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-radial from-primary-500/10 to-transparent rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: 'spring',
            stiffness: 20,
            damping: 10,
          }}
        />
      </div>

      <div className="container-responsive relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-dark-900 dark:text-white">Hi, I'm </span>
              <br />
              <AnimatedText
                text="Full Stack Developer"
                className="gradient-text"
              />
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I craft modern, scalable web and mobile applications using cutting-edge technologies. 
            Passionate about creating exceptional user experiences and robust backend solutions.
          </motion.p>

          {/* Tech stack */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-sm text-dark-500 dark:text-dark-500 mb-4 font-medium">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 border border-dark-200 dark:border-dark-700 rounded-full text-sm font-medium hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 group"
            >
              <span>View My Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 border border-dark-200 dark:border-dark-700 rounded-full shadow-sm hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600 transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-dark-400 dark:text-dark-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}