export type WorkItem = {
  title: string
  category: string
  year: string
  image: string
}

type WorkGridProps = {
  items: WorkItem[]
}

export function WorkGrid({ items }: WorkGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 max-[980px]:grid-cols-1">
      {items.map((item) => (
        <article key={item.title} className="flex flex-col gap-4">
          <div className="min-h-[300px] overflow-hidden rounded-[18px] bg-[var(--soft-surface)]">
            <img className="h-full min-h-[300px] w-full object-cover" src={item.image} alt={item.title} />
          </div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="m-0 text-[1.8rem] font-semibold">{item.title}</h3>
              <p className="mt-1 text-[var(--muted)]">{item.category}</p>
            </div>
            <span className="text-[0.75rem] uppercase tracking-[0.09em] text-[var(--muted)]">{item.year}</span>
          </div>
        </article>
      ))}
    </div>
  )
}