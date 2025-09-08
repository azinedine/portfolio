"use client";

import { motion, Variants } from "framer-motion";
import { FAQ } from "./data";

interface FAQCardProps {
  faq: FAQ;
  index: number;
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FAQCard = ({ faq, index }: FAQCardProps) => {
  return (
    <motion.div
      variants={scaleIn}
      className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        {faq.question}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {faq.answer}
      </p>
    </motion.div>
  );
};

export default FAQCard;