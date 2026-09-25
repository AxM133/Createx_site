import { useState } from 'react'
import clsx from 'clsx'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

/** «What our students say» — главная, About Us, Courses, Course */
export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const item = testimonials[index]
  const go = (step) => setIndex((i) => (i + step + testimonials.length) % testimonials.length)

  return (
    <section className="bg-gray-300 py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Testimonials" title="What our students say" />

        <div className="mt-12 flex items-center gap-4 lg:gap-10">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="hidden size-11 shrink-0 place-items-center rounded-full text-dark transition-colors hover:bg-gray-400 sm:grid"
          >
            <HiArrowLeft size={20} />
          </button>

          <figure className="mx-auto w-full max-w-[800px] rounded bg-white p-8 shadow-card-sm md:p-12">
            <blockquote className="relative pl-10 text-lg leading-relaxed text-gray-800">
              <span className="absolute top-0 left-0 font-serif text-5xl leading-none text-primary">
                “
              </span>
              {item.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4 pl-10">
              <img src={item.photo} alt="" className="size-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-dark">{item.name}</p>
                <p className="text-sm text-gray-700">{item.position}</p>
              </div>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="hidden size-11 shrink-0 place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-opacity hover:opacity-90 sm:grid"
          >
            <HiArrowRight size={20} />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={clsx(
                'h-1 w-8 rounded transition-colors',
                i === index ? 'bg-dark' : 'bg-gray-600',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
