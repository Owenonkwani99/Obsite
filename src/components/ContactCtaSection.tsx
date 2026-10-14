import { ContactForm } from './ContactForm'

type ContactCtaSectionProps = {
  spacing: 'home' | 'contact'
}

export function ContactCtaSection({ spacing }: ContactCtaSectionProps) {
  return (
    <section className={`${spacing === 'home' ? 'mt-[4.5rem]' : 'mt-16'} bg-[var(--blue)] py-14 pb-[4.5rem] text-white`}>
      <div className="mx-auto grid w-[calc(100%-3rem)] grid-cols-[1.1fr_1fr] items-center gap-12 max-[980px]:grid-cols-1 max-sm:w-[calc(100%-1.75rem)]">
        <div>
          <h2 className="m-0 text-[clamp(3.3rem,4vw,5.4rem)] font-semibold leading-[0.9] text-white">Tell us about your project</h2>
          <p className="mt-4 max-w-[420px] text-[1.08rem] opacity-80">A few lines are enough. A designer reads every message and replies within one business day.</p>
          <div className="mt-8 grid gap-4 text-[1.15rem]">
            <a href="mailto:hello@obsite.studio">hello@obsite.studio</a>
            <a href="tel:+351210000000">+351 21 000 0000</a>
            <span>Rua da Bovaista 12, Lisbon</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}