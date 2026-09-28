import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { courseDetails } from '@/data/courseDetails'
import CheckList from '../components/CheckList'

export default function AboutCourseSection({ price }) {
  const info = [
    { label: 'Dates', value: courseDetails.dates, note: courseDetails.datesNote },
    { label: 'Duration', value: courseDetails.duration, note: courseDetails.durationNote },
    { label: 'Price', value: `$${price} per month`, note: courseDetails.priceNote },
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="container-site grid items-start gap-12 lg:grid-cols-[1fr_380px] lg:gap-24">
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-[46px] md:leading-tight">About the course</h2>
            <p className="mt-6 text-gray-800">{courseDetails.about}</p>
          </Reveal>

          <Reveal as="h3" delay={100} className="mt-10 text-2xl">
            You will learn:
          </Reveal>
          <CheckList items={courseDetails.willLearn} className="mt-6 text-gray-800" />
        </div>

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
          <Button href="#register" className="mt-8 w-full">
            Join the course
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
