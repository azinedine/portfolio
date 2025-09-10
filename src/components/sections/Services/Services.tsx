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
    </section>
  )
})

Services.displayName = 'Services'
