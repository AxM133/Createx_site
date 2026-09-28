import { useState } from 'react'
import clsx from 'clsx'
import CourseCard from '@/components/cards/CourseCard'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import SliderArrows from '@/components/ui/SliderArrows'
import { courses } from '@/data/courses'
import { ROUTES } from '@/router/paths'

const VISIBLE = 2

export default function AlsoLikeSection({ currentId }) {
  const others = courses.filter((course) => course.id !== currentId)
  // direction: 0 — ещё не листали, 1 — вперёд, -1 — назад
  const [{ start, direction }, setSlide] = useState({ start: 0, direction: 0 })
  const go = (step) =>
    setSlide((s) => ({ start: (s.start + step + others.length) % others.length, direction: step }))

  const visible = Array.from({ length: VISIBLE }, (_, i) => others[(start + i) % others.length])

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Check other courses" title="You may also like" align="left" />
          <Reveal effect="left" delay={150}>
            <SliderArrows onPrev={() => go(-1)} onNext={() => go(1)} />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {visible.map((course, i) => (
            <Reveal key={i} delay={i * 120} className="grid">
              <div
                key={`${start}-${course.id}`}
                className={clsx(
                  'grid',
                  direction === 1 && 'animate-slide-in-right',
                  direction === -1 && 'animate-slide-in-left',
                )}
                style={{ animationDelay: `${(direction === 1 ? i : VISIBLE - 1 - i) * 70}ms` }}
              >
                <CourseCard course={course} variant="horizontal" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center justify-center gap-6 text-center">
          <p className="text-2xl font-black text-dark md:text-[28px]">Do you want more courses?</p>
          <Button to={ROUTES.courses}>View all courses</Button>
        </Reveal>
      </div>
    </section>
  )
}
