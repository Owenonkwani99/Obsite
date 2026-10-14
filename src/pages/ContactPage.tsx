import { ContactCtaSection } from '../components/ContactCtaSection'
import { ContactDetailsSection } from '../components/ContactDetailsSection'
import { OfficeLocationsSection } from '../components/OfficeLocationsSection'
import { PageIntro } from '../components/PageIntro'
import { officeLocations } from '../siteData'

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] pb-16 pt-4 max-sm:w-[calc(100%-1.75rem)]">
        <PageIntro title="Let’s build something good." description="Tell us a little about your project. A designer reads every message and replies within one business day." narrow />
        <ContactDetailsSection />
        <OfficeLocationsSection locations={officeLocations} />
      </section>

      <ContactCtaSection spacing="contact" />
    </>
  )
}
