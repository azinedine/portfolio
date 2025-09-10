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
      gap="lg" 
      align="stretch" 
      responsive={true}
      animate={true}
      stagger={true}
      delay={0.2}
    >
      {services.map((service, index) => (
        <GridItem key={service.title}>
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
