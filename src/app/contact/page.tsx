'use client'

import { useState } from 'react'
import { motion, easeOut } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Clock, CheckCircle } from 'lucide-react'
import { AnimatedText } from '@/components/common/AnimatedText'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@developer.com',
    href: 'mailto:hello@developer.com',
    color: 'text-red-500'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'text-green-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
    color: 'text-blue-500'
  },
  {
    icon: Clock,
    label: 'Timezone',
    value: 'PST (UTC-8)',
    href: '#',
    color: 'text-purple-500'
  }
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/yourusername',
    color: 'hover:text-blue-400'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      budget: ''
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <AnimatedText text="Let's Create" className="text-dark-900 dark:text-white" />
              <br />
              <AnimatedText text="Something Amazing" className="gradient-text" delay={0.5} />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-dark-600 dark:text-dark-400 leading-relaxed max-w-3xl mx-auto"
            >
              Have a project in mind or want to collaborate? I'd love to hear about your ideas and discuss how we can work together to bring them to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Ready to start your project? Feel free to reach out through any of these channels, and I'll get back to you within 24 hours.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-dark-900 rounded-xl border border-dark-200 dark:border-dark-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all group"
                  >
                    <div className={`w-12 h-12 ${color} bg-gray-100 dark:bg-dark-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-500 font-medium">
                        {label}
                      </p>
                      <p className="text-dark-900 dark:text-white font-semibold">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 rounded-lg text-dark-500 dark:text-dark-500 ${color} transition-all hover:border-primary-300 dark:hover:border-primary-600 shadow-sm hover:shadow-md`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-200 dark:border-dark-800 p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-6">
                  Send Me a Message
                </h2>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p className="text-green-800 dark:text-green-300 font-medium">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject and Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-colors"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-colors resize-none"
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-sm text-dark-500 dark:text-dark-500 text-center">
                    I typically respond within 24 hours. For urgent matters, feel free to call me directly.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              Quick answers to common questions about working with me
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most web applications take 4-8 weeks from start to finish. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. I maintain regular communication throughout the project lifecycle."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in React.js, Next.js, React Native, Vue.js, Node.js, and Laravel. I'm always learning new technologies to provide the best solutions for each project."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, I offer various support packages including bug fixes, feature updates, and maintenance. We can discuss the best support option for your needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 border border-dark-200 dark:border-dark-800"
              >
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Don't wait to bring your ideas to life. Let's schedule a free consultation to discuss your project and how I can help make it a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:hello@developer.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}