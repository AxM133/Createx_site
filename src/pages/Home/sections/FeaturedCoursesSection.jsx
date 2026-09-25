import CourseCard from '@/components/cards/CourseCard'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { courses } from '@/data/courses'
import { ROUTES } from '@/router/paths'

export default function FeaturedCoursesSection() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Ready to learn?" title="Featured Courses" align="left" />
          <Button to={ROUTES.courses} variant="outline">
            View all courses
          </Button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  )
}
