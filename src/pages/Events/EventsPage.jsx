import PagePlaceholder from '@/components/ui/PagePlaceholder'

/**
 * Events — список событий (Grid View)
 * Разработчик: Бахтовар
 */
export default function EventsPage() {
  return (
    <PagePlaceholder
      title="Events — Lectures, workshops & master-classes"
      developer="Бахтовар"
      route="/events"
      design="Events Grid View (+ переключатель на List View)"
      tasks={[
        'Заголовок «Our events / Lectures, workshops & master-classes»',
        'Фильтры: Event category, Sort by, Show N per page, поиск',
        'Переключатель List / Grid view',
        'Сетка карточек событий 3 в ряд, кнопка View more',
        'Пагинация',
        'Subscribe секция внизу',
      ]}
      reuse={[
        '@/data/events',
        '@/components/cards/EventRow (List view — уже готов)',
        '@/components/sections/SubscribeSection',
        '@/components/ui/SectionHeading, Button',
      ]}
    />
  )
}
