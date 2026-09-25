import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'

/**
 * Базовая модалка: затемнение фона, закрытие по Esc / клику по фону / крестику.
 * <Modal open={open} onClose={close}>...</Modal>
 */
export default function Modal({ open, onClose, children, labelledBy }) {
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

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-dark/70 p-4 sm:items-center"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="relative w-full max-w-[486px] rounded bg-white shadow-card"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 text-gray-800 transition-colors hover:text-primary"
        >
          <HiXMark size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
