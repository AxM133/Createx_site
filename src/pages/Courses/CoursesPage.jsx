import PagePlaceholder from '@/components/ui/PagePlaceholder'

/**
 * Courses — список курсов
 * Разработчик: не назначен
 */
export default function CoursesPage() {
  return (
    <PagePlaceholder
      title="Our online courses"
      developer="Не назначен"
      route="/courses"
      design="Courses"
      reuse={[
        '@/components/cards/CourseCard + @/data/courses',
        '@/components/sections/TestimonialsSection, CertificateSection, SubscribeSection',
      ]}
    />
  )
}
