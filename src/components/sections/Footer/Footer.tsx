"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/azinedine",
    label: "GitHub",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/zineddineamariche/",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    href: "mailto:amarichezineddine@gmail.com",
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
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToServices = () => {
    if (pathname !== '/') {
      // If not on home page, navigate to home with hash
      router.push('/#services');
    } else {
      // If already on home page, just scroll to services
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer 
      id="footer"
      className="relative bg-gray-50 dark:bg-background-primary border-t border-gray-200 dark:border-white/10 min-h-screen flex items-center justify-center snap-center"
      style={{ 
        scrollSnapAlign: 'center',
        scrollSnapStop: 'always',
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-primary-600/5 to-blue-600/5 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                {/* Logo */}
                <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4 sm:mb-6 group">
                  <div className="relative">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="w-11 h-11 rounded-full flex items-center justify-center p-2 bg-primary-900 dark:bg-transparent"
                      style={{ willChange: 'transform' }}
                    >
                      <Image 
                        src="/logo.png" 
                        alt="Logo" 
                        width={44} 
                        height={44}
                        className="transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      initial={false}
                    />

                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ 
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatDelay: 1
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-purple-300" />
                    </motion.div>
                  </div>
                  <div className="flex flex-col">
                    <motion.span 
                      className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-primary-600 dark:from-white dark:via-gray-100 dark:to-primary-200 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      A.ZINEDDINE
                    </motion.span>
                    <span className="text-xs text-gray-500 dark:text-white/50 font-medium tracking-wider">
                      Software Engineer
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-6 text-sm sm:text-base max-w-sm mx-auto sm:mx-0">
                  Full Stack Developer passionate about creating modern,
                  scalable, and user-friendly applications.
                  {`Let's build something amazing together.`}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 sm:p-3 bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl text-gray-600 dark:text-white/60 ${color} transition-all duration-200 hover:bg-gray-200/80 dark:hover:bg-white/10 group`}
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Services
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <button
                        onClick={navigateToServices}
                        className="text-gray-600 dark:text-white/60 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 inline-block text-sm sm:text-base text-left hover:translate-x-1"
                      >
                        {service}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Support */}
            <div className="text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Support
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-600 dark:text-white/60 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 inline-block text-sm sm:text-base"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-3 sm:space-y-4 mb-6">
                  <p className="text-gray-600 dark:text-white/70 text-sm sm:text-base">
                    Ready to start your next project?
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:amarichezineddine@gmail.com"
                      className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm sm:text-base break-all"
                    >
                      a.zineddine@dev.com
                    </a>
                    <a
                      href="tel:+2130540128550"
                      className="block text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base"
                    >
                      +213 540 128 550
                    </a>
                  </div>
                </div>

                {isClient && pathname !== "/contact" && (
                  <button
                    className="btn-primary text-sm px-6 py-3 mx-auto sm:mx-0 hover:scale-105 active:scale-95 transition-transform duration-200"
                    onClick={() => router.push("/contact")}
                  >
                    {`Let's Talk`}
                  </button>
                )}
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
          className="py-6 sm:py-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
        >
          <p className="text-gray-500 dark:text-white/50 text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
            © {currentYear} A.ZINEDDINE. All rights reserved.
          </p>

          <div className="flex items-center gap-4 md:gap-6 order-1 md:order-2 flex-wrap justify-center">
            <motion.div
              className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 dark:text-white/50"
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
                <Heart
                  className="w-3 h-3 sm:w-4 sm:h-4 text-red-400"
                  fill="currentColor"
                />
              </motion.div>
              <span className="hidden xs:inline">| A.ZINEDDINE</span>
              <span className="xs:hidden">| AZ</span>
            </motion.div>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 sm:p-3 bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl text-gray-600 dark:text-white/60 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-200/80 dark:hover:bg-white/10 transition-all duration-200 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-16 sm:bottom-20 left-10 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 border border-primary-400/20 rounded rotate-45 animate-pulse hidden lg:block" />
      <div
        className="absolute top-16 sm:top-20 right-10 sm:right-20 w-5 h-5 sm:w-6 sm:h-6 bg-cyan-400/20 rounded-full animate-pulse hidden lg:block"
        style={{ animationDelay: "1s" }}
      />
    </footer>
  );
}
