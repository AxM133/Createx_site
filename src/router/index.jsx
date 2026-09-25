import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import { ROUTES } from './paths'

import HomePage from '@/pages/Home/HomePage'
import AboutPage from '@/pages/About/AboutPage'
import ContactsPage from '@/pages/Contacts/ContactsPage'
import CoursesPage from '@/pages/Courses/CoursesPage'
import CoursePage from '@/pages/Course/CoursePage'
import EventsPage from '@/pages/Events/EventsPage'
import EventPage from '@/pages/Event/EventPage'
import BlogPage from '@/pages/Blog/BlogPage'
import PostPage from '@/pages/Post/PostPage'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'

/**
 * Роутинг проекта. Все страницы уже зарегистрированы —
 * разработчикам НЕ нужно менять этот файл, только свои страницы в src/pages/.
 *
 * Sign in / Sign up — это модальные окна (см. src/components/auth),
 * открываются через useAuthModal(), а не через отдельный роут.
 */
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage />, handle: { headerOverlay: true } },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.courses, element: <CoursesPage /> },
      { path: ROUTES.course(), element: <CoursePage /> },
      { path: ROUTES.events, element: <EventsPage /> },
      { path: ROUTES.event(), element: <EventPage /> },
      { path: ROUTES.blog, element: <BlogPage /> },
      { path: ROUTES.post(), element: <PostPage /> },
      { path: ROUTES.contacts, element: <ContactsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
