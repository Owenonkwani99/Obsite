type PageIntroProps = {
  title: string
  description: string
  narrow?: boolean
}

export function PageIntro({ title, description, narrow = false }: PageIntroProps) {
  return (
    <div className={`mb-8 ${narrow ? 'max-w-[780px]' : ''}`}>
      <h1 className="m-0 text-[clamp(3.3rem,5vw,6.3rem)] font-semibold leading-[0.92]">{title}</h1>
      <p className="mt-5 max-w-[700px] text-[1.2rem] text-[var(--muted)]">{description}</p>
    </div>
  )
}