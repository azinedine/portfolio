"use client";

import ContactBackground from "./ContactBackground";
import HeroSection from "./HeroSection";
import ContactFormSection from "./ContactFormSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30">
      {/* Floating background elements */}
      <ContactBackground />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}