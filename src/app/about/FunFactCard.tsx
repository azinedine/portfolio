"use client";

import { motion, Variants } from "framer-motion";
import { FunFact } from "./data";

interface FunFactCardProps {
  fact: FunFact;
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

const FunFactCard = ({ fact, index }: FunFactCardProps) => {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
      className={`text-center p-8 bg-gradient-to-br ${fact.gradient} rounded-2xl`}
    >
      <div className="text-5xl mb-4">{fact.emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{fact.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{fact.description}</p>
    </motion.div>
  );
};

export default FunFactCard;
