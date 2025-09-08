"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ContactInfo } from "./data";

interface ContactInfoCardProps {
  contact: ContactInfo;
}

const ContactInfoCard = ({ contact }: ContactInfoCardProps) => {
  const Icon = contact.icon as LucideIcon;

  return (
    <motion.a
      href={contact.href}
      whileHover={{ scale: 1.02, x: 5 }}
      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all group"
    >
      <div className={`w-12 h-12 ${contact.color} bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
          {contact.label}
        </p>
        <p className="text-gray-900 dark:text-white font-semibold">
          {contact.value}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactInfoCard;
