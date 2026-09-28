import { useState } from 'react'
import { HiPlay } from 'react-icons/hi2'
import Button from '@/components/ui/Button'
import CountUp from '@/components/ui/CountUp'
import Reveal from '@/components/ui/Reveal'
import VideoModal from '@/components/ui/VideoModal'
import { usePointerVars } from '@/hooks/usePointerVars'
import { ROUTES } from '@/router/paths'
import { unsplash } from '@/utils/image'

const TITLE = 'Enjoy studying with Createx Online Courses'

const STATS = [
  { value: 1200, label: 'Students graduated' },
  { value: 84, label: 'Completed courses' },
  { value: 16, label: 'Qualified tutors' },
  { value: 5, label: 'Years of experience' },
]

export default function HeroSection() {
  // Слои с parallax-* сдвигаются за курсором
  const pointer = usePointerVars()
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section {...pointer} className="relative overflow-hidden bg-gradient-pink pt-20 lg:pt-[92px]">
      {/* Мягкие цветные пятна на фоне */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 size-140 parallax-30">
          <div className="size-full animate-drift rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="absolute -bottom-40 -left-40 size-120 -parallax-30">
          <div className="size-full animate-drift rounded-full bg-management/15 blur-3xl [animation-delay:-9s]" />
        </div>
      </div>

      <div className="relative container-site grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group flex animate-fade-up items-center gap-4 font-bold text-dark"
          >
            <span className="relative grid size-14 place-items-center rounded-full bg-primary text-white ring-8 ring-primary/20 transition-transform duration-500 ease-spring group-hover:scale-110">
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping-ring rounded-full bg-primary"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping-ring rounded-full bg-primary [animation-delay:1.2s]"
              />
              <HiPlay size={22} className="relative ml-0.5" />
            </span>
            <span className="transition-colors group-hover:text-primary">Play showreel</span>
          </button>

          {/* Каждое слово выезжает снизу из-под «маски» */}
          <h1 aria-label={TITLE} className="mt-10 text-4xl leading-[1.15] sm:text-5xl lg:text-7xl">
            {TITLE.split(' ').map((word, i) => (
              <span key={word} aria-hidden="true">
                <span className="mb-[-0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
                  <span
                    className="inline-block origin-bottom-left animate-word-up"
                    style={{ animationDelay: `${150 + i * 80}ms` }}
                  >
                    {word}
                  </span>
                </span>{' '}
              </span>
            ))}
          </h1>

          <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:700ms]">
            <Button to={ROUTES.about} variant="outline" size="lg">
              About us
            </Button>
            <Button to={ROUTES.courses} size="lg">
              Explore courses
            </Button>
          </div>
        </div>

        {/* TODO: заменить на иллюстрацию из Figma */}
        <div className="relative mx-auto w-full max-w-lg animate-zoom-in [animation-delay:300ms]">
          <div aria-hidden="true" className="absolute -inset-6 parallax-12">
            <div className="size-full animate-sway rounded-[40px] bg-primary/10" />
          </div>
          <div className="relative parallax-24">
            <img
              src={unsplash('1522202176988-66273c2fd55f', 900)}
              alt="Students studying online"
              className="aspect-square w-full animate-float rounded-[32px] object-cover shadow-card"
            />
          </div>

          {/* Декоративные «пузыри» вокруг картинки */}
          <span aria-hidden="true" className="absolute -top-3 left-10 parallax-50">
            <span className="block size-6 animate-float rounded-full bg-accent-yellow [animation-delay:-2s]" />
          </span>
          <span aria-hidden="true" className="absolute bottom-12 -left-8 parallax-60">
            <span className="block size-10 animate-float-slow rounded-full bg-marketing/80" />
          </span>
          <span aria-hidden="true" className="absolute top-1/3 -right-5 -parallax-40">
            <span className="block size-4 animate-float rounded-full bg-management [animation-delay:-4s]" />
          </span>
          <span aria-hidden="true" className="absolute -right-3 -bottom-4 -parallax-20">
            <span className="block size-8 animate-float-slow rounded-full bg-design/70 [animation-delay:-3s]" />
          </span>
        </div>
      </div>

      <div className="relative container-site">
        <ul className="grid grid-cols-2 gap-8 border-t border-dark/10 py-12 lg:flex lg:items-center lg:justify-between">
          {STATS.map((stat, i) => (
            <Reveal
              as="li"
              key={stat.label}
              delay={800 + i * 120}
              className="flex items-center gap-4"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden size-1.5 rounded-full bg-primary lg:mr-12 lg:block xl:mr-20"
                />
              )}
              <CountUp
                to={stat.value}
                delay={800 + i * 120}
                className="text-4xl font-black text-dark tabular-nums lg:text-5xl"
              />
              <span className="text-gray-800 lg:text-lg">{stat.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}
