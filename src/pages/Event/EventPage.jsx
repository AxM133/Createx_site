import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HiArrowRight, HiOutlineCalendarDays, HiOutlineClock } from 'react-icons/hi2'
import SubscribeSection from '@/components/sections/SubscribeSection'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { events } from '@/data/events'
import { team } from '@/data/team'
import { ROUTES } from '@/router/paths'

const discussionPoints = [
  'How to understand the challenge and define clear priorities.',
  'Practical tools and decisions you can apply to your work.',
  'How to turn new ideas into a focused action plan.',
]

const audience = [
  'Specialists who want to deepen their knowledge of the topic.',
  'Team leads and managers looking for practical approaches.',
  'Anyone ready to put new ideas into practice.',
]

export default function EventPage() {
  const { eventId } = useParams()
  const [requestSent, setRequestSent] = useState(false)
  const event = events.find((item) => item.id === Number(eventId))

  if (!event) {
    return (
      <main className="container-site py-24 text-center">
        <SectionHeading eyebrow="Our events" title="Event not found" />
        <Button to={ROUTES.events} className="mt-8">
          Back to events
        </Button>
      </main>
    )
  }

  const speaker = event.id === 1 ? team.find((person) => person.id === 6) : null
  const relatedEvents = events.filter((item) => item.id !== event.id).slice(0, 3)

  const handleRequest = (submitEvent) => {
    submitEvent.preventDefault()
    setRequestSent(true)
    submitEvent.currentTarget.reset()
  }

  return (
    <>
      <header className="bg-gradient-pink py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow={`Our events / ${event.type}`}
            title={event.title}
            align="left"
            as="h1"
            className="mx-auto max-w-4xl text-center"
          />
        </div>
      </header>

      <main className="container-site py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:gap-16">
          <article>
            <section>
              <SectionHeading eyebrow="About the event" title="We will talk about:" align="left" />
              <ul className="mt-8 space-y-5">
                {discussionPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-gray-800">
                    <HiArrowRight className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {speaker && (
              <section className="mt-16 grid items-center gap-8 sm:grid-cols-[minmax(180px,260px)_1fr]">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="aspect-square w-full rounded object-cover"
                />
                <div>
                  <p className="text-xs font-bold tracking-wider text-gray-700 uppercase">
                    Speaker
                  </p>
                  <h2 className="mt-2 text-3xl">{speaker.name}</h2>
                  <p className="mt-2 text-sm font-bold text-gray-700">{speaker.role}</p>
                  <p className="mt-5 leading-relaxed text-gray-800">
                    Kathryn shares practical ways to bring clarity to complex decisions and helps
                    teams build structures that can adapt to change.
                  </p>
                </div>
              </section>
            )}

            <section className="mt-16">
              <SectionHeading
                eyebrow="Is this event for you?"
                title="Who will benefit from the event:"
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {audience.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-800">
                    <HiArrowRight className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="h-fit rounded border border-gray-400 p-6 shadow-card-sm lg:sticky lg:top-8">
            <p className="text-xs font-bold tracking-wider text-primary uppercase">
              Event details
            </p>
            <div className="mt-5 flex gap-3">
              <HiOutlineCalendarDays className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-bold text-dark">
                  {event.month} {event.day}
                </p>
                <p className="mt-1 text-sm text-gray-700">Online event</p>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <HiOutlineClock className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-bold text-dark">{event.time}</p>
                <p className="mt-1 text-sm text-gray-700">{event.type}</p>
              </div>
            </div>

            <h2 className="mt-8 text-xl">Leave a request</h2>
            <form onSubmit={handleRequest} className="mt-5 space-y-4">
              <label className="block text-sm text-gray-800">
                Full name
                <input
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 h-11 w-full rounded border border-gray-500 px-3 outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm text-gray-800">
                Email
                <input
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 h-11 w-full rounded border border-gray-500 px-3 outline-none focus:border-primary"
                />
              </label>
              <Button type="submit" className="w-full">
                Send request
              </Button>
              {requestSent && (
                <p className="text-sm text-gray-800" role="status">
                  Thank you! We will contact you soon.
                </p>
              )}
            </form>
          </aside>
        </div>

        <section className="mt-20 border-t border-gray-400 pt-14">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Explore more events"
              title="You may be interested in"
              align="left"
            />
            <Button to={ROUTES.events} variant="outline">
              All events
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedEvents.map((item) => (
              <article key={item.id} className="flex flex-col rounded border border-gray-400 p-5">
                <p className="text-sm font-bold text-primary">
                  {item.month} {item.day} <span className="text-gray-700">| {item.type}</span>
                </p>
                <h3 className="mt-4 flex-1 text-lg leading-snug">
                  <Link to={ROUTES.event(item.id)} className="hover:text-primary">
                    {item.title}
                  </Link>
                </h3>
                <Link
                  to={ROUTES.event(item.id)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold hover:text-primary"
                >
                  View event <HiArrowRight aria-hidden="true" className="text-primary" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SubscribeSection />
    </>
  )
}
