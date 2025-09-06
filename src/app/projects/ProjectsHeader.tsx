'use client'

import { motion, Variants } from 'framer-motion'
import { AnimatedText } from '@/components/common/AnimatedText'

type ProjectsHeaderProps = {
  containerVariants: Variants
  itemVariants: Variants
}

export function ProjectsHeader({ containerVariants, itemVariants }: ProjectsHeaderProps) {
  return (
    <section className="section-padding">
      <div className="container-responsive">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
              My Work
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <AnimatedText
              text="Featured"
              className="text-dark-900 dark:text-white"
            />
            <br />
            <AnimatedText
              text="Projects"
              className="gradient-text"
              delay={0.5}
            />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-dark-600 dark:text-dark-400 leading-relaxed max-w-3xl mx-auto"
          >
            A showcase of my recent work, featuring web applications, mobile
            apps, and innovative solutions built with modern technologies.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
