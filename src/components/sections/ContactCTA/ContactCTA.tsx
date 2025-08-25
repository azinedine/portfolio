'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageCircle, Plus } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/20 via-transparent to-blue-900/20" />
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-primary-400/20 rounded-full"
        />
        
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-cyan-400/20 rounded-lg"
        />

        {/* Plus decorations */}
        <Plus className="absolute top-32 left-1/4 w-8 h-8 text-primary-400/30 animate-pulse" />
        <Plus className="absolute bottom-32 right-1/4 w-6 h-6 text-blue-400/30 animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Dots */}
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary-500/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-10 w-3 h-3 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="block text-white">Contact us for the service</span>
            <span className="block gradient-text-primary">you want to use</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Ready to transform your ideas into reality? Get in touch with us today and let's create something extraordinary together.
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "hello@developer.com",
                action: "Send Email",
                color: "from-red-500 to-pink-500",
                href: "mailto:hello@developer.com"
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "+1 (555) 123-4567",
                action: "Call Now",
                color: "from-green-500 to-emerald-500",
                href: "tel:+15551234567"
              },
              {
                icon: MessageCircle,
                title: "Chat With Us",
                description: "Available 24/7",
                action: "Start Chat",
                color: "from-blue-500 to-cyan-500",
                href: "#"
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="glass p-8 rounded-3xl text-center hover:bg-white/15 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-white/70 mb-4">{method.description}</p>
                  
                  <motion.a
                    href={method.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary-400 font-medium hover:gap-3 transition-all"
                  >
                    <span>{method.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mb-16 flex justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center   text-lg px-12 py-4 group"
            >
              <span>Contact us</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Bottom decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-8 opacity-50"
          >
            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="hidden md:block w-24 h-px bg-gradient-to-l from-transparent via-white to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-12 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10"
      />

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-12 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-primary-500/20 rounded-full backdrop-blur-sm border border-white/10"
      />
    </section>
  )
}