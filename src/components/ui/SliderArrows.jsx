import clsx from 'clsx'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

/** Стрелки слайдера (← →), как в секциях Team / You may also like */
export default function SliderArrows({ onPrev, onNext, className }) {
  const base =
    'group grid size-11 place-items-center rounded-full transition-[background-color,box-shadow,scale] duration-300 ease-spring hover:scale-110 active:scale-90'
  const icon = 'transition-transform duration-300 ease-out-expo'
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous"
        className={clsx(base, 'text-dark hover:bg-gray-400')}
      >
        <HiArrowLeft size={20} className={clsx(icon, 'group-hover:-translate-x-0.5')} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next"
        className={clsx(
          base,
          'bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50',
        )}
      >
        <HiArrowRight size={20} className={clsx(icon, 'group-hover:translate-x-0.5')} />
      </button>
    </div>
  )
}
