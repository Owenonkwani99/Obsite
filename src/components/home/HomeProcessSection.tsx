import type { processMilestones } from '../../siteData'

type HomeProcessSectionProps = {
  milestones: typeof processMilestones
}

export function HomeProcessSection({ milestones }: HomeProcessSectionProps) {
  return (
    <section className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] pt-[4.5rem] max-sm:w-[calc(100%-1.75rem)]">
      <div className="mb-8 block">
        <h2 className="m-0 text-[clamp(2.9rem,4vw,4.2rem)] font-semibold leading-[0.92]">Eight weeks, six sign-offs</h2>
        <p className="mt-4 max-w-[560px] text-[1.08rem] text-[var(--muted)]">You approve each milestone before we move on, so nothing is a surprise on launch day.</p>
      </div>
      <div className="grid grid-cols-1">
        <div className="rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-4">
          <div className="mb-4 flex items-center justify-between font-semibold">
            <span>Strategy</span>
            <span>8 weeks</span>
          </div>
          <div className="grid grid-cols-4 gap-3 max-[980px]:grid-cols-2">
            {milestones.map((item) => (
              <div key={item.label} className="flex min-h-[88px] flex-col justify-center rounded-[14px] bg-[var(--soft-surface)] p-4">
                <strong className="text-[0.95rem]">{item.label}</strong>
                <span className="mt-1 text-[0.75rem] text-[var(--muted)]">{item.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}