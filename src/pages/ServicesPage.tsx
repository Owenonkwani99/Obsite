import { services } from '../siteData'

export default function ServicesPage() {
  return (
    <section className="container page-shell">
      <div className="page-heading">
        <h1>Design and development, under one roof.</h1>
        <p>We create meaningful brands and digital systems that feel thoughtful, useful and ready to grow.</p>
      </div>

      <div className="blue-panel service-page-panel">
        <div className="service-page-header">
          <h2>What we do</h2>
          <button type="button" className="primary-button small-button">Start a project</button>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article key={service.name} className="service-row">
              <div className="service-name">{service.name}</div>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
