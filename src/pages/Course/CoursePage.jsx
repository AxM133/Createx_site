import { useParams } from 'react-router-dom'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { courses } from '@/data/courses'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import AboutCourseSection from './sections/AboutCourseSection'
import AlsoLikeSection from './sections/AlsoLikeSection'
import CourseHeroSection from './sections/CourseHeroSection'
import CuratorSection from './sections/CuratorSection'
import DiscountSection from './sections/DiscountSection'
import ForWhomSection from './sections/ForWhomSection'
import LearningProcessSection from './sections/LearningProcessSection'
import ProgramSection from './sections/ProgramSection'
import RegisterSection from './sections/RegisterSection'

/**
 * Single Course — страница курса
 */
export default function CoursePage() {
  const { courseId } = useParams()
  const course = courses.find((c) => String(c.id) === courseId)

  if (!course) return <NotFoundPage />

  return (
    <>
      <CourseHeroSection title={course.title} />
      <AboutCourseSection price={course.price} />
      <CuratorSection curator={course.author} />
      <LearningProcessSection />
      <DiscountSection />
      <ForWhomSection />
      <ProgramSection />
      <TestimonialsSection />
      <RegisterSection />
      <AlsoLikeSection currentId={course.id} />
    </>
  )
}
