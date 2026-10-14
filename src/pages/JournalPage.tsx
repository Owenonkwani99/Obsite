import { JournalGrid } from '../components/JournalGrid'
import { PageIntro } from '../components/PageIntro'
import { journalEntries } from '../siteData'

export default function JournalPage() {
  return (
    <section className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] py-10 pb-16 max-sm:w-[calc(100%-1.75rem)]">
      <PageIntro title="Journal" description="Notes on process, pricing and the craft of building websites." />
      <JournalGrid entries={journalEntries} />
    </section>
  )
}
