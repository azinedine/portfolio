"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportVariants, animationConfig } from "./animations";
import { faqs } from "./data";
import FAQCard from "./FAQCard";

const FAQSection = () => {
  return (
    <section 
      id="contact-faq" 
      className="min-h-screen py-20 mt-16 flex items-center justify-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={viewportVariants}
          initial="hidden"
          whileInView="visible"
          viewport={animationConfig.viewport}
          className="text-center mb-16"
        >
          <h2 
            id="faq-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
            Quick answers to common questions about working with me
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={animationConfig.viewport}
          className="max-w-3xl mx-auto grid gap-6"
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, index) => (
            <div key={index} role="listitem">
              <FAQCard faq={faq} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;