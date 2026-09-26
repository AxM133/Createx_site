import clsx from 'clsx'
import { useInView } from '@/hooks/useInView'

/**
 * Плавное появление при прокрутке.
 * <Reveal effect="up" delay={100}>...</Reveal>
 * effect: up | down | left | right | zoom | blur | clip
 * Для лесенки в сетке: delay={i * 100}
 */
export default function Reveal({
  as: Tag = 'div',
  effect = 'up',
  delay = 0,
  className,
  style,
  children,
  ...props
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      data-reveal={effect}
      className={clsx(inView && 'is-revealed', className)}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}
