'use client'

import { memo } from 'react'
import { ServicesHeader } from './ServicesHeader'
import { ServicesGrid } from './ServicesGrid'
import { ServicesBackground } from './ServicesBackground'
import { ScrollIndicator } from '@/components/common/ScrollIndicator'
import { services } from './servicesData'

export const Services = memo(() => {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="services" 
      className="section-padding relative overflow-hidden"
      aria-label="Services offered by A.ZINEDDINE"
    >
      <ServicesBackground />
      
      <div className="container-responsive relative z-10">
        <ServicesHeader />
        
        <div className="section-padding">
          <ServicesGrid services={services} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator 
        onClick={handleScrollToPortfolio}
        text="See my work"
        delay={1.5}
        position="bottom"
        variant="default"
      />
    </section>
  )
})

Services.displayName = 'Services'
