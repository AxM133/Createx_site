import { useEffect, useRef, useState } from 'react'

/**
 * Следит, виден ли элемент на экране.
 * const [ref, inView] = useInView()               — срабатывает один раз
 * const [ref, inView] = useInView({ once: false }) — true/false при каждом входе/выходе
 */
export function useInView({ once = true, rootMargin = '0px 0px -8% 0px', threshold = 0.12 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return [ref, inView]
}
