import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { HiOutlineUser, HiBars3, HiXMark } from 'react-icons/hi2'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { NAV_LINKS, ROUTES } from '@/router/paths'
import { useAuthModal } from '@/hooks/useAuthModal'

const navLinkClass = ({ isActive }) =>
  clsx('font-bold transition-colors hover:text-primary', isActive ? 'text-primary' : 'text-dark')

/**
 * overlay — шапка прозрачная поверх hero-блока страницы (пока не начали скроллить).
 * Включается через `handle: { headerOverlay: true }` у роута в src/router/index.jsx.
 */
export default function Header({ overlay = false }) {
  const { openSignIn } = useAuthModal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Закрываем мобильное меню при переходе на другую страницу
  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 transition-[background-color,box-shadow] duration-300',
        overlay && !scrolled && !menuOpen ? 'bg-transparent' : 'bg-white',
        (scrolled || menuOpen) && 'shadow-card-sm',
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
            className="flex items-center gap-2 font-bold text-dark transition-colors hover:text-primary"
          >
            <HiOutlineUser size={20} />
            Log in / Register
          </button>
        </div>

        <button
          type="button"
          className="ml-auto text-dark lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="border-t border-gray-400 bg-white lg:hidden">
          <nav className="container-site flex flex-col gap-4 py-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
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
      )}
    </header>
  )
}
