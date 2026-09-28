import { useId, useState } from 'react'
import clsx from 'clsx'
import { HiMinus, HiPlus } from 'react-icons/hi2'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { courseDetails } from '@/data/courseDetails'
import { unsplash } from '@/utils/image'

export default function ProgramSection() {
  const id = useId()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading eyebrow="Course program" title="What will you learn" align="left" />

          <ul className="mt-10 space-y-4">
            {courseDetails.program.map((lesson, i) => {
              const open = i === openIndex
              const Icon = open ? HiMinus : HiPlus
              return (
                <Reveal as="li" key={lesson.title} delay={i * 60}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`${id}-${i}`}
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      className="group flex w-full items-start gap-3 text-left text-base font-bold"
                    >
                      <Icon
                        size={18}
                        className="mt-0.5 shrink-0 text-primary transition-transform duration-300 group-hover:rotate-90"
                      />
                      <span className="shrink-0 font-normal text-primary">Lesson {i + 1}.</span>
                      <span className="text-dark transition-colors group-hover:text-primary">
                        {lesson.title}
                      </span>
                    </button>
                  </h3>
                  {/* grid-rows 0fr → 1fr — плавное раскрытие без замера высоты */}
                  <div
                    id={`${id}-${i}`}
                    className={clsx(
                      'grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo',
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <p className="overflow-hidden pl-[30px] text-sm text-gray-700">
                      <span className="block pt-3">{lesson.text}</span>
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
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
