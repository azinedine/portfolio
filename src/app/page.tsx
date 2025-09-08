"use client";

import { useEffect } from 'react';
import { Hero } from '@/components/sections/Hero'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function HomePage() {
  useEffect(() => {
    // Handle hash navigation when page loads
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash === '#services') {
        // Wait for the page to fully render
        setTimeout(() => {
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    };

    // Run on mount
    handleHashNavigation();

    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <Portfolio />
      <ContactCTA />
    </>
  )
}