import PagePlaceholder from '@/components/ui/PagePlaceholder'

/**
 * About Us
 * Разработчик: Шукрулло
 */
export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About Us"
      developer="Шукрулло"
      route="/about"
      design="About Us"
      tasks={[
        'Hero: «Createx Online School» + кнопки Explore events / Browse courses',
        'Блок с видео (Watch video) + статистика 1200 / 84 / 16 / 5',
        'Our core values (4 пункта)',
        'What do we teach (сетка направлений)',
        'That’s how we do it (шаги обучения)',
        'Meet our team (8 тьюторов)',
        'What our students say, Our students work here (логотипы)',
        'Latest posts, Subscribe',
      ]}
      reuse={[
        '@/components/cards/TeamCard + @/data/team',
        '@/components/cards/PostCard + @/data/posts',
        '@/components/sections/TestimonialsSection',
        '@/components/sections/SubscribeSection',
        '@/components/ui/SectionHeading, Button, Badge',
      ]}
    />
  )
}
