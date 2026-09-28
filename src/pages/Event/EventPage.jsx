import { useState } from 'react'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import EventCard from '@/components/cards/EventCard'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import SliderArrows from '@/components/ui/SliderArrows'
import SocialLinks from '@/components/ui/SocialLinks'
import { SOCIAL_URLS } from '@/data/contacts'
import { courseDetails } from '@/data/courseDetails'
import { events } from '@/data/events'
import { team } from '@/data/team'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import CheckList from '@/pages/Course/components/CheckList'
import JoinCourseForm from '@/pages/Course/components/JoinCourseForm'
import { ROUTES } from '@/router/paths'
import { unsplash } from '@/utils/image'
import newsletterArt from '@/components/assets/images/shukrullo/about/illustration2.png'

// Пока у всех событий общие мок-данные — темы и аудитория как в макете
const THEMES = courseDetails.program.slice(0, 4)
const AUDIENCE = courseDetails.forWhom.slice(0, 3)
const PARTNERS = ['Del Mar Strategy', 'Sentinal Consulting', 'National']
const SPEAKER_BIO =
  'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sem vulputate molestie laoreet at massa sed pharetra. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.'
const VISIBLE = 3

function InfoCard({ event }) {
  const info = [
    {
      label: 'Time',
      value: `${event.month} ${Number(event.day)}, ${event.time}`,
      note: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
    },
    {
      label: 'Price',
      value: 'Free',
      note: 'Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.',
    },
  ]

  return (
    <Reveal
      as="aside"
      effect="left"
      delay={150}
      className="rounded bg-white p-8 shadow-card lg:sticky lg:top-28 lg:p-10"
    >
      <dl className="space-y-6">
        {info.map(({ label, value, note }) => (
          <div key={label}>
            <dt className="text-xs font-bold tracking-wider text-dark uppercase">{label}</dt>
            <dd>
              <p className="mt-1 text-xl font-bold text-primary">{value}</p>
              <p className="mt-1 text-sm text-gray-700">{note}</p>
            </dd>
          </div>
        ))}
      </dl>
      <a
        href={SOCIAL_URLS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-xs font-bold tracking-wider text-primary uppercase underline underline-offset-4 hover:text-primary-dark"
      >
        Event on Facebook
      </a>
      <Button href="#request" className="mt-6 w-full">
        Join the event
      </Button>
    </Reveal>
  )
}

function NewsletterBanner() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <Reveal className="grid items-center gap-8 rounded bg-gradient-pink p-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-12">
      <img
        src={newsletterArt}
        alt=""
        loading="lazy"
        className="mx-auto hidden w-full max-w-xs md:block"
      />
      <div>
        <h2 className="text-2xl leading-tight md:text-[28px]">
          Don’t want to miss the best events? Subscribe to our newsletter!
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Your working email"
              aria-label="Your working email"
              className="h-11 flex-1 rounded border border-gray-500 bg-white px-4 text-sm outline-none placeholder:text-gray-600 focus:border-primary"
            />
            <Button type="submit">Subscribe</Button>
          </div>
          <label className="mt-4 flex items-start gap-2 text-sm text-gray-800">
            <input type="checkbox" required defaultChecked className="mt-1 accent-primary" />I agree
            to receive communications from Createx Online School
          </label>
        </form>
        {sent && (
          <p role="status" className="mt-3 animate-fade-up text-sm text-gray-800">
            Thank you! You are subscribed.
          </p>
        )}
      </div>
    </Reveal>
  )
}

