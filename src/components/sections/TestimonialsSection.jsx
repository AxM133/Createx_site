import { useState } from 'react'
import clsx from 'clsx'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'
import { useInView } from '@/hooks/useInView'

const arrowClass =
  'group hidden size-11 shrink-0 place-items-center rounded-full transition-[background-color,box-shadow,scale] duration-300 ease-spring hover:scale-110 active:scale-90 sm:grid'

/**
 * «What our students say» — главная, About Us, Courses, Course
 * Автопрокрутка: таймер — это CSS-анимация полоски в активной точке (animate-progress).
 * Пауза при наведении/фокусе и когда секция вне экрана.
 */
export default function TestimonialsSection() {
  const [{ index, direction }, setSlide] = useState({ index: 0, direction: 1 })
  const [sliderRef, inView] = useInView({ once: false, threshold: 0.3 })
  const item = testimonials[index]

  const go = (step) =>
    setSlide((s) => ({
      index: (s.index + step + testimonials.length) % testimonials.length,
      direction: step,
    }))
  const goTo = (i) =>
    setSlide((s) => (i === s.index ? s : { index: i, direction: i > s.index ? 1 : -1 }))

  return (
    <section className="bg-gray-300 py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Testimonials" title="What our students say" />

        <div ref={sliderRef} data-paused={!inView} className="group/slider">
          <Reveal effect="zoom" delay={100} className="mt-12 flex items-center gap-4 lg:gap-10">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className={clsx(arrowClass, 'text-dark hover:bg-gray-400')}
            >
              <HiArrowLeft
                size={20}
                className="transition-transform group-hover:-translate-x-0.5"
              />
            </button>

            <figure className="mx-auto w-full max-w-[800px] overflow-hidden rounded bg-white p-8 shadow-card-sm transition-shadow duration-500 hover:shadow-card md:p-12">
              {/* key — при смене отзыва контент заново въезжает с нужной стороны */}
              <div
                key={index}
                className={direction > 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'}
              >
                <blockquote className="relative pl-10 text-lg leading-relaxed text-gray-800">
                  <span className="absolute top-0 left-0 inline-block animate-pop font-serif text-5xl leading-none text-primary [animation-delay:200ms]">
                    “
                  </span>
                  {item.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 pl-10">
                  <img
                    src={item.photo}
                    alt=""
                    className="size-12 animate-zoom-in rounded-full object-cover [animation-delay:150ms]"
                  />
                  <div>
                    <p className="font-bold text-dark">{item.name}</p>
                    <p className="text-sm text-gray-700">{item.position}</p>
                  </div>
                </figcaption>
              </div>
            </figure>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className={clsx(
                arrowClass,
                'bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50',
              )}
            >
              <HiArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </Reveal>

          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
                aria-current={i === index}
                className={clsx(
                  'relative h-1 overflow-hidden rounded bg-gray-600 transition-[width,background-color] duration-500 ease-out-expo',
                  i === index ? 'w-14' : 'w-8 hover:bg-gray-700',
                )}
              >
                {i === index && (
                  <span
                    key={index}
                    onAnimationEnd={() => go(1)}
                    className="absolute inset-0 origin-left animate-progress bg-dark group-focus-within/slider:[animation-play-state:paused] group-hover/slider:[animation-play-state:paused] group-data-[paused=true]/slider:[animation-play-state:paused] motion-reduce:animate-none"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
