import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3001)
const frontendOrigin = process.env.FRONTEND_URL || 'http://localhost:5173'

app.use(
  cors({
    origin: frontendOrigin,
    credentials: true,
  }),
)
app.use(helmet({ crossOriginResourcePolicy: false }))
app.use(express.json({ limit: '1mb' }))
app.use(morgan('dev'))

app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: 'Too many requests. Please wait a few minutes and try again.' },
  }),
)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, company, budget, message } = req.body || {}

  if (typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ message: 'Please provide your name.' })
  }

  if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email.trim())) {
    return res.status(400).json({ message: 'Please provide a valid email address.' })
  }

  if (typeof message !== 'string' || message.trim().length < 20) {
    return res.status(400).json({ message: 'Please provide a project description of at least 20 characters.' })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const contactEmail = process.env.CONTACT_EMAIL || 'hello@obsite.studio'

  if (!smtpHost || !smtpUser || !smtpPass) {
    return res.status(503).json({
      message: 'Email delivery is not configured yet. Add SMTP credentials to enable contact form sending.',
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false') === 'true',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.verify()

    await transporter.sendMail({
      from: process.env.MAIL_FROM || smtpUser,
      to: contactEmail,
      replyTo: email,
      subject: `New project inquiry from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Company: ${company ? company.trim() : 'Not provided'}`,
        `Budget: ${budget || 'Not provided'}`,
        '',
        'Project details:',
        message.trim(),
      ].join('\n'),
    })

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('SMTP send error:', error)
    return res.status(500).json({ message: 'The contact form could not be sent right now. Please try again later.' })
  }
})

app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.originalUrl}` })
})

app.listen(port, () => {
  console.log(`Obsite API listening on http://localhost:${port}`)
})
