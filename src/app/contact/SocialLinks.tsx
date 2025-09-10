"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { SocialLink } from "./data";

interface SocialLinksProps {
  socialLinks: SocialLink[];
}

const SocialLinks = ({ socialLinks }: SocialLinksProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Follow Me
      </h3>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map(({ icon: Icon, label, href, color }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-500 dark:text-gray-500 ${color} transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 shadow-sm hover:shadow-md focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none`}
            aria-label={`Follow me on ${label}`}
          >
            <Icon className="w-5 h-5" aria-hidden="true" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
