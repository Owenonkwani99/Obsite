import { journalEntries } from '../siteData'

export default function JournalPage() {
  return (
    <section className="container page-shell">
      <div className="page-heading">
        <h1>Journal</h1>
        <p>Notes on process, pricing and the craft of building websites.</p>
      </div>

      <div className="journal-grid">
        {journalEntries.map((post) => (
          <article key={post.title} className="journal-card">
            <img src={post.image} alt={post.title} />
            <div className="journal-meta">
              <span>{post.readingTime}</span>
            </div>
            <h3>{post.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
