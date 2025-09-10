"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ContactInfo } from "./data";

interface ContactInfoCardProps {
  contact: ContactInfo;
}

const ContactInfoCard = ({ contact }: ContactInfoCardProps) => {
  const Icon = contact.icon as LucideIcon;
  const isClickable = contact.href !== "#";

  const cardContent = (
    <>
      <div className={`w-12 h-12 ${contact.color} bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-1`}>
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-500 font-medium mb-1">
          {contact.label}
        </p>
        <p className="text-gray-900 dark:text-white font-semibold text-sm sm:text-base break-words">
          {contact.value}
        </p>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <motion.a
        href={contact.href}
        whileHover={{ scale: 1.02, x: 5 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-5 p-3 sm:p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 group shadow-sm hover:shadow-md focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
        aria-label={`${contact.label}: ${contact.value}`}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      className="flex items-center gap-5 p-3 sm:p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm group"
    >
      {cardContent}
    </motion.div>
  );
};

export default ContactInfoCard;
