import { useParams } from 'react-router-dom'
import PagePlaceholder from '@/components/ui/PagePlaceholder'

/**
 * Single Event — страница события
 * Разработчик: не назначен
 */
export default function EventPage() {
  const { eventId } = useParams()

  return (
    <PagePlaceholder
      title={`Event #${eventId}`}
      developer="Не назначен"
      route="/events/:eventId"
      design="Single Event (Formation of the organizational structure...)"
    />
  )
}
