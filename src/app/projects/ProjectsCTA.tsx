'use client'

import { motion } from 'framer-motion'

export function ProjectsCTA() {
  return (
    <section className="section-padding">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {`I'm always excited to work on new challenges and bring innovative ideas to life. 
            Let's discuss how we can collaborate on your next project.`}
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
              View Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
