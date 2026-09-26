import Button from '@/components/ui/Button'
import { ROUTES } from '@/router/paths'

/** Событие в виде строки (List view) — главная и Events */
export default function EventRow({ event }) {
  return (
    <article className="group relative flex flex-col gap-4 overflow-hidden rounded border border-gray-400 bg-white p-6 transition-[border-color,box-shadow,translate] duration-500 ease-out-expo hover:-translate-y-1 hover:border-transparent hover:shadow-card md:flex-row md:items-center md:gap-8 md:px-8">
      {/* Цветная полоска слева, «вырастает» при наведении */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-primary transition-transform duration-500 ease-out-expo group-hover:scale-y-100"
      />
      <div className="flex shrink-0 items-center gap-4 md:w-48">
        <span className="inline-block text-5xl font-black text-primary transition-transform duration-500 ease-spring group-hover:scale-110">
          {event.day}
        </span>
        <div>
          <p className="text-lg font-bold text-dark">{event.month}</p>
          <p className="text-sm text-gray-700">{event.time}</p>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg leading-snug font-bold">{event.title}</h3>
        <p className="mt-1 text-sm text-gray-700">{event.type}</p>
      </div>
      <Button
        to={ROUTES.event(event.id)}
        variant="outline"
        size="sm"
        className="self-start md:self-center"
      >
        View more
      </Button>
    </article>
  )
}
