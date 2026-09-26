import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Прокручивает страницу наверх при смене роута */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // instant — иначе html { scroll-behavior: smooth } прокручивает страницу анимированно
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
