import type { pricingPlans } from '../siteData'

type PricingPlansSectionProps = {
  plans: typeof pricingPlans
}

export function PricingPlansSection({ plans }: PricingPlansSectionProps) {
  return (
    <section aria-label="Pricing plans" className="grid grid-cols-3 gap-[1.2rem] max-[980px]:grid-cols-1">
      {plans.map((plan) => (
        <article key={plan.plan} className={`flex flex-col rounded-[20px] border border-[var(--line)] p-6 ${plan.accent === 'primary' ? 'bg-[var(--blue)] text-white shadow-[var(--shadow)]' : 'bg-white/70'}`}>
          <div className="mb-4 text-[0.72rem] uppercase tracking-[0.08em] opacity-70">{plan.tag}</div>
          <h2 className="m-0 text-[2rem] font-semibold">{plan.plan}</h2>
          <div className="mt-4 text-[clamp(2.4rem,3vw,3.3rem)] font-extrabold">{plan.price}</div>
          <p className="my-1 mb-4 text-[0.8rem] opacity-70">Starting price</p>
          <ul className="mb-6 grid flex-1 gap-3 pl-0 [list-style:none]">
            {plan.features.map((feature) => (
              <li key={feature} className="before:mr-[0.65rem] before:content-['✓']">{feature}</li>
            ))}
          </ul>
          <button type="button" className="inline-flex min-h-[42px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-[var(--blue)] px-[1.15rem] py-[0.7rem] text-[0.9rem] font-semibold text-white transition hover:-translate-y-px hover:shadow-[var(--shadow)]">Start a project</button>
        </article>
      ))}
    </section>
  )
}