import { useState } from 'react'
import TeamCard from '@/components/cards/TeamCard'
import SectionHeading from '@/components/ui/SectionHeading'
import SliderArrows from '@/components/ui/SliderArrows'
import { team } from '@/data/team'

const VISIBLE = 4

export default function TeamSection() {
  const [start, setStart] = useState(0)
  const go = (step) => setStart((s) => (s + step + team.length) % team.length)

  // Циклический слайдер: берём VISIBLE карточек начиная со start
  const visible = Array.from({ length: VISIBLE }, (_, i) => team[(start + i) % team.length])

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Best tutors are all here" title="Meet our team" align="left" />
          <SliderArrows onPrev={() => go(-1)} onNext={() => go(1)} />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
