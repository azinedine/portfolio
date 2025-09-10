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
          className="relative bg-white dark:bg-gray-900 rounded-3xl p-16 shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
        >
          <div className="absolute inset-0 bg-dots opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 dark:from-purple-600/20 dark:via-blue-600/20 dark:to-indigo-600/20" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              I&apos;m always excited to work on new challenges and bring innovative ideas to life. 
              Let&apos;s discuss how we can collaborate on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                onClick={handleStartProject}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(109, 74, 236, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleViewResume}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>View Resume</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
