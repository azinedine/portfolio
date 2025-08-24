'use client'

import { easeOut, motion } from 'framer-motion'
import { Play, CheckCircle, Star, Users, Award, Target } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: "Precise Solutions",
    description: "Every project is crafted with precision and attention to detail, ensuring optimal performance and user experience."
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Delivering high-quality code and designs that exceed industry standards and client expectations."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is my priority. I work closely with clients to understand their vision and bring it to life."
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients across various industries and technologies."
  }
]

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function WhyChoose() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-600/10 to-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-primary-500/10 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-white">Why Developer Is</span>
                <span className="block gradient-text-primary">The Best Choice?</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Watch this one minute video so you understand why you should use our service!
              </p>
            </motion.div>

            {/* Reasons grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6 mb-12">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Video/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main video container */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
              {/* Video thumbnail - Replace with actual video thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center relative">
                {/* Placeholder content - team meeting scene */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary-900/20 to-blue-900/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60 text-sm">Team Collaboration</p>
                  </div>
                </div>

                {/* Play button overlay */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-10 w-20 h-20 bg-primary-600 hover:bg-primary-500 rounded-full flex items-center justify-center shadow-glow-lg transition-all duration-300 group"
                >
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </motion.button>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Video info overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass px-4 py-3 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Why Choose Our Service</p>
                        <p className="text-white/60 text-xs">Professional Development Process</p>
                      </div>
                    </div>
                    <span className="text-white/80 text-xs bg-black/20 px-2 py-1 rounded-full">1:24</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating testimonial card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <div>
                  <p className="text-white font-medium text-sm">John Doe</p>
                  <p className="text-white/60 text-xs">CEO, TechCorp</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "Outstanding work quality and exceptional communication throughout the project."
              </p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -left-6 glass p-4 rounded-2xl hidden lg:block"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-primary mb-1">98%</div>
                <div className="text-white/70 text-xs">Success Rate</div>
                <div className="flex justify-center gap-1 mt-2">
                  <div className="w-1 h-6 bg-primary-500 rounded-full"></div>
                  <div className="w-1 h-4 bg-primary-400 rounded-full mt-2"></div>
                  <div className="w-1 h-8 bg-primary-600 rounded-full"></div>
                  <div className="w-1 h-3 bg-primary-300 rounded-full mt-3"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}