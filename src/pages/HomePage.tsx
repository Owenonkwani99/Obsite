import { ContactCtaSection } from '../components/ContactCtaSection'
import { HomeHero } from '../components/home/HomeHero'
import { HomeProcessSection } from '../components/home/HomeProcessSection'
import { HomeServicesSection } from '../components/home/HomeServicesSection'
import { StudioIntroSection } from '../components/home/StudioIntroSection'
import { SelectedWorkSection } from '../components/home/SelectedWorkSection'
import { workItems, services, processMilestones } from '../siteData'

export default function HomePage() {
  return (
    <>
      <HomeHero workItems={workItems} />
      <StudioIntroSection />
      <SelectedWorkSection items={workItems} />
      <HomeServicesSection services={services} />
      <HomeProcessSection milestones={processMilestones} />
      <ContactCtaSection spacing="home" />
    </>
  )
}
