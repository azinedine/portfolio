'use client'

import { useRef } from 'react'
import { easeOut, motion, useInView } from 'framer-motion'
import {
  Play,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Shield,
} from 'lucide-react'

const reasons = [
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "Delivering high-quality code and designs that exceed industry standards and client expectations.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Track record of successful projects and satisfied clients across various industries and technologies.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Quick turnaround times without compromising on quality. Your project delivered when you need it.",
  },
  {
    icon: Shield,
    title: "Reliable Support",
    description:
      "Ongoing maintenance and support to ensure your project continues to perform at its best.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
}

export function WhyChoose() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-600/10 to-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-primary-500/10 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block text-gray-900 dark:text-white">Why My Services</span>
            <span className="block gradient-text-primary">
              The Best Choice?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/80 leading-relaxed max-w-lg">
            Discover what makes working with me different and why clients choose
            my development services.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
          {/* Left side - Content */}
          <Content isInView={isInView} />
          {/* Right side - Video */}
          <Video isInView={isInView} />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 10px 40px rgba(109, 74, 236, 0.3),
              0 0 0 0 rgba(109, 74, 236, 0.4);
          }
          50% {
            box-shadow: 0 10px 40px rgba(109, 74, 236, 0.3),
              0 0 0 10px rgba(109, 74, 236, 0);
          }
          100% {
            box-shadow: 0 10px 40px rgba(109, 74, 236, 0.3),
              0 0 0 0 rgba(109, 74, 236, 0);
          }
        }
      `}</style>
    </section>
  )
}

const Content = ({
  isInView,
}: {
  isInView: boolean
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="order-2 lg:order-1"
    >
      {/* Reasons grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 gap-3 sm:gap-4 mb-8 sm:mb-12"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="flex gap-3 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <reason.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-primary-200 transition-colors">
                {reason.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

const Video = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.9, y: 30 }
      }
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative order-1 lg:order-2"
    >
      {/* Main video container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
        {/* Video thumbnail */}
        <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center relative group">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-2 sm:inset-4 bg-gradient-to-br from-primary-900/30 to-blue-900/30 rounded-xl sm:rounded-2xl" />
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-12 h-12 sm:w-20 sm:h-20 border-2 border-primary-500/30 rounded-full" />
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-16 sm:h-16 border-2 border-blue-500/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 border border-white/10 rounded-full" />
          </div>

          {/* Center content */}
          <div className="relative z-10 text-center">
            <div className="mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
              </div>
              <p className="text-white/60 text-xs sm:text-sm font-medium">
                Development Process
              </p>
            </div>
          </div>

          {/* Play button overlay */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-full flex items-center justify-center shadow-2xl shadow-primary-500/30 transition-all duration-300 group-hover:shadow-primary-500/50"
            style={{
              boxShadow:
                "0 10px 40px rgba(109, 74, 236, 0.3), 0 0 0 0 rgba(109, 74, 236, 0.4)",
              animation: "pulse-ring 2s infinite",
            }}
          >
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1" />
          </motion.button>

          {/* Decorative dots */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
          <div
            className="absolute top-3 right-3 sm:top-6 sm:right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Video info overlay */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
          <div className="glass px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-xs sm:text-sm">
                    Why Choose A.ZINEDDINE
                  </p>
                  <p className="text-white/60 text-xs">
                    Professional Development Journey
                  </p>
                </div>
              </div>
              <span className="text-white/80 text-xs bg-black/30 px-2 py-1 rounded-full font-medium">
                2:15
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating testimonial card */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={
          isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 30, y: 20 }
        }
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl max-w-xs hidden md:block backdrop-blur-md border border-white/20"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
            MW
          </div>
          <div>
            <p className="text-white font-medium text-xs sm:text-sm">Aimen Bouaziz</p>
            <p className="text-white/60 text-xs">Startup Founder</p>
          </div>
        </div>
        <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-2">
          {`"Exceptional developer who delivered beyond expectations. Highly recommended!"`}
        </p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
          ))}
        </div>
      </motion.div>

      {/* Floating success rate card */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={
          isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -30, y: -20 }
        }
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl hidden md:block backdrop-blur-md border border-white/20"
      >
        <div className="text-center">
          <div className="text-lg sm:text-2xl font-bold gradient-text-primary mb-1">
            96%
          </div>
          <div className="text-white/70 text-xs font-medium mb-2">
            Success Rate
          </div>
          <div className="flex justify-center gap-1">
            <div className="w-1 h-4 sm:h-6 bg-gradient-to-t from-primary-600 to-primary-400 rounded-full"></div>
            <div className="w-1 h-3 sm:h-4 bg-gradient-to-t from-primary-500 to-primary-300 rounded-full mt-1 sm:mt-2"></div>
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-t from-primary-700 to-primary-500 rounded-full"></div>
            <div className="w-1 h-2 sm:h-3 bg-gradient-to-t from-primary-400 to-primary-200 rounded-full mt-2 sm:mt-3"></div>
            <div className="w-1 h-4 sm:h-5 bg-gradient-to-t from-primary-600 to-primary-400 rounded-full mt-0.5 sm:mt-1"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}