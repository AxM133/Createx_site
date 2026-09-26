import { Link } from 'react-router-dom'
import clsx from 'clsx'

// btn-shine / btn-fill — анимации наведения, описаны в src/index.css
const variants = {
  primary:
    'btn-shine bg-gradient-primary text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30',
  outline:
    'btn-fill border border-primary text-primary [--btn-fill:var(--color-primary)] hover:text-white',
  'outline-gray':
    'btn-fill border border-gray-800 text-gray-800 [--btn-fill:var(--color-gray-800)] hover:text-white',
  white: 'btn-shine bg-white text-primary hover:-translate-y-0.5 hover:shadow-lg',
}

const sizes = {
  sm: 'h-10 px-6 text-sm',
  md: 'h-11 px-8 text-sm',
  lg: 'h-13 px-10 text-base',
}

/**
 * Кнопка из дизайна Createx.
 * <Button>Text</Button>, <Button to="/blog">Link</Button>, <Button href="https://..">External</Button>
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  children,
  ...props
}) {
  const classes = clsx(
    'relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded font-bold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,translate,scale] duration-300 ease-out-expo active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
