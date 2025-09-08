"use client";

import { motion, Variants } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Certification } from "./data";

interface CertificationCardProps {
  certification: Certification;
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

const CertificationCard = ({ certification, index }: CertificationCardProps) => {
  return (
    <motion.div
      key={certification.id}
      variants={scaleIn}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"
      }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50"
    >
      <div className="flex items-center justify-between mb-6">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25"
        >
          <Award className="w-8 h-8 text-white" />
        </motion.div>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
          {certification.date}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
        {certification.title}
      </h3>

      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4 text-lg">
        {certification.issuer}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded">
          ID: {certification.credentialId}
        </span>
        {certification.link !== '#' && (
          <motion.a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
