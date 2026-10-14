export function ContactDetailsSection() {
  return (
    <section aria-label="Contact details" className="mt-10 grid grid-cols-3 gap-4 max-[980px]:grid-cols-1">
      <div className="rounded-[18px] border border-[var(--line)] bg-white/70 p-5">
        <span className="mb-2 block text-[0.85rem] text-[var(--muted)]">Email</span>
        <a className="text-[1.2rem]" href="mailto:hello@obsite.studio">hello@obsite.studio</a>
      </div>
      <div className="rounded-[18px] border border-[var(--line)] bg-white/70 p-5">
        <span className="mb-2 block text-[0.85rem] text-[var(--muted)]">Call</span>
        <a className="text-[1.2rem]" href="tel:+351210000000">+351 21 000 0000</a>
      </div>
      <div className="rounded-[18px] border border-[var(--line)] bg-white/70 p-5">
        <span className="mb-2 block text-[0.85rem] text-[var(--muted)]">Visit</span>
        <p className="m-0 text-[1.2rem]">Rua da Bovaista 12, Lisbon</p>
      </div>
    </section>
  )
}