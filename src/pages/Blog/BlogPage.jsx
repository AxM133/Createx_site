import PagePlaceholder from '@/components/ui/PagePlaceholder'

/**
 * Blog — общая страница со списком постов
 * Разработчик: Бахтовар
 */
export default function BlogPage() {
  return (
    <PagePlaceholder
      title="Blog — Createx School Journal"
      developer="Бахтовар"
      route="/blog"
      design="Blog (Createx School Journal)"
      tasks={[
        'Заголовок «Our blog / Createx School Journal»',
        'Табы: All / Articles / Videos / Podcasts',
        'Фильтр Blog category + поиск',
        'Сетка постов (3 колонки, во 2-м ряду широкая карточка 2/3)',
        'Пагинация',
        'Блок подписки «Want to get the best articles weekly?»',
      ]}
      reuse={[
        '@/components/cards/PostCard + @/data/posts',
        '@/components/ui/SectionHeading, Button',
      ]}
    />
  )
}
