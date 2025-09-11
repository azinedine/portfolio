"use client";

import { useEffect, memo } from 'react';
import { Hero } from '@/components/sections/Hero'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { Footer } from '@/components/sections/Footer'
import { GlobalScrollIndicator } from '@/components/common/GlobalScrollIndicator'

const HomePage = memo(() => {
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
    <div 
      className="snap-y snap-mandatory scroll-smooth min-h-screen overflow-y-auto" 
      style={{ 
        height: '100vh',
        scrollBehavior: 'smooth',
        scrollSnapType: 'y mandatory',
        scrollPaddingTop: '0px',
        scrollPaddingBottom: '0px'
      }}
    >
      <Hero />
      <WhyChoose />
      <Services />
      <Portfolio />
      <ContactCTA />
      <Footer />
      <GlobalScrollIndicator />
    </div>
  )
})

HomePage.displayName = 'HomePage';

export default HomePage;