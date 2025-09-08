"use client";

import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Value } from "./data";

interface ValueCardProps {
  value: Value;
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

const ValueCard = ({ value, index }: ValueCardProps) => {
  const Icon = value.icon as LucideIcon;

  return (
    <motion.div
      key={value.title}
      variants={scaleIn}
      whileHover={{ scale: 1.05, y: -10 }}
      className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50"
    >
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} text-white rounded-xl mb-6 shadow-lg`}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {value.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {value.description}
      </p>
    </motion.div>
  );
};

export default ValueCard;
