import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] py-20 text-center max-sm:w-[calc(100%-1.75rem)]">
      <h1 className="text-[clamp(4rem,8vw,9rem)] font-semibold leading-none">404</h1>
      <p className="my-6 text-[var(--muted)]">The page you are looking for was not found.</p>
      <Link to="/" className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-[var(--blue)] px-6 font-semibold text-white transition hover:-translate-y-px hover:shadow-[var(--shadow)]">Return home</Link>
    </section>
  )
}
