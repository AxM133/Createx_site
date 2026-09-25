import Button from '@/components/ui/Button'
import { ROUTES } from '@/router/paths'

/** Событие в виде строки (List view) — главная и Events */
export default function EventRow({ event }) {
  return (
    <article className="flex flex-col gap-4 rounded border border-gray-400 bg-white p-6 transition-shadow duration-300 hover:shadow-card md:flex-row md:items-center md:gap-8 md:px-8">
      <div className="flex shrink-0 items-center gap-4 md:w-48">
        <span className="text-5xl font-black text-primary">{event.day}</span>
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
