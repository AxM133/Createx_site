import { useParams } from 'react-router-dom'
import PagePlaceholder from '@/components/ui/PagePlaceholder'

/**
 * Single Post — страница отдельного поста блога
 * Разработчик: Шукрулло
 */
export default function PostPage() {
  const { postId } = useParams()

  return (
    <PagePlaceholder
      title={`Single Post #${postId}`}
      developer="Шукрулло"
      route="/blog/:postId"
      design="Single Post (HR statistics...)"
      tasks={[
        'Найти пост по postId в @/data/posts, если не найден — показать 404',
        'Шапка поста: тип, категория, заголовок, дата, время чтения, Share',
        'Контент: картинка, текст, цитата, список, теги',
        'Сайдбар: поиск, Author, Trending articles, Tags',
        'Блок подписки «Want to get the best articles weekly?»',
        'You may also like (слайдер постов) + «Go to blog»',
      ]}
      reuse={[
        '@/components/cards/PostCard + @/data/posts',
        '@/components/ui/SliderArrows, SocialLinks, Button',
      ]}
    />
  )
}
