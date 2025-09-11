"use client";

import { motion } from "framer-motion";
import { memo, useMemo, useCallback } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Plus,
  Send,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Memoize contact methods data to prevent recreation
const contactMethods = [
  {
    icon: Mail,
    title: "Email Me",
    description: "a.zineddine@dev.com",
    action: "Send Email",
    color: "from-red-500 to-pink-500",
    href: "mailto:amarichezineddine@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Me",
    description: "+213 (540) 12 85 50",
    action: "Call Now",
    color: "from-green-500 to-emerald-500",
    href: "tel:+213540128550",
  },
  {
    icon: MessageCircle,
    title: "Let's Chat",
    description: "Available 24/7",
    action: "Start Chat",
    color: "from-blue-500 to-cyan-500",
    href: "https://www.facebook.com/amzinedine",
  },
]

export const ContactCTA = memo(() => {
  const router = useRouter();

  const handleContactClick = useCallback(() => {
    router.push('/contact');
  }, [router]);


  return (
    <section 
      id="contact-cta" 
      className="relative min-h-screen py-16 sm:py-20 lg:py-24 flex items-center justify-center snap-center"
      style={{ 
        scrollSnapAlign: 'center',
        scrollSnapStop: 'always',
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      {/* Background elements - Reduced complexity */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-primary-600/5 to-blue-600/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-primary-500/5 rounded-full blur-2xl" />

      <div className="container-responsive relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
          >
            <span className="block text-gray-900 dark:text-white">Ready to Start</span>
            <span className="block gradient-text-primary">Your Project?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/80 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto"
          >
            {`Ready to transform your ideas into reality? Get in touch today and let's create something extraordinary together.`}
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {contactMethods.map((method, index) => (
              <ContactMethodCard key={method.title} method={method} index={index} />
            ))}
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg group flex items-center mx-auto text-sm sm:text-base lg:text-lg min-h-[48px]"
            >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:translate-x-0.5 transition-transform" />
                <span>{`Let's Work Together`}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

    
        </motion.div>
      </div>

      {/* Floating decorative elements - Reduced complexity */}
      <div className="absolute top-32 right-20 w-4 h-4 border border-primary-400/20 rounded rotate-45" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-400/20 rounded-full" />

      {/* Plus decorations - Optimized */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 text-primary-400/20"
      >
        <Plus className="w-4 h-4" />
      </motion.div>

    </section>
  );
})

ContactCTA.displayName = 'ContactCTA'

const ContactMethodCard = memo(({ method, index }: {
  method: typeof contactMethods[0]
  index: number
}) => {
  const cardVariants = useMemo(() => ({
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.02, y: -2 }
  }), [])
  
  return (
    <motion.div
      {...cardVariants}
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.08, duration: 0.3 }}
      whileHover={cardVariants.hover}
      className="group"
    >
      <div className="bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:border-gray-300/50 dark:hover:border-white/20 p-4 sm:p-6 rounded-2xl text-center hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
        >
          <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>

        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
          {method.title}
        </h3>
        <p className="text-gray-600 dark:text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">
          {method.description}
        </p>

        <motion.a
          href={method.href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-xs sm:text-sm hover:gap-3 transition-all"
        >
          <span>{method.action}</span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </motion.a>
      </div>
    </motion.div>
  )
})

ContactMethodCard.displayName = 'ContactMethodCard'
