'use client'

import { memo } from 'react'
import { ServicesHeader } from './ServicesHeader'
import { ServicesGrid } from './ServicesGrid'
import { ServicesBackground } from './ServicesBackground'
import { services } from './servicesData'

export const Services = memo(() => {

  return (
    <section 
      id="services" 
      className="relative min-h-screen py-16 sm:py-20 lg:py-24 flex items-center justify-center overflow-hidden"
      aria-label="Services offered by A.ZINEDDINE"
    >
      <ServicesBackground />
      
      <div className="container-responsive relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <ServicesHeader />
        
        <div className="py-4 sm:py-6 md:py-8">
          <ServicesGrid services={services} />
        </div>
      </div>

    </section>
  )
})

Services.displayName = 'Services'