function RelatedEvents({ currentId }) {
  const others = events.filter((item) => item.id !== currentId)
  // direction: 0 — ещё не листали, 1 — вперёд, -1 — назад
  const [{ start, direction }, setSlide] = useState({ start: 0, direction: 0 })
  const go = (step) =>
    setSlide((s) => ({ start: (s.start + step + others.length) % others.length, direction: step }))
  const visible = Array.from({ length: VISIBLE }, (_, i) => others[(start + i) % others.length])

  return (
    <section className="bg-gray-300 py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Check other online events"
            title="You may be interested in"
            align="left"
          />
          <Reveal effect="left" delay={150}>
            <SliderArrows onPrev={() => go(-1)} onNext={() => go(1)} />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {visible.map((item, i) => (
            <div
              key={`${start}-${item.id}`}
              className={clsx(
                'grid',
                i > 0 && 'hidden md:grid',
                direction === 1 && 'animate-slide-in-right',
                direction === -1 && 'animate-slide-in-left',
              )}
              style={{ animationDelay: `${(direction === 1 ? i : VISIBLE - 1 - i) * 70}ms` }}
            >
              <EventCard event={item} />
            </div>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center justify-center gap-6 text-center">
          <p className="text-2xl font-black text-dark md:text-[28px]">Do you want more?</p>
          <Button to={ROUTES.events}>Explore all events</Button>
        </Reveal>
      </div>
    </section>
  )
}

/** Single Event — страница события */
export default function EventPage() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === Number(eventId))

  if (!event) return <NotFoundPage />

  // Спикер у каждого события свой: у первого — Kathryn Murphy, как в макете
  const speaker = team[(event.id + 4) % team.length]

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-pink py-16 lg:py-24">
        <div className="relative container-site text-center">
          <p className="animate-fade-up text-sm font-bold tracking-wider text-primary uppercase">
            {event.type}
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl animate-fade-up text-3xl leading-tight [animation-delay:120ms] md:text-5xl">
            {event.title}
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[1fr_380px] lg:gap-24">
          <div>
            <Reveal as="h2" className="text-3xl md:text-[46px] md:leading-tight">
              We will talk about:
            </Reveal>
            <Accordion items={THEMES} label="Theme" className="mt-10" />
          </div>
          <InfoCard event={event} />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal effect="clip">
            <div className="aspect-[495/573] overflow-hidden rounded bg-accent-yellow">
              <img
                src={speaker.photo}
                alt={speaker.name}
                loading="lazy"
                className="size-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal effect="left" delay={150}>
            <p className="text-sm font-bold tracking-wider text-gray-800 uppercase">Speaker</p>
            <h2 className="mt-3 text-3xl md:text-[46px] md:leading-tight">{speaker.name}</h2>
            <p className="mt-2 text-lg text-gray-700">{speaker.role}</p>
            <p className="mt-6 text-gray-800">{SPEAKER_BIO}</p>
            <ul className="mt-8 flex flex-wrap gap-8 text-sm font-black tracking-wide text-gray-600 uppercase">
              {PARTNERS.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
            <SocialLinks
              networks={['facebook', 'instagram', 'twitter', 'linkedin']}
              className="mt-8 text-gray-700"
              size={16}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-24">
          <Reveal effect="right">
            <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">
              For whom?
            </p>
            <h2 className="max-w-md text-3xl leading-tight md:text-[46px]">
              Who will benefit from the event:
            </h2>
          </Reveal>
          <CheckList
            items={AUDIENCE}
            className="space-y-5 text-lg font-bold text-dark"
            itemClassName="[&_svg]:mt-1"
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-site">
          <NewsletterBanner />
        </div>
      </section>

      <section id="request" className="scroll-mt-24 pb-20 lg:pb-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal effect="right">
            <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">
              Don’t miss the event
            </p>
            <h2 className="text-3xl leading-tight md:text-[46px]">Leave a request</h2>
            <JoinCourseForm
              submitLabel="Join the event"
              note="* You will receive a link to the online lecture in an email after registration."
              className="mt-8 max-w-md"
            />
          </Reveal>
          <Reveal effect="left" delay={150} className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -right-6 -bottom-6 size-2/3 animate-sway rounded-[40px] bg-marketing/10"
            />
            <img
              src={unsplash('1517245386807-bb43f82c33c4', 900)}
              alt=""
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[32px] object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <RelatedEvents currentId={event.id} />
    </>
  )
}
