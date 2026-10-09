import { workItems } from '../siteData'

export default function WorkPage() {
  return (
    <section className="container page-shell">
      <div className="page-heading">
        <h1>Selected work</h1>
        <p>Brands, websites and products we have designed and built for companies in M countries.</p>
      </div>

      <div className="work-grid large-grid">
        {workItems.map((item) => (
          <article key={item.title} className="work-card large-article">
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
  )
}
