import { pricingPlans, faqs } from '../siteData'

export default function PricingPage() {
  return (
    <section className="container page-shell">
      <div className="page-heading">
        <h1>Simple, fixed pricing.</h1>
        <p>Every price is agreed before we start, so it never changes mid-project.</p>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article key={plan.plan} className={plan.accent === 'primary' ? 'pricing-card primary' : 'pricing-card'}>
            <div className="plan-tag">{plan.tag}</div>
            <h2>{plan.plan}</h2>
            <div className="price-line">{plan.price}</div>
            <p className="starting-price">Starting price</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button type="button" className="primary-button small-button">Start a project</button>
          </article>
        ))}
      </div>

      <div className="faq-block">
        <div className="faq-column">
          <h2>Questions, answered</h2>
          <p>Email us directly.</p>
        </div>

        <div className="faq-items">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item" open={faq.question === 'How long does a website project take?'}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
