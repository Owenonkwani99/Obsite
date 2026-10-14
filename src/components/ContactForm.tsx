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
    <form className="rounded-[26px] bg-white/[0.95] p-6 shadow-[0_20px_32px_rgba(17,24,39,0.12)]" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <label className="mb-4 block">
          <span className="mb-2 block text-[0.8rem] text-[var(--muted)]">Name</span>
          <input className="min-h-[52px] w-full rounded-xl border border-[rgba(17,24,39,0.12)] bg-[rgba(243,243,241,0.82)] px-4 py-3 text-[var(--text)]" name="name" type="text" placeholder="Your name" value={values.name} onChange={handleChange} required />
        </label>
        <label className="mb-4 block">
          <span className="mb-2 block text-[0.8rem] text-[var(--muted)]">Email</span>
          <input className="min-h-[52px] w-full rounded-xl border border-[rgba(17,24,39,0.12)] bg-[rgba(243,243,241,0.82)] px-4 py-3 text-[var(--text)]" name="email" type="email" placeholder="you@company.com" value={values.email} onChange={handleChange} required />
        </label>
      </div>

      <label className="mb-4 block">
        <span className="mb-2 block text-[0.8rem] text-[var(--muted)]">Company</span>
        <input className="min-h-[52px] w-full rounded-xl border border-[rgba(17,24,39,0.12)] bg-[rgba(243,243,241,0.82)] px-4 py-3 text-[var(--text)]" name="company" type="text" placeholder="Optional" value={values.company} onChange={handleChange} />
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block text-[0.8rem] text-[var(--muted)]">Budget</span>
        <select className="min-h-[52px] w-full rounded-xl border border-[rgba(17,24,39,0.12)] bg-[rgba(243,243,241,0.82)] px-4 py-3 text-[var(--text)]" name="budget" value={values.budget} onChange={handleChange}>
          <option>Under $10k</option>
          <option>$10k to $25k</option>
          <option>$25k to $50k</option>
          <option>$50k+</option>
        </select>
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block text-[0.8rem] text-[var(--muted)]">About your project</span>
        <textarea className="min-h-[120px] w-full resize-y rounded-xl border border-[rgba(17,24,39,0.12)] bg-[rgba(243,243,241,0.82)] px-4 py-3 text-[var(--text)]" name="message" placeholder="What are you building, and when do you need it?" value={values.message} onChange={handleChange} rows={6} required />
      </label>

      {message ? (
        <p className={`mb-4 rounded-xl px-4 py-3 text-[0.95rem] ${status === 'success' ? 'bg-green-500/10 text-green-800' : status === 'error' ? 'bg-red-500/10 text-red-800' : 'bg-gray-100 text-gray-800'}`}>{message}</p>
      ) : null}

      <button type="submit" className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-[var(--blue)] px-6 font-semibold text-white transition hover:-translate-y-px hover:shadow-[var(--shadow)] disabled:cursor-wait disabled:opacity-60" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending message...' : 'Send message'}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
