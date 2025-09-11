'use client'

import { memo } from 'react'
import { Grid, GridItem } from '@/components/common/Grid'
import { ServiceCard, type Service } from './ServiceCard'

interface ServicesGridProps {
  services: Service[]
}

export const ServicesGrid = memo(({ services }: ServicesGridProps) => {
  return (
    <Grid 
      cols={3} 
      gap="md" 
      align="stretch" 
      responsive={true}
      animate={false}
      stagger={false}
      delay={0}
      className="gpu-accelerated"
    >
      {services.map((service, index) => (
        <GridItem 
          key={service.title}
          animate={false}
          className="gpu-accelerated"
        >
          <ServiceCard
            service={service}
            index={index}
          />
        </GridItem>
      ))}
    </Grid>
  )
})

ServicesGrid.displayName = 'ServicesGrid'
