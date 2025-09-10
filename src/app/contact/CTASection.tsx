"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { viewportVariants, animationConfig } from "./animations";

const CTASection = () => {
  return (
    <section 
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={viewportVariants}
          initial="hidden"
          whileInView="visible"
          viewport={animationConfig.viewport}
          className="text-center"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-dots opacity-10" aria-hidden="true" />
            
            {/* Gradient overlay for dark mode */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 dark:from-purple-600/20 dark:via-blue-600/20 dark:to-indigo-600/20" 
              aria-hidden="true"
            />
            
            <div className="relative z-10">
              <motion.h2 
                id="cta-heading"
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Ready to Start Your Project?
              </motion.h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Don&apos;t wait to bring your ideas to life. Let&apos;s schedule a free consultation to discuss your project and how I can help make it a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <motion.a
                  href="tel:+213540128550"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(109, 74, 236, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
                  aria-label="Call now at +213 540 128 550"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now
                </motion.a>
                <motion.a
                  href="mailto:amarichezineddine@gmail.com"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                  aria-label="Send email to amarichezineddine@gmail.com"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  Send Email
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;