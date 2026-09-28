import { useEffect, useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { courseDetails } from '@/data/courseDetails'
import JoinCourseForm from '../components/JoinCourseForm'

const deadline = new Date(courseDetails.discountDeadline).getTime()

const getTimeLeft = () => {
  const s = Math.max(0, Math.floor((deadline - Date.now()) / 1000))
  return [
    { label: 'Days', value: Math.floor(s / 86400) },
    { label: 'Hours', value: Math.floor(s / 3600) % 24 },
    { label: 'Mins', value: Math.floor(s / 60) % 60 },
    { label: 'Sec', value: s % 60 },
  ]
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <ul aria-label="Time left until the end of the discount" className="flex gap-6">
      {timeLeft.map(({ label, value }) => (
        <li key={label} className="text-center">
          <span className="block text-3xl font-black text-dark tabular-nums">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-700">{label}</span>
        </li>
      ))}
    </ul>
  )
}

export default function DiscountSection() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <Reveal
          effect="zoom"
          className="relative overflow-hidden rounded bg-gradient-pink px-6 py-10 md:px-12 lg:px-20 lg:py-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 size-56 animate-drift rounded-full bg-primary/10 blur-2xl"
          />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl">20% discount for early birds!</h2>
            <Countdown />
          </div>
          <JoinCourseForm layout="row" className="relative mt-8" />
        </Reveal>
      </div>
    </section>
  )
}
