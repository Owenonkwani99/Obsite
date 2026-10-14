import { WorkGrid, type WorkItem } from '../WorkGrid'

type SelectedWorkSectionProps = {
  items: WorkItem[]
}

export function SelectedWorkSection({ items }: SelectedWorkSectionProps) {
  return (
    <section className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] pt-[4.5rem] max-sm:w-[calc(100%-1.75rem)]">
      <div className="mb-8 flex items-end justify-between gap-4 max-[980px]:grid max-[980px]:grid-cols-1">
        <h2 className="m-0 text-[clamp(2.9rem,4vw,4.2rem)] font-semibold leading-[0.92]">Selected work</h2>
        <div className="text-[0.8rem] uppercase tracking-[0.08em] text-[var(--muted)]">B2B digital experiences</div>
      </div>
      <WorkGrid items={items} />
    </section>
  )
}