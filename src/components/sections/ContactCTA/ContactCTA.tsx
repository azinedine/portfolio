"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Plus,
  Send,
  Link,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function ContactCTA() {
  const router = useRouter();
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-600/10 to-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-primary-500/10 rounded-full blur-3xl" />

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
            <span className="block text-white">Ready to Start</span>
            <span className="block gradient-text-primary">Your Project?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            {`Ready to transform your ideas into reality? Get in touch today and let's create something extraordinary together.`}
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
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
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                  >
                    <method.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {method.description}
                  </p>

                  <motion.a
                    href={method.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm hover:gap-3 transition-all"
                  >
                    <span>{method.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
            className="mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg group flex items-center mx-auto"
            >
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-0.5 transition-transform" />
                <span className="text-lg">{`Let's Work Together`}</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24h", label: "Response Time" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
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
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-8 h-8 border border-primary-400/30 rounded rotate-45 animate-pulse" />
      <div
        className="absolute bottom-32 left-20 w-6 h-6 bg-cyan-400/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-10 w-4 h-4 bg-pink-400/50 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Plus decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 text-primary-400/30"
      >
        <Plus className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-32 text-blue-400/30"
      >
        <Plus className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
