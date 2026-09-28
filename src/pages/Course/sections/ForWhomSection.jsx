import Reveal from '@/components/ui/Reveal'
import { courseDetails } from '@/data/courseDetails'
import CheckList from '../components/CheckList'

export default function ForWhomSection() {
  return (
    <section className="relative pb-20 lg:pb-28">
      {/* Точечный узор слева, как в макете */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden h-40 w-32 bg-[radial-gradient(var(--color-accent-yellow)_2px,transparent_2px)] [background-size:16px_16px] opacity-60 lg:block"
      />
      <div className="relative container-site grid gap-10 lg:grid-cols-2 lg:gap-24">
        <Reveal effect="right">
          <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">For whom?</p>
          <h2 className="max-w-md text-3xl leading-tight md:text-[46px]">
            Who will benefit from the course:
          </h2>
        </Reveal>
        <CheckList
          items={courseDetails.forWhom}
          className="space-y-5 text-lg font-bold text-dark"
          itemClassName="[&_svg]:mt-1"
        />
      </div>
    </section>
  )
}
