import { Outlet, useLocation, useMatches } from 'react-router-dom'
import clsx from 'clsx'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import AuthModals from '@/components/auth/AuthModals'
import { AuthModalProvider } from '@/context/AuthModalProvider'

export default function MainLayout() {
  // Страницы с цветным hero под шапкой: handle: { headerOverlay: true } в роутере
  const headerOverlay = useMatches().some((match) => match.handle?.headerOverlay)
  const { pathname } = useLocation()

  return (
    <AuthModalProvider>
      <ScrollToTop />
      {/* overflow-x-clip: анимации «выезда» сбоку не дают горизонтальный скролл (и не ломают sticky) */}
      <div className="flex min-h-screen flex-col overflow-x-clip">
        <Header overlay={headerOverlay} />
        {/* При overlay контент заезжает под шапку — в hero нужен верхний отступ (pt-20 lg:pt-[92px]) */}
        <main className={clsx('flex-1', headerOverlay && '-mt-20 lg:-mt-[92px]')}>
          {/* key — чтобы при смене страницы заново проигрывалась анимация появления */}
          <div key={pathname} className="animate-page-in">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
      <AuthModals />
    </AuthModalProvider>
  )
}
