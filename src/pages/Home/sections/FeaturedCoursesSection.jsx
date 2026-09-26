import CourseCard from '@/components/cards/CourseCard'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { courses } from '@/data/courses'
import { ROUTES } from '@/router/paths'

export default function FeaturedCoursesSection() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Ready to learn?" title="Featured Courses" align="left" />
          <Reveal effect="left" delay={150}>
            <Button to={ROUTES.courses} variant="outline">
              View all courses
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {courses.slice(0, 6).map((course, i) => (
            // grid — чтобы карточка растягивалась на всю высоту ячейки
            <Reveal key={course.id} delay={(i % 2) * 120} className="grid">
              <CourseCard course={course} variant="horizontal" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
