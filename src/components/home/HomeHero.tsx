import { Link } from 'react-router-dom'
import type { WorkItem } from '../WorkGrid'

type HomeHeroProps = {
  workItems: WorkItem[]
}

const avatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&h=80&q=80',
]

export function HomeHero({ workItems }: HomeHeroProps) {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[linear-gradient(164deg,#4034ff_0%,#3025ed_46%,#1d14b7_100%)] px-0 pb-8 text-white max-sm:min-h-[700px]">
      <div className="relative min-h-[760px] pt-[105px] max-sm:min-h-[700px] max-sm:pt-[104px]">
        <div className="relative z-[1] mx-auto flex w-[calc(100%-3rem)] max-w-[1180px] flex-col items-center text-center max-sm:w-[calc(100%-36px)]">
          <div className="inline-flex min-h-9 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.13] py-1 pr-3.5 pl-[5px] text-[0.84rem] font-semibold text-white max-sm:gap-[7px] max-sm:pr-2.5 max-sm:text-[0.7rem]">
            <span className="flex pl-0.5" aria-hidden="true">
              {avatars.map((avatar) => (
                <img key={avatar} className="-ml-[3px] size-[27px] rounded-full border-2 border-[#625bff] object-cover max-sm:size-[25px]" src={avatar} alt="" />
              ))}
            </span>
            <span>Available for two new projects in November</span>
          </div>
          <h1 className="mt-[25px] max-w-[980px] text-[clamp(3.7rem,5.2vw,4.55rem)] font-semibold leading-[0.98] text-white [text-wrap:balance] max-sm:max-w-[430px] max-sm:text-[clamp(2.65rem,10.8vw,3.1rem)]">Brands and websites that help companies grow.</h1>
          <p className="mt-[22px] max-w-[560px] text-[1.05rem] leading-[1.45] text-white/75 max-sm:max-w-[390px] max-sm:text-[0.95rem]">An independent studio building brands and websites, from the first sketch to launch day.</p>
          <div className="mt-6 flex justify-center gap-2.5 max-sm:gap-1.5">
            <Link className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white bg-white py-1 pr-[5px] pl-[18px] text-[0.84rem] font-semibold text-[#17162a] transition hover:-translate-y-px hover:shadow-[var(--shadow)] max-sm:gap-[7px] max-sm:pl-[11px] max-sm:text-[0.75rem]" to="/contact">
              Start a project <span className="grid size-8 place-items-center rounded-full bg-[#493cff] text-[1.1rem] leading-none text-white max-sm:size-7" aria-hidden="true">→</span>
            </Link>
            <Link className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.07] py-1 pr-[5px] pl-[18px] text-[0.84rem] font-semibold text-white transition hover:-translate-y-px hover:shadow-[var(--shadow)] max-sm:gap-[7px] max-sm:pl-[11px] max-sm:text-[0.75rem]" to="/work">
              See our work <span className="grid size-8 place-items-center rounded-full bg-white text-[1.1rem] leading-none text-[#392cff] max-sm:size-7" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 grid grid-cols-[repeat(5,minmax(0,188px))] justify-center gap-3 px-6 max-[980px]:grid-cols-5 max-[980px]:gap-2 max-[980px]:px-[18px] max-sm:grid-cols-3 max-sm:gap-2 max-sm:px-3" aria-hidden="true">
          {workItems.slice(0, 5).map((item, index) => (
            <figure key={item.title} className={`h-[270px] overflow-hidden rounded-[21px] border-[5px] border-white bg-[#dce1ec] shadow-[0_15px_32px_rgba(15,9,98,0.2)] max-[980px]:h-[240px] max-sm:h-[225px] max-sm:rounded-[17px] max-sm:border-4 ${index === 0 ? 'translate-y-[42px] rotate-[-11deg] max-sm:hidden' : ''} ${index === 1 ? 'translate-y-[17px] rotate-[-6deg] max-[640px]:translate-y-[22px] max-[640px]:rotate-[-7deg]' : ''} ${index === 3 ? 'translate-y-[15px] rotate-[6deg] max-[640px]:translate-y-5 max-[640px]:rotate-[7deg]' : ''} ${index === 4 ? 'translate-y-[41px] rotate-[11deg] max-sm:hidden' : ''}`}>
              <img className={`h-full w-full object-cover ${index === 0 ? 'object-[40%_center]' : ''} ${index === 2 ? 'object-[55%_center]' : ''} ${index === 4 ? 'object-[60%_center]' : ''}`} src={item.image} alt="" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}