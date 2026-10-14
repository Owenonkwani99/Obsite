import type { faqs } from '../siteData'

type FaqSectionProps = {
  faqs: typeof faqs
}

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section aria-labelledby="faq-title" className="mt-12 grid grid-cols-[0.8fr_1.2fr] items-start gap-8 max-[980px]:grid-cols-1">
      <div>
        <h2 id="faq-title" className="m-0 text-[clamp(2.6rem,4vw,4rem)] font-semibold">Questions, answered</h2>
        <p className="mt-2 text-[var(--muted)]">Email us directly.</p>
      </div>
      <div className="grid gap-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-[14px] border border-[var(--line)] bg-white/50 p-4" open={faq.question === 'How long does a website project take?'}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">{faq.question}</summary>
            <p className="mt-3 text-[var(--muted)]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}