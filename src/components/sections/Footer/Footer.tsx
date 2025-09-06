"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-white" },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    href: "mailto:hello@developer.com",
    label: "Email",
    color: "hover:text-primary-400",
  },
];

const quickLinks = [
  { name: "Support", href: "/support" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms and Conditions", href: "/terms" },
];

const services = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Backend Development",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background-primary border-t border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-600/5 to-blue-600/5 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/logo.png" alt="Logo" width={44} height={44} />
                  </div>
                  <div className="flex flex-col">

                  <span className="text-2xl font-bold gradient-text-primary">
                    A.ZINEDDINE
                  </span>
                  <span className="text-xs text-white/50 font-medium tracking-wider">
                    Software Engineer
                  </span>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed mb-6">
                  Full Stack Developer passionate about creating modern,
                  scalable, and user-friendly applications.
                  {`Let's build something amazing together.`}
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 glass rounded-xl text-white/60 ${color} transition-all duration-200 hover:bg-white/10 group`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">
                  Services
                </h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-white/60 hover:text-primary-400 transition-all duration-200 inline-block"
                      >
                        {service}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Support */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">
                  Support
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-white/60 hover:text-primary-400 transition-all duration-200 inline-block"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4 mb-6">
                  <p className="text-white/70">
                    Ready to start your next project?
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:amarichezineddine@gmail.com"
                      className="block text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      a.zineddine@dev.com
                    </a>
                    <a
                      href="tel:+2130540128550"
                      className="block text-white/60 hover:text-white transition-colors"
                    >
                      +213 540 128 550{" "}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-sm px-6 py-3"
                >
                  {`Let's Talk`}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-white/50 text-sm">
            © {currentYear} Braivexa. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <motion.div
              className="flex items-center space-x-2 text-sm text-white/50"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
              </motion.div>
              <span>| A.ZINEDDINE</span>
            </motion.div>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-xl text-white/60 hover:text-primary-400 hover:bg-white/10 transition-all duration-200 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 left-20 w-8 h-8 border border-primary-400/20 rounded rotate-45 animate-pulse hidden lg:block" />
      <div
        className="absolute top-20 right-20 w-6 h-6 bg-cyan-400/20 rounded-full animate-pulse hidden lg:block"
        style={{ animationDelay: "1s" }}
      />
    </footer>
  );
}
