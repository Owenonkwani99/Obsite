import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { workItems, services, processMilestones } from '../siteData'

const trustList = ['Lumen Labs', 'Haku Tea', 'Northwind', 'Quarto', 'Loop Labs', 'Fruta']

export default function HomePage() {
  return (
    <>
      <section className="hero-shell">
        <div className="container hero-block">
          <div className="hero-copy">
            <h1>Design and development, under one roof.</h1>
            <p>We create brands, websites and digital experiences that help companies grow.</p>
            <div className="hero-actions">
              <Link className="primary-button" to="/contact">Start a project <span aria-hidden="true">→</span></Link>
            </div>
            <div className="trustbar" aria-label="Trusted by companies">
              {trustList.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-header align-left">
          <h2>Selected work</h2>
          <div className="eyebrow">B2B digital experiences</div>
        </div>

        <div className="work-grid">
          {workItems.map((item) => (
            <article key={item.title} className="work-card mixed-card">
              <div className="image-wrap">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-meta">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
                <span>{item.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blue-panel section-block">
        <div className="container what-we-do">
          <div className="section-header dark">
            <h2>What we do</h2>
            <p>Five services, one small team. Most clients start with a website and stay for the rest.</p>
          </div>

          <div className="service-tabs">
            {services.map((service, index) => (
              <button key={service.name} type="button" className={index === 0 ? 'service-tab active' : 'service-tab'}>
                {service.name}
              </button>
            ))}
          </div>

          <div className="feature-card">
            <div className="feature-copy">
              <h3>Logos, type and color, with guidelines your team can actually use.</h3>
              <ul>
                <li>Logo system</li>
                <li>Brand guidelines</li>
                <li>Social templates</li>
                <li>Print collateral</li>
              </ul>
              <div className="pricing-row">
                <div>
                  <span>Typical timeline</span>
                  <strong>3 to 5 weeks</strong>
                </div>
                <div>
                  <span>Starting price</span>
                  <strong>From $8k</strong>
                </div>
              </div>
            </div>
            <div className="feature-image-wrapper">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" alt="Packaging concept" />
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block process-section">
        <div className="section-header workflow-header">
          <h2>Eight weeks, six sign-offs</h2>
          <p>You approve each milestone before we move on, so nothing is a surprise on launch day.</p>
        </div>

        <div className="timeline-grid">
          <div className="timeline-card large">
            <div className="timeline-topline">
              <span>Strategy</span>
              <span>8 weeks</span>
            </div>
            <div className="timeline-row">
              {processMilestones.map((item) => (
                <div key={item.label} className="mini-step">
                  <strong>{item.label}</strong>
                  <span>{item.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blue-panel blue-form">
        <div className="container contact-cta">
          <div className="cta-copy">
            <h2>Tell us about your project</h2>
            <p>A few lines are enough. A designer reads every message and replies within one business day.</p>
            <div className="contact-meta">
              <a href="mailto:hello@cobalt.studio">hello@cobalt.studio</a>
              <a href="tel:+351210000000">+351 21 000 0000</a>
              <span>Rua da Bovaista 12, Lisbon</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
