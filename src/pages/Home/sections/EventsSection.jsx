import EventRow from '@/components/cards/EventRow'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { events } from '@/data/events'
import { ROUTES } from '@/router/paths'

export default function EventsSection() {
  return (
    <section className="bg-gradient-pink py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Our events" title="Lectures & workshops" />

        <div className="mt-12 space-y-4">
          {events.slice(0, 3).map((event, i) => (
            <Reveal key={event.id} effect="right" delay={i * 120}>
              <EventRow event={event} />
            </Reveal>
          ))}
        </div>

        <Reveal
          effect="zoom"
          className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10"
        >
          <p className="text-2xl font-bold text-dark">Do you want more?</p>
          <Button to={ROUTES.events} size="lg">
            Explore all events
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
