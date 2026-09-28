import Reveal from '@/components/ui/Reveal'
import { unsplash } from '@/utils/image'
import JoinCourseForm from '../components/JoinCourseForm'

export default function RegisterSection() {
  return (
    <section id="register" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        {/* TODO: заменить на иллюстрацию из Figma */}
        <Reveal effect="right" className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 size-2/3 animate-sway rounded-[40px] bg-management/10"
          />
          <img
            src={unsplash('1488190211105-8b0e65b80b4e', 900)}
            alt=""
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-[32px] object-cover shadow-card"
          />
        </Reveal>

        <Reveal effect="left" delay={150}>
          <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">
            Leave a request now and get 20% off!
          </p>
          <h2 className="text-3xl leading-tight md:text-[46px]">Register for the course</h2>
          <JoinCourseForm className="mt-8 max-w-md" />
        </Reveal>
      </div>
    </section>
  )
}
