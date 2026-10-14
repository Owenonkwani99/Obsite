const clients = [
  { name: 'Darko Orphans', mark: '✧' },
  { name: 'Morsan Consulting', mark: '◒' },
  { name: 'Redcore Holdings', mark: '⇢' },
  { name: 'Cohen Studio', mark: '□' },
  { name: 'Loop Labs', mark: '∞' },
  { name: 'Fruta', mark: '◉' },
]

const teamAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&h=80&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80&q=80',
]

export function StudioIntroSection() {
  return (
    <section id="studio" className="bg-white py-10 text-[#11112d] sm:py-12">
      <div className="mx-auto w-[calc(100%-3rem)] max-w-[1180px] max-sm:w-[calc(100%-2.5rem)]">
        <ul aria-label="Trusted by teams at" className="mb-14 flex items-center justify-between gap-4 overflow-x-auto p-0 text-[0.62rem] text-[#55556c] [list-style:none] sm:mb-16 sm:text-[0.7rem]">
          <li className="shrink-0 whitespace-nowrap text-[0.58rem] text-[#77778a]">Trusted by teams at</li>
          {clients.map((client) => (
            <li key={client.name} className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium">
              <span aria-hidden="true" className="text-[0.85rem]">{client.mark}</span>
              {client.name}
            </li>
          ))}
        </ul>

        <h2 className="text-[2rem] font-medium leading-[1.28] tracking-[-0.02em] sm:text-[2.15rem]">
          We’re a team of twelve{' '}
          <span className="inline-flex h-[30px] w-[66px] align-middle overflow-hidden rounded-full sm:h-[34px] sm:w-[72px]">
            <img className="h-full w-full object-cover" src={teamAvatars[0]} alt="" />
          </span>{' '}
          designers and developers helping founders{' '}
          <span className="inline-flex h-[30px] w-[66px] align-middle overflow-hidden rounded-full sm:h-[34px] sm:w-[72px]">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=180&h=90&q=80" alt="" />
          </span>{' '}
          turn big ideas into websites{' '}
          <span className="inline-flex h-[30px] w-[66px] align-middle overflow-hidden rounded-full sm:h-[34px] sm:w-[72px]">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=180&h=90&q=80" alt="" />
          </span>{' '}
          people remember.
        </h2>

        <figure className="relative mt-8 aspect-[2.03/1] overflow-hidden rounded-[14px] bg-[#e3e3e6] sm:mx-5 sm:mt-9">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85"
            alt="Architectural plans and materials from a studio project"
          />
          <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[0.62rem] font-medium text-[#17172b] shadow-sm sm:bottom-4 sm:left-4">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[#4133ed]" />
            2026 studio reel
          </figcaption>
        </figure>

        <div className="mt-8 grid grid-cols-[0.85fr_1.15fr] gap-8 text-[0.68rem] leading-[1.5] text-[#656579] sm:mx-5 sm:mt-9 sm:gap-10 max-sm:grid-cols-1 max-sm:gap-5">
          <div>
            <div aria-hidden="true" className="mb-2 flex pl-1">
              {teamAvatars.map((avatar) => (
                <img key={avatar} className="-ml-1.5 size-5 rounded-full border border-white object-cover" src={avatar} alt="" />
              ))}
            </div>
            <p className="m-0 font-medium text-[#17172b]">Twelve people, one studio</p>
            <p className="m-0">Designers, developers and strategists in Lisbon and Berlin.</p>
          </div>
          <div>
            <p className="m-0">Since 2019 we have launched more than 120 websites for startups, studios and growing brands in 14 countries. Small teams, senior people, and one point of contact from kickoff to launch.</p>
            <a href="#studio" className="mt-3 inline-flex min-h-6 items-center gap-2 rounded-full border border-[#e5e5eb] bg-white py-1 pl-2.5 pr-1 text-[0.62rem] font-medium text-[#17172b] transition hover:border-[#c7c7d2]">
              About the studio
              <span aria-hidden="true" className="grid size-[18px] place-items-center rounded-full bg-[#11112d] text-[0.65rem] text-white">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}