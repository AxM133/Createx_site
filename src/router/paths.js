/**
 * Все пути сайта в одном месте.
 * В компонентах используйте ROUTES.blog, а не строку '/blog'.
 */
export const ROUTES = {
  home: '/',
  about: '/about',
  courses: '/courses',
  course: (id = ':courseId') => `/courses/${id}`,
  events: '/events',
  event: (id = ':eventId') => `/events/${id}`,
  blog: '/blog',
  post: (id = ':postId') => `/blog/${id}`,
  contacts: '/contacts',
}

/** Пункты меню в Header и Footer */
export const NAV_LINKS = [
  { label: 'About Us', to: ROUTES.about },
  { label: 'Courses', to: ROUTES.courses },
  { label: 'Events', to: ROUTES.events },
  { label: 'Blog', to: ROUTES.blog },
  { label: 'Contacts', to: ROUTES.contacts },
]
