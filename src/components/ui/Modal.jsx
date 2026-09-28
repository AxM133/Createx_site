import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'

/**
 * Базовая модалка: затемнение фона, закрытие по Esc / клику по фону / крестику.
 * <Modal open={open} onClose={close}>...</Modal>
 * Открывается и закрывается с анимацией: после open=false модалка остаётся в DOM, пока играет выход.
 */
export default function Modal({
  open,
  onClose,
  children,
  labelledBy,
  className = 'max-w-[486px]',
}) {
  const [rendered, setRendered] = useState(open)
  if (open && !rendered) setRendered(true)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!rendered) return null

  return createPortal(
    <div
      data-state={open ? 'open' : 'closed'}
      className="group/modal fixed inset-0 z-50 flex animate-backdrop-in items-start justify-center overflow-y-auto bg-dark/70 p-4 backdrop-blur-sm data-[state=closed]:pointer-events-none data-[state=closed]:animate-backdrop-out sm:items-center"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      onAnimationEnd={(e) => e.target === e.currentTarget && !open && setRendered(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={clsx(
          'relative w-full animate-modal-in rounded bg-white shadow-card group-data-[state=closed]/modal:animate-modal-out',
          className,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 z-10 text-gray-800 transition-[color,rotate] duration-300 hover:rotate-90 hover:text-primary"
        >
          <HiXMark size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
