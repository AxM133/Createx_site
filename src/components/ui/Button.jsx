import { Link } from 'react-router-dom'
import clsx from 'clsx'

const variants = {
  primary: 'bg-gradient-primary text-white hover:opacity-90',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  'outline-gray': 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
  white: 'bg-white text-primary hover:bg-gray-300',
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
    'inline-flex items-center justify-center gap-2 rounded font-bold whitespace-nowrap transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60',
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
