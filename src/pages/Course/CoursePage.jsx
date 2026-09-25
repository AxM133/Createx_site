import { useParams } from 'react-router-dom'
import PagePlaceholder from '@/components/ui/PagePlaceholder'

/**
 * Single Course — страница курса
 * Разработчик: не назначен
 */
export default function CoursePage() {
  const { courseId } = useParams()

  return (
    <PagePlaceholder
      title={`Course #${courseId}`}
      developer="Не назначен"
      route="/courses/:courseId"
      design="Single Course (User Experience...)"
    />
  )
}
