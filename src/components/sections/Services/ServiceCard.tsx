'use client'

import { LucideIcon } from 'lucide-react'
import { memo } from 'react'
import { AnimatedCard } from '@/components/common/AnimatedCard'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: string
  bgColor: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

export const ServiceCard = memo(({ service, index }: ServiceCardProps) => {
  return (
    <AnimatedCard
      index={index}
      icon={service.icon}
      title={service.title}
      description={service.description}
      color={service.color}
      bgColor={service.bgColor}
      variant="service"
      className="service-card"
    />
  )
})

ServiceCard.displayName = 'ServiceCard'
