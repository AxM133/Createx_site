import clsx from 'clsx'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

/** Стрелки слайдера (← →), как в секциях Team / You may also like */
export default function SliderArrows({ onPrev, onNext, className }) {
  const base = 'grid size-11 place-items-center rounded-full transition-colors'
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous"
        className={clsx(base, 'text-dark hover:bg-gray-400')}
      >
        <HiArrowLeft size={20} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next"
        className={clsx(base, 'bg-primary text-white shadow-lg shadow-primary/30 hover:opacity-90')}
      >
        <HiArrowRight size={20} />
      </button>
    </div>
  )
}
