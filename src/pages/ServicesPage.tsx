import { PageIntro } from '../components/PageIntro'
import { ServicesListSection } from '../components/ServicesListSection'
import { services } from '../siteData'

export default function ServicesPage() {
  return (
    <section className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] py-10 pb-16 max-sm:w-[calc(100%-1.75rem)]">
      <PageIntro title="Design and development, under one roof." description="We create meaningful brands and digital systems that feel thoughtful, useful and ready to grow." />
      <ServicesListSection services={services} />
    </section>
  )
}
