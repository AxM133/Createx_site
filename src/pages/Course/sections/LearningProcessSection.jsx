import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { courseDetails } from '@/data/courseDetails'

export default function LearningProcessSection() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <SectionHeading eyebrow="Main steps" title="Online learning process" />

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {courseDetails.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="group">
              <div className="flex items-center gap-3">
                {/* При наведении номер «заливается» красным, как активный шаг в макете */}
                <span className="relative grid size-16 shrink-0 place-items-center">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 scale-0 rounded-full bg-primary/10 transition-transform duration-500 ease-spring group-hover:scale-100"
                  />
                  <span className="relative text-5xl font-black text-gray-500 transition-colors duration-300 group-hover:text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 origin-left bg-gray-500 transition-colors duration-300 group-hover:bg-primary/40"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
