import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ROUTES } from '@/router/paths'

/** Логотип CREATEX. variant="light" — для тёмного фона (футер) */
export default function Logo({ variant = 'dark', className }) {
  return (
    <Link
      to={ROUTES.home}
      aria-label="Createx — на главную"
      className={clsx(
        'inline-flex items-center text-2xl font-black tracking-[0.08em]',
        variant === 'light' ? 'text-white' : 'text-dark',
        className,
      )}
    >
      CREATE
      <svg viewBox="0 0 20 22" className="h-[0.8em] w-[0.75em]" aria-hidden="true">
        <path
          d="M2 2l7 9-7 9M11 2l7 9-7 9"
          fill="none"
          stroke="#FF3F3A"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}
