'use client'

import { easeOut, motion } from 'framer-motion'
import { Code2, Palette, Camera, Video, Smartphone, Database, X } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: "Development",
    description: "Create a platform with the best and coolest quality from us.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    description: "We provide UI/UX Design services, and of course with the best quality.",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-500/20 to-rose-500/10"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "We provide Mobile App development services with the best quality.",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/20 to-emerald-500/10"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "We provide Photography services, and of course with the best quality.",
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-500/20 to-violet-500/10"
  },
  {
    icon: Video,
    title: "Videography",
    description: "Create a platform with the best and coolest quality from us.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/20 to-red-500/10"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "We provide Backend development services with the best quality.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-500/20 to-blue-500/10"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -5 }}
    className="card-service group cursor-pointer"
  >
    {/* Service Icon */}
    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
      <service.icon className="w-8 h-8 text-white" />
    </div>

    {/* Service Title */}
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
      {service.title}
    </h3>

    {/* Service Description */}
    <p className="text-white/70 leading-relaxed mb-6">
      {service.description}
    </p>

    {/* Hover indicator */}
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-12 h-12 mx-auto bg-primary-600 rounded-full flex items-center justify-center">
        <motion.div
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          <X className="w-5 h-5 text-white rotate-45" />
        </motion.div>
      </div>
    </div>
  </motion.div>
)

export function Services() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-600/10 to-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-primary-500/10 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-500"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <div className="w-8 h-px bg-primary-500"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-white">The Service I</span>
            <span className="block gradient-text-primary">Provide For You</span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive digital solutions tailored to your business needs, 
            from development to design and beyond.
          </p>

          {/* Close button in top right (inspired by Braivexa) */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-0 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-8">
            {`Ready to start your project? Let's discuss your requirements.`}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Get Started Today
          </motion.button>
        </motion.div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-6 h-6 border border-primary-400/30 rounded rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-0 w-8 h-8 border border-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-32 right-32 w-3 h-3 bg-yellow-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  )
}