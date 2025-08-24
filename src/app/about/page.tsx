'use client'

import { motion, easeOut } from 'framer-motion'
import { Code2, Zap, Users, Award, Download, MapPin, Calendar } from 'lucide-react'
import { AnimatedText } from '@/components/common/AnimatedText'

const stats = [
  { icon: Code2, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '30+' },
  { icon: Zap, label: 'Years Experience', value: '5+' },
  { icon: Award, label: 'Awards Won', value: '8' },
]

const skills = {
  frontend: [
    { name: 'React.js', level: 95, color: 'bg-blue-500' },
    { name: 'Next.js', level: 90, color: 'bg-gray-800' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Vue.js', level: 80, color: 'bg-green-500' },
    { name: 'React Native', level: 88, color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
  ],
  backend: [
    { name: 'Node.js', level: 90, color: 'bg-green-600' },
    { name: 'Laravel', level: 85, color: 'bg-red-500' },
    { name: 'PostgreSQL', level: 82, color: 'bg-blue-700' },
    { name: 'MongoDB', level: 78, color: 'bg-green-700' },
    { name: 'Redis', level: 75, color: 'bg-red-600' },
    { name: 'Docker', level: 80, color: 'bg-blue-500' },
  ],
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-20">
      {/* Hero Section */}
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
                About Me
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <AnimatedText text="Crafting Digital" className="text-dark-900 dark:text-white" />
              <br />
              <AnimatedText text="Experiences" className="gradient-text" delay={0.5} />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-dark-600 dark:text-dark-400 leading-relaxed max-w-3xl mx-auto"
            >
              I'm a passionate Full Stack Developer with over 5 years of experience creating modern, 
              scalable applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-950/20 dark:to-purple-950/20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-dark-900 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-2"
                >
                  {value}
                </motion.div>
                <p className="text-dark-600 dark:text-dark-400 font-medium">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Info & Image */}
      <section className="section-padding">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Placeholder for profile image */}
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Code2 className="w-24 h-24 text-white/80" />
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">💡</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
                My Journey
              </h2>
              
              <div className="space-y-6 text-dark-600 dark:text-dark-400">
                <p className="leading-relaxed">
                  My journey in software development started 5 years ago when I discovered my passion for creating 
                  digital solutions that make a real impact. Since then, I've had the privilege of working with 
                  startups, agencies, and established companies to bring their ideas to life.
                </p>
                
                <p className="leading-relaxed">
                  I specialize in full-stack development with a focus on React ecosystem, but I'm always eager to 
                  learn new technologies and tackle challenging problems. My approach combines technical expertise 
                  with creative problem-solving to deliver exceptional results.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span>Based in Your City, Country</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    <span>Available for freelance projects</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 btn-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Frontend Development
              </h3>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-dark-800 dark:text-dark-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-dark-500 dark:text-dark-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-dark-200 dark:bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Backend Development
              </h3>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-dark-800 dark:text-dark-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-dark-500 dark:text-dark-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-dark-200 dark:bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects 
              and collaborate with amazing people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View My Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}