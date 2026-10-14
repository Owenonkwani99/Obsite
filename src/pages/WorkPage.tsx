import { PageIntro } from '../components/PageIntro'
import { WorkGrid } from '../components/WorkGrid'
import { workItems } from '../siteData'

export default function WorkPage() {
  return (
    <section className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] py-10 pb-16 max-sm:w-[calc(100%-1.75rem)]">
      <PageIntro title="Selected work" description="Brands, websites and products we have designed and built for companies in M countries." />
      <WorkGrid items={workItems} />
    </section>
  )
}
