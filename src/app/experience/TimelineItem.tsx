"use client";

import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  Code2,
  Smartphone,
  Globe,
} from "lucide-react";
import { ExperienceItem } from "./data";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TimelineItem = ({ item, index, isLast }: TimelineItemProps) => {
  // Get appropriate icon for work type
  const getWorkIcon = (title: string) => {
    if (title.toLowerCase().includes('mobile')) return Smartphone;
    if (title.toLowerCase().includes('project manager')) return Code2;
    if (title.toLowerCase().includes('web')) return Globe;
    return Briefcase;
  };

  const WorkIcon = item.type === 'work' ? getWorkIcon(item.title) : GraduationCap;

  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-px h-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent opacity-60" />
      )}

      {/* Timeline icon */}
      <div className="flex items-start gap-6">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25 border-2 border-white dark:border-gray-900"
        >
          <WorkIcon className="w-5 h-5 text-white" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <motion.div
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
            }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50"
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-lg">
                  <span>
                    {item.company || item.institution}
                  </span>
                  {item.link && item.link !== '#' && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-lg font-medium"
                >
                  <Calendar className="w-4 h-4" />
                  {item.period}
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-lg font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </motion.span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                {item.description}
              </p>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {item.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                Technologies & Skills:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * idx }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-lg font-semibold border border-purple-200/50 dark:border-purple-700/50 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
