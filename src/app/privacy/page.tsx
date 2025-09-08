"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Mail, 
  Calendar,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { AnimatedText } from "@/components/common/AnimatedText";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

// Privacy sections
const privacySections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal information you provide when contacting us (name, email, phone number)",
      "Project details and requirements you share during consultations",
      "Communication history and correspondence",
      "Website usage data and analytics (anonymized)",
      "Technical information about your device and browser"
    ]
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "To provide and improve our services",
      "To communicate with you about projects and services",
      "To process payments and manage contracts",
      "To send important updates about your projects",
      "To analyze website performance and user experience"
    ]
  },
  {
    icon: Shield,
    title: "Data Protection",
    content: [
      "We implement industry-standard security measures",
      "All data is encrypted in transit and at rest",
      "Access to personal information is restricted to authorized personnel",
      "Regular security audits and updates",
      "Secure backup and recovery procedures"
    ]
  },
  {
    icon: Eye,
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information",
      "Information may be shared with trusted service providers",
      "We may disclose information if required by law",
      "Your information is never shared without your explicit consent",
      "Third-party integrations are carefully vetted for security"
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30 pt-20">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="relative section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold text-sm mb-6"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <AnimatedText
                text="Your Privacy"
                className="text-gray-900 dark:text-white"
              />
              <br />
              <AnimatedText
                text="Matters"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                delay={0.5}
              />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last updated: December 2024
              </div>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                GDPR Compliant
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="relative section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {privacySections.map((section) => (
              <motion.div
                key={section.title}
                variants={slideInLeft}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <section.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="relative section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Your Rights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                You have the right to control your personal information
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={scaleIn}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-purple-600" />
                  Contact Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  If you have any questions about this privacy policy or want to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Email:</strong> zineddine.dev@gmail.com</p>
                  <p><strong>Phone:</strong> +213 555 123 456</p>
                  <p><strong>Location:</strong> Blida, Algeria</p>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  Policy Updates
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any significant changes by:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Sending an email notification</li>
                  <li>• Posting a notice on our website</li>
                  <li>• Updating the &quot;Last updated&quot; date</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding">
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
                  Questions About Privacy?
                </motion.h2>
                <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto font-light">
                  If you have any questions or concerns about how we handle your personal information, 
                  please don&apos;t hesitate to reach out.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
