"use client";

import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Stat } from "./data";

interface StatCardProps {
  stat: Stat;
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

const StatCard = ({ stat, index }: StatCardProps) => {
  const Icon = stat.icon as LucideIcon;

  return (
    <motion.div
      key={stat.label}
      variants={scaleIn}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50"
    >
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} text-white rounded-xl mb-4 shadow-lg`}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {stat.value}
      </div>
      <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
    </motion.div>
  );
};

export default StatCard;
