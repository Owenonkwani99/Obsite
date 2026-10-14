import type { services } from '../../siteData'

type HomeServicesSectionProps = {
  services: typeof services
}

export function HomeServicesSection({ services }: HomeServicesSectionProps) {
  return (
    <section className="mt-[4.5rem] bg-[var(--blue)] py-14 pb-[4.5rem] text-white">
      <div className="mx-auto flex w-[calc(100%-3rem)] max-w-[1180px] flex-col gap-8 max-sm:w-[calc(100%-1.75rem)]">
        <div className="mb-0 flex items-end justify-between gap-4 max-[980px]:grid max-[980px]:grid-cols-1">
          <h2 className="m-0 text-[clamp(2.9rem,4vw,4.2rem)] font-semibold leading-[0.92] text-white">What we do</h2>
          <p className="max-w-[520px] text-[1.1rem] text-white/80">Five services, one small team. Most clients start with a website and stay for the rest.</p>
        </div>
        <div className="flex flex-wrap gap-[0.7rem]">
          {services.map((service, index) => (
            <button key={service.name} type="button" className={`cursor-pointer rounded-full border border-white/10 px-4 py-3 text-white ${index === 0 ? 'bg-white/20' : 'bg-white/[0.12]'}`}>
              {service.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-[1.05fr_1.2fr] items-center gap-8 rounded-[var(--radius)] border border-white/10 bg-white/[0.08] p-5 max-[980px]:grid-cols-1 max-[980px]:p-4">
          <div>
            <h3 className="m-0 text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-none">Logos, type and color, with guidelines your team can actually use.</h3>
            <ul className="mt-6 grid gap-2.5 pl-0 text-white/90 [list-style:none]">
              <li className="before:mr-[0.6rem] before:content-['✓']">Logo system</li>
              <li className="before:mr-[0.6rem] before:content-['✓']">Brand guidelines</li>
              <li className="before:mr-[0.6rem] before:content-['✓']">Social templates</li>
              <li className="before:mr-[0.6rem] before:content-['✓']">Print collateral</li>
            </ul>
            <div className="mt-8 flex gap-8">
              <div>
                <span className="mb-1 block text-[0.8rem] opacity-80">Typical timeline</span>
                <strong className="text-[1.3rem]">3 to 5 weeks</strong>
              </div>
              <div>
                <span className="mb-1 block text-[0.8rem] opacity-80">Starting price</span>
                <strong className="text-[1.3rem]">From $8k</strong>
              </div>
            </div>
          </div>
          <div className="min-h-80 overflow-hidden rounded-[20px]">
            <img className="h-full min-h-80 w-full object-cover" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" alt="Packaging concept" />
          </div>
        </div>
      </div>
    </section>
  )
}