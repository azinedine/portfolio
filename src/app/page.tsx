import { Hero } from '@/components/sections/Hero'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function HomePage() {
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