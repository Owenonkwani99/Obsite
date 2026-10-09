import { ContactForm } from '../components/ContactForm'
import { officeLocations } from '../siteData'

export default function ContactPage() {
  return (
    <>
      <section className="container page-shell contact-page-shell">
        <div className="page-heading narrow">
          <h1>Let’s build something good.</h1>
          <p>Tell us a little about your project. A designer reads every message and replies within one business day.</p>
        </div>

        <div className="contact-methods">
          <div className="contact-method">
            <span>Email</span>
            <a href="mailto:hello@cobalt.studio">hello@cobalt.studio</a>
          </div>
          <div className="contact-method">
            <span>Call</span>
            <a href="tel:+351210000000">+351 21 000 0000</a>
          </div>
          <div className="contact-method">
            <span>Visit</span>
            <p>Rua da Bovaista 12, Lisbon</p>
          </div>
        </div>

        <div className="office-grid">
          {officeLocations.map((location) => (
            <article key={location.city} className="office-card">
              <img src={location.image} alt={location.city} />
              <div className="office-meta">
                <div>
                  <h3>{location.city}</h3>
                  <p>{location.address}</p>
                </div>
                <button type="button" className="small-button circle-button">Directions</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blue-panel blue-form contact-page-form">
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
