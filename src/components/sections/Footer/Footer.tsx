'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: Mail, href: 'mailto:your@email.com', label: 'Email', color: 'hover:text-red-500' },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-dark-950 border-t border-dark-200 dark:border-dark-800">
      <div className="container-responsive section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <Code2 className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-dark-900 dark:text-white">
                Developer
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-dark-600 dark:text-dark-400 mb-6 max-w-md"
            >
              Full Stack Developer passionate about creating modern, scalable, and user-friendly applications. 
              Let's build something amazing together.
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 text-dark-500 dark:text-dark-500 ${color} transition-all duration-200 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-dark-900 dark:text-white mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-dark-900 dark:text-white mb-4"
            >
              Get in Touch
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <p className="text-dark-600 dark:text-dark-400">
                Ready to start your next project?
              </p>
              <motion.a
                href="mailto:your@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block btn-primary text-sm"
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-dark-200 dark:border-dark-800 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-dark-500 dark:text-dark-500 text-sm mb-4 sm:mb-0">
            © {currentYear} Developer Portfolio. All rights reserved.
          </p>
          
          <motion.div
            className="flex items-center space-x-1 text-sm text-dark-500 dark:text-dark-500"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            </motion.div>
            <span>and</span>
            <Code2 className="w-4 h-4 text-primary-500" />
            <span>by Developer</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}