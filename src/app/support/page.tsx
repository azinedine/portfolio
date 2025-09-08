"use client";

import { motion } from "framer-motion";
import { 
  HelpCircle, 
  Mail, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  Search,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { AnimatedText } from "@/components/common/AnimatedText";
import { useState } from "react";

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


const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

// FAQ Data
const faqs = [
  {
    id: 1,
    question: "How can I contact you for a project?",
    answer: "You can reach out to me through the contact form on the contact page, email me directly at zineddine.dev@gmail.com, or call me at +213 555 123 456. I typically respond within 24 hours."
  },
  {
    id: 2,
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation."
  },
  {
    id: 3,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, I offer various support packages including bug fixes, feature updates, and maintenance. We can discuss the best support option for your needs during the project planning phase."
  },
  {
    id: 4,
    question: "What technologies do you work with?",
    answer: "I specialize in React.js, Next.js, React Native, Vue.js, Node.js, Laravel, MongoDB, PostgreSQL, and more. I'm always learning new technologies to provide the best solutions."
  },
  {
    id: 5,
    question: "Do you work with international clients?",
    answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. I maintain regular communication throughout the project lifecycle."
  },
  {
    id: 6,
    question: "What is your payment structure?",
    answer: "I typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can discuss milestone-based payments."
  }
];

// Support categories
const supportCategories = [
  {
    icon: MessageCircle,
    title: "General Inquiries",
    description: "Questions about services, pricing, or availability",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    description: "Help with existing projects or technical questions",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Clock,
    title: "Project Updates",
    description: "Status updates on ongoing projects",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: CheckCircle,
    title: "Maintenance",
    description: "Ongoing support and maintenance requests",
    color: "from-orange-500 to-orange-600"
  }
];

export default function SupportPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
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
              <HelpCircle className="w-4 h-4" />
              Support Center
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <AnimatedText
                text="How Can I"
                className="text-gray-900 dark:text-white"
              />
              <br />
              <AnimatedText
                text="Help You?"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                delay={0.5}
              />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Find answers to common questions or get in touch for personalized support. 
              I&apos;m here to help you succeed with your projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="relative section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Support Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              Choose the type of support you need
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {supportCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} text-white rounded-xl mb-6 shadow-lg`}
                >
                  <category.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative section-padding">
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
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light mb-8">
              Quick answers to common questions
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-colors"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-4"
          >
            {filteredFAQs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={scaleIn}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
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
                  Still Need Help?
                </motion.h2>
                <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto font-light">
                  Can&apos;t find what you&apos;re looking for? Don&apos;t hesitate to reach out directly. 
                  I&apos;m here to help you succeed with your projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    Contact Me
                  </motion.a>
                  <motion.a
                    href="mailto:zineddine.dev@gmail.com"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-10 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    Send Email
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
