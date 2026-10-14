import type { officeLocations } from '../siteData'

type OfficeLocationsSectionProps = {
  locations: typeof officeLocations
}

export function OfficeLocationsSection({ locations }: OfficeLocationsSectionProps) {
  return (
    <section aria-label="Office locations" className="mt-10 grid grid-cols-2 gap-5 max-[980px]:grid-cols-1">
      {locations.map((location) => (
        <article key={location.city} className="overflow-hidden rounded-[18px] border border-[var(--line)] bg-white/70">
          <img className="h-[280px] w-full object-cover" src={location.image} alt={location.city} />
          <div className="flex items-center justify-between gap-4 p-4 pb-5">
            <div>
              <h3 className="m-0 text-[1.8rem] font-semibold">{location.city}</h3>
              <p className="mt-1 text-[var(--muted)]">{location.address}</p>
            </div>
            <button type="button" aria-label={`Directions to ${location.city}`} className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-[var(--blue)] p-0 font-semibold text-white transition hover:-translate-y-px hover:shadow-[var(--shadow)]">↗</button>
          </div>
        </article>
      ))}
    </section>
  )
}