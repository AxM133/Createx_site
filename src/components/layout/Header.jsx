import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { HiOutlineUser } from 'react-icons/hi2'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { NAV_LINKS, ROUTES } from '@/router/paths'
import { useAuthModal } from '@/hooks/useAuthModal'

// Подчёркивание «вырастает» слева при наведении и остаётся у активной ссылки
const navLinkClass = ({ isActive }) =>
  clsx(
    'relative py-1 font-bold transition-colors hover:text-primary',
    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:rounded after:bg-gradient-primary after:transition-transform after:duration-500 after:ease-out-expo hover:after:origin-left hover:after:scale-x-100',
    isActive ? 'text-primary after:scale-x-100' : 'text-dark',
  )

const burgerLine =
  'absolute left-0 h-0.5 w-full rounded bg-current transition-all duration-500 ease-out-expo'

/**
 * overlay — шапка прозрачная поверх hero-блока страницы (пока не начали скроллить).
 * Включается через `handle: { headerOverlay: true }` у роута в src/router/index.jsx.
 *
 * При скролле вниз шапка прячется, при скролле вверх — возвращается.
 * Снизу — полоска прогресса прокрутки страницы.
 */
export default function Header({ overlay = false }) {
  const { openSignIn } = useAuthModal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const progressRef = useRef(null)
  const { pathname } = useLocation()

  // Закрываем мобильное меню при переходе на другую страницу
  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      setScrolled(y > 10)
      if (Math.abs(y - lastY) > 8) {
        setHidden(y > lastY && y > 400)
        lastY = y
      }
      const max = document.documentElement.scrollHeight - window.innerHeight
      progressRef.current?.style.setProperty('--progress', max > 0 ? String(y / max) : '0')
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 animate-header-in transition-[background-color,box-shadow,translate] duration-500 ease-out-expo focus-within:translate-y-0',
        overlay && !scrolled && !menuOpen ? 'bg-transparent' : 'bg-white',
        (scrolled || menuOpen) && 'shadow-card-sm',
        hidden && !menuOpen && '-translate-y-full',
      )}
    >
      <div className="container-site flex h-20 items-center gap-10 lg:h-[92px]">
        <Logo />

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={navLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-10 lg:flex">
          <Button to={ROUTES.contacts}>Get consultation</Button>
          <button
            type="button"
            onClick={openSignIn}
            className="group flex items-center gap-2 font-bold text-dark transition-colors hover:text-primary"
          >
            <HiOutlineUser
              size={20}
              className="transition-transform duration-500 ease-spring group-hover:scale-125"
            />
            Log in / Register
          </button>
        </div>

        <button
          type="button"
          className="-mr-2 ml-auto grid size-10 place-items-center text-dark lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {/* Бургер, который превращается в крестик */}
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span className={clsx(burgerLine, menuOpen ? 'top-[7px] rotate-45' : 'top-0')} />
            <span className={clsx(burgerLine, 'top-[7px]', menuOpen && 'scale-x-0 opacity-0')} />
            <span className={clsx(burgerLine, menuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]')} />
          </span>
        </button>
      </div>

      {/* Мобильное меню: плавно раскрывается по высоте, пункты появляются лесенкой */}
      <div
        inert={!menuOpen}
        className={clsx(
          'grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo lg:hidden',
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-400 bg-white">
            <nav className="container-site flex flex-col gap-4 py-6" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={{ transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms' }}
                  className={(state) =>
                    clsx(
                      navLinkClass(state),
                      'self-start transition-[color,opacity,translate] duration-500 ease-out-expo',
                      menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to={ROUTES.contacts} className="mt-2">
                Get consultation
              </Button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  openSignIn()
                }}
                className="flex items-center justify-center gap-2 font-bold text-dark"
              >
                <HiOutlineUser size={20} />
                Log in / Register
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Прогресс прокрутки страницы */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className={clsx(
          'pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left [transform:scaleX(var(--progress,0))] bg-gradient-primary transition-opacity duration-300',
          scrolled ? 'opacity-100' : 'opacity-0',
        )}
      />
    </header>
  )
}
