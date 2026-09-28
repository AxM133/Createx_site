import Accordion from '@/components/ui/Accordion'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { courseDetails } from '@/data/courseDetails'
import { unsplash } from '@/utils/image'

export default function ProgramSection() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading eyebrow="Course program" title="What will you learn" align="left" />

          <Accordion items={courseDetails.program} label="Lesson" className="mt-10" />
        </div>

        {/* TODO: заменить на иллюстрацию из Figma */}
        <Reveal effect="zoom" delay={150} className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 size-3/4 rounded-full bg-marketing/15"
          />
          <img
            src={unsplash('1498050108023-c5249f4df085', 800)}
            alt=""
            loading="lazy"
            className="relative aspect-square w-full animate-float rounded-[32px] object-cover shadow-card"
          />
        </Reveal>
      </div>
    </section>
  )
}
