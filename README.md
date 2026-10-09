# Obsite

A responsive agency-style website for Obsite, built with React, Vite, TypeScript and an Express backend for form delivery.

## Stack

- Frontend: React + TypeScript + Vite + React Router
- Backend: Node.js + Express + Nodemailer
- Styling: custom CSS
- Package manager: pnpm

## Local development

1. Install dependencies:
   pnpm install
2. Copy the environment file and update values if needed:
   cp .env.example .env
3. Start both frontend and backend:
   pnpm dev
4. Visit http://localhost:5173 for the site and http://localhost:3001 for the API health endpoint.

## Scripts

- pnpm dev — runs the frontend and backend together
- pnpm dev:frontend — runs the React app
- pnpm dev:backend — runs the Express API with watch mode
- pnpm build — builds the frontend for production
- pnpm preview — previews the built site
- pnpm start:backend — starts the backend in production mode
- pnpm lint — runs the repo linting

## SMTP configuration

1. Create or use an SMTP account from a provider such as Mailgun, SendGrid, Postmark, or a custom SMTP server.
2. Add the connection values to `.env`.
3. Set `CONTACT_EMAIL` to the inbox that should receive inquiries.
4. Verify the contact form by submitting a message from the frontend.

If SMTP settings are not configured, the API returns a safe 503 response instead of claiming email delivery succeeded.

## Deployment

- Set `FRONTEND_URL` to the deployed frontend origin.
- Configure the backend environment on the hosting platform.
- Ensure HTTPS is enabled on the frontend domain.
- Keep the frontend and backend on separate domains if needed and configure CORS accordingly.

## Notes

The provided reference imagery in the workspace was not a direct Obsite asset set, so the project uses carefully matched placeholder photography consistent with the supplied design language while leaving the structure ready for real brand assets.
# Obsite
