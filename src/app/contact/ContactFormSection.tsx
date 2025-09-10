"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight, animationConfig } from "./animations";
import { contactInfo, socialLinks } from "./data";
import ContactInfoCard from "./ContactInfoCard";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section 
      id="contact-form" 
      className="min-h-screen py-20 flex items-center justify-center"
      aria-labelledby="contact-form-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={animationConfig.viewport}
            className="lg:col-span-1 mb-12 lg:mb-0"
          >
            <h2 
              id="contact-form-heading"
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Contact Information
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Ready to start your project? Feel free to reach out through any of these channels, and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8" role="list" aria-label="Contact methods">
              {contactInfo.map((contact) => (
                <div key={contact.label} role="listitem">
                  <ContactInfoCard contact={contact} />
                </div>
              ))}
            </div>

            {/* Social Links */}
            <SocialLinks socialLinks={socialLinks} />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={animationConfig.viewport}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;