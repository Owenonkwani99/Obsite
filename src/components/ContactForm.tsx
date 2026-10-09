import { useState, type ChangeEvent, type FormEvent } from 'react'

type ContactValues = {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

const initialValues: ContactValues = {
  name: '',
  email: '',
  company: '',
  budget: 'Under $10k',
  message: '',
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to send the message right now.')
      }

      setStatus('success')
      setValues(initialValues)
      setMessage('Thanks — your message has been sent successfully.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" value={values.name} onChange={handleChange} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="you@company.com" value={values.email} onChange={handleChange} required />
        </label>
      </div>

      <label>
        <span>Company</span>
        <input name="company" type="text" placeholder="Optional" value={values.company} onChange={handleChange} />
      </label>

      <label>
        <span>Budget</span>
        <select name="budget" value={values.budget} onChange={handleChange}>
          <option>Under $10k</option>
          <option>$10k to $25k</option>
          <option>$25k to $50k</option>
          <option>$50k+</option>
        </select>
      </label>

      <label>
        <span>About your project</span>
        <textarea name="message" placeholder="What are you building, and when do you need it?" value={values.message} onChange={handleChange} rows={6} required />
      </label>

      {message ? (
        <p className={`form-status ${status}`}>{message}</p>
      ) : null}

      <button type="submit" className="primary-button large-button" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending message...' : 'Send message'}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
