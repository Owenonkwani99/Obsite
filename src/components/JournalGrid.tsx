import type { journalEntries } from '../siteData'

type JournalGridProps = {
  entries: typeof journalEntries
}

export function JournalGrid({ entries }: JournalGridProps) {
  return (
    <section aria-label="Journal articles" className="grid grid-cols-3 gap-[1.4rem] max-[980px]:grid-cols-1">
      {entries.map((post) => (
        <article key={post.title} className="overflow-hidden rounded-[20px] border border-[var(--line)] bg-white/50">
          <img className="h-[280px] w-full object-cover" src={post.image} alt={post.title} />
          <div className="flex justify-between px-4 pt-[0.9rem] text-[0.75rem] uppercase tracking-[0.08em] text-[var(--muted)]">
            <span>{post.readingTime}</span>
          </div>
          <h3 className="m-0 mt-2 px-4 pb-5 text-2xl font-semibold leading-[1.1]">{post.title}</h3>
        </article>
      ))}
    </section>
  )
}