"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { AnimatedText } from "@/components/common/AnimatedText";
import { contactInfo, socialLinks, faqs, FormData } from "./data";
import { containerVariants, itemVariants, slideInLeft, slideInRight } from "./animations";
import ContactInfoCard from "./ContactInfoCard";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import FAQCard from "./FAQCard";

export default function ContactPage() {
  const handleFormSubmit = async (formData: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30 pt-20">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold text-sm">
                <Mail className="w-4 h-4" />
                Get In Touch
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <AnimatedText text="Let's Create" className="text-gray-900 dark:text-white" />
              <br />
              <AnimatedText text="Something Amazing" className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent" delay={0.5} />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Have a project in mind or want to collaborate? I&apos;d love to hear about your ideas and discuss how we can work together to bring them to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="lg:col-span-1"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Ready to start your project? Feel free to reach out through any of these channels, and I&apos;ll get back to you within 24 hours.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact) => (
                  <ContactInfoCard key={contact.label} contact={contact} />
                ))}
              </div>

              {/* Social Links */}
              <SocialLinks socialLinks={socialLinks} />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <ContactForm onSubmit={handleFormSubmit} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              Quick answers to common questions about working with me
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto grid gap-6"
          >
            {faqs.map((faq, index) => (
              <FAQCard key={index} faq={faq} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-16 text-white overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iNyIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
              
              <div className="relative z-10">
                <motion.h2 
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl md:text-5xl font-bold mb-6"
                >
                  Ready to Start Your Project?
                </motion.h2>
                <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto font-light">
                  Don&apos;t wait to bring your ideas to life. Let&apos;s schedule a free consultation to discuss your project and how I can help make it a reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="tel:+213540128550"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    <Phone className="w-5 h-5 inline mr-2" />
                    Call Now
                  </motion.a>
                  <motion.a
                    href="mailto:amarichezineddine@gmail.com"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-10 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    Send Email
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}