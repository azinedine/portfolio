"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { AnimatedText } from "@/components/common/AnimatedText";
import { experiences, education, certifications, ExperienceItem } from "./data";
import { containerVariants, itemVariants } from "./animations";
import TimelineItem from "./TimelineItem";
import CertificationCard from "./CertificationCard";
import { useRouter } from "next/navigation";

export default function ExperiencePage() {
  const allItems: ExperienceItem[] = [...experiences, ...education].sort((a, b) => {
    // Sort by year (newest first)
    const getYear = (period: string) => {
      if (period.includes('Today') || period.includes('Present')) return 2024;
      const match = period.match(/(\d{4})/g);
      return match ? Math.max(...match.map(Number)) : 0;
    };
    
    return getYear(b.period) - getYear(a.period);
  });

  const router = useRouter();

  const downloadResume = () => {
    const resumeUrl = '/Zineddine_Amariche_Resume.pdf';
    window.open(resumeUrl, '_blank');
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
              <Code2 className="w-4 h-4" />
              Professional Journey
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <AnimatedText
                text="My Professional"
                className="text-gray-900 dark:text-white"
              />
              <br />
              <AnimatedText
                text="Experience"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                delay={0.5}
              />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
              From education to full-stack development and project management - 
              a journey of continuous learning and growth in the tech industry.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">20+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Career Timeline
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              From education to professional experience, here&apos;s my journey through 
              the evolving landscape of technology and software development
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {allItems.map((item, index) => (
              <TimelineItem
                key={`${item.type}-${item.id}`}
                item={item}
                index={index}
                isLast={index === allItems.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications & Awards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              Professional certifications that validate my expertise and commitment 
              to staying current with industry standards
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                index={index}
              />
            ))}
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
              {/* Background pattern */}
              <div className="absolute inset-0 bg-dots opacity-10" />
              
              {/* Gradient overlay for dark mode */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 dark:from-purple-600/20 dark:via-blue-600/20 dark:to-indigo-600/20" />
              
              <div className="relative z-10">
                <motion.h2 
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  Ready to Work Together?
                </motion.h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                  With years of experience in full-stack development, mobile applications, 
                  and project management, I&apos;m ready to help bring your next project to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    onClick={() => router.push('/contact')}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(109, 74, 236, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    Hire Me Now
                  </motion.button>
                  <motion.button
                    onClick={() => downloadResume()}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}