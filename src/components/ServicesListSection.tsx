import type { services } from '../siteData'

type ServicesListSectionProps = {
  services: typeof services
}

export function ServicesListSection({ services }: ServicesListSectionProps) {
  return (
    <section className="mt-[4.5rem] bg-[var(--blue)] py-8 text-white">
      <div className="mb-7 flex items-center justify-between gap-4 max-[640px]:grid">
        <h2 className="m-0 text-[clamp(2.2rem,4vw,3rem)]">What we do</h2>
        <button type="button" className="inline-flex min-h-[42px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-[var(--blue)] px-[1.15rem] py-[0.7rem] text-[0.9rem] font-semibold text-white transition hover:-translate-y-px hover:shadow-[var(--shadow)]">Start a project</button>
      </div>
      <div className="grid gap-4">
        {services.map((service) => (
          <article key={service.name} className="grid grid-cols-[minmax(220px,260px)_minmax(0,1fr)] gap-4 border-t border-white/10 py-4 max-[980px]:grid-cols-1">
            <div className="text-[1.2rem] font-bold">{service.name}</div>
            <p className="opacity-80">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}