'use client'

import { easeOut, motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

const techStack = [
  'React.js', 'Next.js', 'TypeScript', 'React Native', 'Vue.js', 'Node.js'
]

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

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-left"
    >
      {/* Greeting Badge */}
      <motion.div variants={itemVariants} className="mb-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary-500/20 to-blue-500/20 border border-primary-400/30 text-primary-200 rounded-full text-sm font-medium backdrop-blur-sm"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <span>{`Hello, I'm A.ZINEDDINE`}</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Main heading */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
          <motion.span 
            className="block text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Full Stack
          </motion.span>
          <motion.span 
            className="block gradient-text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Developer
          </motion.span>
          <motion.span 
            className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            & Digital Creator
          </motion.span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
      >
        {`I'm a passionate `}
        <span className="text-primary-300 font-semibold">Full Stack Developer</span>{' '}
        with 4+ years of experience in creating{' '}
        <span className="text-white font-semibold">modern web applications</span>,{' '}
        <span className="text-cyan-300 font-semibold">mobile apps</span>, and{' '}
        <span className="text-green-300 font-semibold">scalable digital solutions</span>. 
        I transform ideas into reality using cutting-edge technologies.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 mb-12"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold px-8 py-4 rounded-2xl shadow-glow transition-all duration-300"
        >
          <div className="flex items-center justify-center gap-3">
            <span>{`Let's Work Together`}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/15"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/60 transition-all duration-300">
              <Play className="w-4 h-4 ml-0.5" />
            </div>
          </div>
          <span>View My Work</span>
        </motion.button>
      </motion.div>

      {/* Tech stack */}
      <motion.div variants={itemVariants} className="space-y-4">
        <p className="text-sm text-white/60 font-medium tracking-wide uppercase">
          Technologies I Specialize In
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 rounded-lg text-sm font-medium hover:bg-white/15 hover:border-primary-400/40 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}