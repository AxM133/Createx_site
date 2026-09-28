import { usePointerVars } from '@/hooks/usePointerVars'

export default function CourseHeroSection({ title }) {
  const pointer = usePointerVars()

  return (
    <section {...pointer} className="relative overflow-hidden bg-gradient-pink py-16 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 size-96 parallax-30">
          <div className="size-full animate-drift rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="absolute -bottom-32 -left-32 size-80 -parallax-30">
          <div className="size-full animate-drift rounded-full bg-accent-yellow/20 blur-3xl [animation-delay:-9s]" />
        </div>
      </div>

      <div className="relative container-site text-center">
        <p className="animate-fade-up text-sm font-bold tracking-wider text-primary uppercase">
          Course
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl animate-fade-up text-3xl leading-tight [animation-delay:120ms] md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  )
}
