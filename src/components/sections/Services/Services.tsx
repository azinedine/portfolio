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
      className="relative h-screen min-h-[100vh] flex items-start justify-center overflow-hidden pt-8 sm:pt-12"
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
