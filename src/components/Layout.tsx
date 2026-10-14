import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../assets/obsite-logo.png'

export function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Work', to: '/work' },
    { label: 'Services', to: '/services' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Journal', to: '/journal' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <>
      <header className={isHomePage ? 'absolute inset-x-0 top-4 z-10 border-0 bg-transparent backdrop-blur-none max-sm:top-[10px]' : 'sticky top-0 z-10 border-b border-transparent bg-[rgba(243,243,241,0.92)] backdrop-blur-[12px]'}>
        <div className={isHomePage
          ? 'mx-auto flex min-h-14 w-fit max-w-[calc(100%-28px)] items-center justify-start gap-6 rounded-full bg-white px-2 py-1.5 pl-3.5 shadow-[0_8px_28px_rgba(20,13,117,0.12)] max-[980px]:gap-[clamp(12px,2vw,24px)] max-sm:min-h-[52px] max-sm:w-[calc(100%-28px)] max-sm:max-w-none max-sm:justify-between max-sm:gap-2.5 max-sm:pl-3'
          : 'mx-auto flex min-h-[88px] w-[calc(100%-3rem)] max-w-[1180px] items-center justify-between gap-6 max-[980px]:grid max-[980px]:justify-center max-[980px]:py-3 max-sm:w-[calc(100%-1.75rem)]'}>
          <Link to="/" className="inline-flex items-center" aria-label="Obsite home">
            <img className="h-auto w-[120px]" src={logo} alt="Obsite logo" />
          </Link>

          <nav className={`flex items-center gap-5 text-[0.92rem] text-[var(--text)] max-[980px]:grid max-[980px]:grid-cols-1 max-[980px]:justify-center max-[980px]:text-center ${isHomePage ? 'gap-[23px] whitespace-nowrap text-[0.82rem] text-[#282638] max-sm:hidden' : ''}`} aria-label="Main navigation">
            {navItems.filter((item) => !isHomePage || !['Home', 'Contact'].includes(item.label)).map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `${isActive ? 'opacity-100' : isHomePage ? 'opacity-90' : 'opacity-80'} transition-opacity hover:opacity-100`}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className={isHomePage
            ? 'inline-flex min-h-11 min-w-40 items-center justify-center gap-2.5 rounded-full border-0 bg-[#3b2cff] px-4 py-2 text-[0.78rem] font-semibold whitespace-nowrap text-white transition hover:-translate-y-px hover:shadow-[var(--shadow)] max-sm:min-h-10 max-sm:min-w-0 max-sm:px-3 max-sm:text-[0.73rem]'
            : 'inline-flex min-h-[52px] min-w-[170px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-[var(--blue)] px-[1.4rem] py-[0.78rem] font-semibold text-white transition hover:-translate-y-px hover:shadow-[var(--shadow)] max-[980px]:w-full'}>
            Start a project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-[var(--blue)] pt-5 text-white">
        <div className="mx-auto flex w-[calc(100%-3rem)] max-w-[1180px] justify-between gap-8 border-t border-white/20 py-8 pb-6 max-[980px]:grid max-sm:w-[calc(100%-1.75rem)]">
          <div className="max-w-80">
            <div className="mb-4 inline-flex size-[22px] items-center justify-center rounded-full bg-white"><span className="block size-2.5 rounded-full bg-[var(--blue)]" /></div>
            <div>
              <div className="text-xl font-bold">Obsite</div>
              <p className="mt-2 leading-6 opacity-80">An independent brand and web design studio working with companies around the world.</p>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-3 gap-8 max-[980px]:grid-cols-1">
            <div>
              <h4 className="mb-3 text-base">Pages</h4>
              <ul className="m-0 grid gap-2 p-0 opacity-90 [list-style:none]">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-base">Social</h4>
              <ul className="m-0 grid gap-2 p-0 opacity-90 [list-style:none]">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-base">Studio</h4>
              <ul className="m-0 grid gap-2 p-0 opacity-90 [list-style:none]">
                <li>Rua da Bovaista 12, 1200-066 Lisbon, Portugal</li>
                <li><a href="mailto:hello@obsite.studio">hello@obsite.studio</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-[calc(100%-3rem)] items-center justify-between gap-4 border-t border-white/20 py-5 pb-10 text-[0.82rem] opacity-80 max-[980px]:grid max-sm:w-[calc(100%-1.75rem)]">
          <span>© 2026 Obsite Studio. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/privacy">Privacy policy</a>
            <a href="mailto:hello@obsite.studio">Get it for $79 →</a>
          </div>
        </div>
      </footer>
    </>
  )
}
