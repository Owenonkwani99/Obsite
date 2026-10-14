import { FaqSection } from '../components/FaqSection'
import { PageIntro } from '../components/PageIntro'
import { PricingPlansSection } from '../components/PricingPlansSection'
import { pricingPlans, faqs } from '../siteData'

export default function PricingPage() {
  return (
    <section className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] py-10 pb-16 max-sm:w-[calc(100%-1.75rem)]">
      <PageIntro title="Simple, fixed pricing." description="Every price is agreed before we start, so it never changes mid-project." />
      <PricingPlansSection plans={pricingPlans} />
      <FaqSection faqs={faqs} />
    </section>
  )
}
