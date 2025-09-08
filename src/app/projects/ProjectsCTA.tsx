'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight, Download } from 'lucide-react'

export function ProjectsCTA() {
  const router = useRouter();

  const handleStartProject = () => {
    router.push('/contact');
  };

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/Zineddine_Amariche_Resume.pdf', '_blank');
  };

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
              onClick={handleStartProject}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={handleViewResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>View Resume</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
