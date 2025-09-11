"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";
import { memo } from "react";
import { AnimatedCard } from "@/components/common/AnimatedCard";

// CTA Card data - similar to ServiceCard structure
const ctaCards = [
  {
    icon: Phone,
    title: "Call Now",
    description: "Speak directly with me for immediate assistance and project discussion.",
    action: "tel:+213540128550",
    actionLabel: "Call now at +213 540 128 550",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/10 to-emerald-600/10",
    buttonClass: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white"
  },
  {
    icon: Mail,
    title: "Send Email",
    description: "Get a detailed project proposal and timeline via email.",
    action: "mailto:amarichezineddine@gmail.com",
    actionLabel: "Send email to amarichezineddine@gmail.com",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-500/10 to-indigo-600/10",
    buttonClass: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a free consultation to discuss your project requirements.",
    action: "#contact",
    actionLabel: "Schedule a consultation meeting",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-500/10 to-pink-600/10",
    buttonClass: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
  }
];

interface CTACardProps {
  card: typeof ctaCards[0];
  index: number;
}

const CTACard = memo(({ card, index }: CTACardProps) => {
  return (
    <AnimatedCard
      index={index}
      icon={card.icon}
      title={card.title}
      description={card.description}
      color={card.color}
      bgColor={card.bgColor}
      action={card.action}
      actionLabel={card.actionLabel}
      buttonClass={card.buttonClass}
      animationSpeed="slow"
    />
  );
});

CTACard.displayName = 'CTACard';

const CTASection = memo(() => {
  return (
    <section 
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Don&apos;t wait to bring your ideas to life. Choose how you&apos;d like to get started:
          </p>
        </motion.div>

        {/* CTA Cards Grid - Same layout as Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {ctaCards.map((card, index) => (
            <CTACard
              key={card.title}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;