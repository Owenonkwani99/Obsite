import { Outlet, NavLink, Link } from 'react-router-dom'
import logo from '../assets/obsite-logo.svg'

export function Layout() {
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
      <header className="site-header">
        <div className="container topbar">
          <Link to="/" className="brand" aria-label="Obsite home">
            <img src={logo} alt="Obsite logo" />
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="primary-button header-button">
            Start a project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="brand-mark"><span className="dot" /></div>
            <div>
              <div className="title">Cobalt</div>
              <p>An independent brand and web design studio working with companies around the world.</p>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Pages</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <ul>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a></li>
              </ul>
            </div>
            <div>
              <h4>Studio</h4>
              <ul>
                <li>Rua da Bovaista 12, 1200-066 Lisbon, Portugal</li>
                <li><a href="mailto:hello@cobalt.studio">hello@cobalt.studio</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Cobalt Studio. All rights reserved.</span>
          <div className="bottom-links">
            <a href="/privacy">Privacy policy</a>
            <a href="mailto:hello@cobalt.studio">Get it for $79 →</a>
          </div>
        </div>
      </footer>
    </>
  )
}
