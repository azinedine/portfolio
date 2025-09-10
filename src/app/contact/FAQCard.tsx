"use client";

import { motion } from "framer-motion";
import { viewportVariants, animationConfig } from "./animations";
import { FAQ } from "./data";

interface FAQCardProps {
  faq: FAQ;
  index: number;
}

const FAQCard = ({ faq, index }: FAQCardProps) => {
  return (
    <motion.div
      variants={viewportVariants}
      initial="hidden"
      whileInView="visible"
      viewport={animationConfig.viewport}
      className="bg-white dark:bg-gray-900 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-300 shadow-sm hover:shadow-md"
    >
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 leading-relaxed">
        {faq.question}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
        {faq.answer}
      </p>
    </motion.div>
  );
};

export default FAQCard;