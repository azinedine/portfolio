"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Scale, 
  Clock, 
  DollarSign, 
  Shield, 
  AlertCircle,
  CheckCircle,
  Calendar,
  Mail
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

// Terms sections
const termsSections = [
  {
    icon: FileText,
    title: "Service Agreement",
    content: [
      "These terms govern the use of our web development and design services",
      "By engaging our services, you agree to be bound by these terms",
      "We reserve the right to modify these terms at any time",
      "Continued use of our services constitutes acceptance of any changes",
      "These terms apply to all projects and communications"
    ]
  },
  {
    icon: DollarSign,
    title: "Payment Terms",
    content: [
      "Payment terms will be specified in individual project contracts",
      "Typical payment structure: 50% upfront, 50% upon completion",
      "Payment is due within 30 days of invoice date",
      "Late payments may incur additional fees",
      "All prices are in USD unless otherwise specified"
    ]
  },
  {
    icon: Clock,
    title: "Project Timeline",
    content: [
      "Project timelines are estimates and may vary based on complexity",
      "Client delays in providing content or feedback may extend timelines",
      "We will communicate any timeline changes promptly",
      "Rush projects may incur additional fees",
      "Timeline extensions require mutual agreement"
    ]
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    content: [
      "Client retains ownership of their content and brand assets",
      "We retain rights to our code libraries and methodologies",
      "Final deliverables become client property upon full payment",
      "We may showcase completed work in our portfolio",
      "Source code ownership terms will be specified in contracts"
    ]
  },
  {
    icon: AlertCircle,
    title: "Limitations & Liability",
    content: [
      "Our liability is limited to the total project cost",
      "We are not liable for third-party service issues",
      "Client is responsible for content accuracy and legality",
      "We provide services &quot;as is&quot; without warranties",
      "Force majeure events may affect project delivery"
    ]
  },
  {
    icon: CheckCircle,
    title: "Support & Maintenance",
    content: [
      "Post-launch support terms will be specified in contracts",
      "Bug fixes are typically covered for 30 days post-launch",
      "Additional features require separate agreements",
      "Ongoing maintenance packages are available",
      "Support response times will be outlined in service agreements"
    ]
  }
];

export default function TermsPage() {
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
              <Scale className="w-4 h-4" />
              Terms & Conditions
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <AnimatedText
                text="Terms of"
                className="text-gray-900 dark:text-white"
              />
              <br />
              <AnimatedText
                text="Service"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                delay={0.5}
              />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
              These terms and conditions outline the rules and regulations for the use of our services. 
              Please read them carefully before engaging with our services.
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
                Legally Binding
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="relative section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {termsSections.map((section, index) => (
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
                Important Notes
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                Additional information about our service terms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={scaleIn}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-purple-600" />
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For questions about these terms or to discuss specific project requirements:
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Email:</strong> amarichezineddine@gmail.com</p>
                  <p><strong>Phone:</strong> +213 540 128 550</p>
                  <p><strong>Location:</strong> Khemis Miliana, Algeria</p>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  Governing Law
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  These terms are governed by the laws of Algeria. Any disputes will be resolved through:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Good faith negotiations first</li>
                  <li>• Mediation if negotiations fail</li>
                  <li>• Arbitration as a final resort</li>
                  <li>• Courts of competent jurisdiction in Algeria</li>
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
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-16 shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-dots opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 dark:from-purple-600/20 dark:via-blue-600/20 dark:to-indigo-600/20" />
              
              <div className="relative z-10">
                <motion.h2 
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  Ready to Work Together?
                </motion.h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                  Have questions about these terms or ready to start your project? 
                  Let&apos;s discuss your requirements and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(109, 74, 236, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    Start a Project
                  </motion.a>
                  <motion.a
                    href="/support"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    Get Support
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
