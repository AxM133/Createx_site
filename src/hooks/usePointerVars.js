import { useCallback, useRef } from 'react'

/**
 * Пишет позицию мыши над элементом в CSS-переменные — для утилит parallax-*, tilt, glare.
 *  --mx, --my: от -0.5 до 0.5 (центр = 0)
 *  --px, --py: от 0% до 100%
 *
 * const pointer = usePointerVars()
 * <section {...pointer}>...</section>
 */
export function usePointerVars() {
  const ref = useRef(null)

  const onPointerMove = useCallback((e) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const { style } = ref.current
    style.setProperty('--mx', (x - 0.5).toFixed(3))
    style.setProperty('--my', (y - 0.5).toFixed(3))
    style.setProperty('--px', `${(x * 100).toFixed(1)}%`)
    style.setProperty('--py', `${(y * 100).toFixed(1)}%`)
  }, [])

  const onPointerLeave = useCallback(() => {
    ref.current?.style.setProperty('--mx', '0')
    ref.current?.style.setProperty('--my', '0')
  }, [])

  return { ref, onPointerMove, onPointerLeave }
}
