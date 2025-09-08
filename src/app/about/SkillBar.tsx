"use client";

import { motion, Variants } from "framer-motion";
import { Skill } from "./data";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SkillBar = ({ skill, index }: SkillBarProps) => {
  return (
    <motion.div
      key={skill.name}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-gray-900 dark:text-white text-lg">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full font-medium">
          {skill.level}%
        </span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
