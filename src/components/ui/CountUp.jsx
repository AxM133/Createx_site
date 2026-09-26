import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t))

/** Число, которое «набегает» от 0 до `to`, когда попадает в экран: <CountUp to={1200} /> */
export default function CountUp({ to, duration = 2200, delay = 0, className }) {
  const [ref, inView] = useInView()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = reduced ? 0 : duration
    let raf
    let start

    const tick = (now) => {
      start ??= now
      const progress = total ? Math.min((now - start) / total, 1) : 1
      setValue(Math.round(to * easeOutExpo(progress)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    const timeout = setTimeout(() => (raf = requestAnimationFrame(tick)), reduced ? 0 : delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [inView, to, duration, delay])

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{value}</span>
      <span className="sr-only">{to}</span>
    </span>
  )
}
