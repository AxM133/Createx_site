import { useState } from 'react'
import clsx from 'clsx'
import TeamCard from '@/components/cards/TeamCard'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import SliderArrows from '@/components/ui/SliderArrows'
import { team } from '@/data/team'

const VISIBLE = 4

export default function TeamSection() {
  // direction: 0 — ещё не листали, 1 — вперёд, -1 — назад (от него зависит сторона анимации)
  const [{ start, direction }, setSlide] = useState({ start: 0, direction: 0 })
  const go = (step) =>
    setSlide((s) => ({ start: (s.start + step + team.length) % team.length, direction: step }))

  // Циклический слайдер: берём VISIBLE карточек начиная со start
  const visible = Array.from({ length: VISIBLE }, (_, i) => team[(start + i) % team.length])

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Best tutors are all here" title="Meet our team" align="left" />
          <Reveal effect="left" delay={150}>
            <SliderArrows onPrev={() => go(-1)} onNext={() => go(1)} />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((member, i) => (
            // Reveal привязан к позиции (появление при скролле), внутренний div — к слайду
            <Reveal key={i} delay={i * 100}>
              <div
                key={`${start}-${member.id}`}
                className={clsx(
                  direction === 1 && 'animate-slide-in-right',
                  direction === -1 && 'animate-slide-in-left',
                )}
                style={{ animationDelay: `${(direction === 1 ? i : VISIBLE - 1 - i) * 70}ms` }}
              >
                <TeamCard member={member} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
