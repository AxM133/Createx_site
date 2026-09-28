import { Link } from 'react-router-dom'
import { HiOutlineClock } from 'react-icons/hi2'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/router/paths'

/** Событие карточкой (Grid view) — Events, Single Event (You may be interested in) */
export default function EventCard({ event, as: Title = 'h3' }) {
  return (
    <article className="group flex h-full flex-col rounded border border-gray-400 bg-white p-6 transition-[translate,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
      <p className="text-2xl font-black text-primary">
        {event.day} {event.month.slice(0, 3)}
      </p>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-700">
        <HiOutlineClock aria-hidden="true" />
        {event.time}
      </p>
      <Title className="mt-5 text-lg leading-snug font-bold">
        <Link to={ROUTES.event(event.id)} className="transition-colors group-hover:text-primary">
          {event.title}
        </Link>
      </Title>
      <p className="mt-2 text-sm text-gray-700">{event.type}</p>
      <div className="mt-auto pt-8">
        <Button to={ROUTES.event(event.id)} variant="outline" size="sm" className="w-full">
          View more
        </Button>
      </div>
    </article>
  )
}
