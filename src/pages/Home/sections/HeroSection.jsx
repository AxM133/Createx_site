import { HiPlay } from 'react-icons/hi2'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/router/paths'
import { unsplash } from '@/utils/image'

const STATS = [
  { value: '1200', label: 'Students graduated' },
  { value: '84', label: 'Completed courses' },
  { value: '16', label: 'Qualified tutors' },
  { value: '5', label: 'Years of experience' },
]

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-pink pt-20 lg:pt-[92px]">
      <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <button type="button" className="group flex items-center gap-4 font-bold text-dark">
            <span className="grid size-14 place-items-center rounded-full bg-primary text-white ring-8 ring-primary/20 transition-transform group-hover:scale-105">
              <HiPlay size={22} />
            </span>
            Play showreel
          </button>

          <h1 className="mt-10 text-4xl leading-[1.15] sm:text-5xl lg:text-7xl">
            Enjoy studying with Createx Online Courses
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to={ROUTES.about} variant="outline" size="lg">
              About us
            </Button>
            <Button to={ROUTES.courses} size="lg">
              Explore courses
            </Button>
          </div>
        </div>

        {/* TODO: заменить на иллюстрацию из Figma */}
        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rotate-3 rounded-[40px] bg-primary/10"
          />
          <img
            src={unsplash('1522202176988-66273c2fd55f', 900)}
            alt="Students studying online"
            className="relative aspect-square w-full rounded-[32px] object-cover"
          />
        </div>
      </div>

      <div className="container-site">
        <ul className="grid grid-cols-2 gap-8 border-t border-dark/10 py-12 lg:flex lg:items-center lg:justify-between">
          {STATS.map((stat, i) => (
            <li key={stat.label} className="flex items-center gap-4">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden size-1.5 rounded-full bg-primary lg:mr-12 lg:block xl:mr-20"
                />
              )}
              <span className="text-4xl font-black text-dark lg:text-5xl">{stat.value}</span>
              <span className="text-gray-800 lg:text-lg">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
