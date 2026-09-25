import HeroSection from './sections/HeroSection'
import WhyCreatexSection from './sections/WhyCreatexSection'
import FeaturedCoursesSection from './sections/FeaturedCoursesSection'
import BenefitsSection from './sections/BenefitsSection'
import EventsSection from './sections/EventsSection'
import TeamSection from './sections/TeamSection'
import LatestPostsSection from './sections/LatestPostsSection'
import CertificateSection from '@/components/sections/CertificateSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import SubscribeSection from '@/components/sections/SubscribeSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyCreatexSection />
      <FeaturedCoursesSection />
      <BenefitsSection />
      <EventsSection />
      <CertificateSection />
      <TeamSection />
      <TestimonialsSection />
      <LatestPostsSection />
      <SubscribeSection />
    </>
  )
}
