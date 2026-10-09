import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="container page-shell not-found-shell">
      <h1>404</h1>
      <p>The page you are looking for was not found.</p>
      <Link to="/" className="primary-button">Return home</Link>
    </section>
  )
}
