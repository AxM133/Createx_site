import Modal from './Modal'
import { PROMO_VIDEO } from '@/data/contacts'

/** Модалка с видео: <VideoModal open={open} onClose={close} /> */
export default function VideoModal({
  open,
  onClose,
  src = PROMO_VIDEO,
  title = 'Createx showreel',
}) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="video-modal-title" className="max-w-4xl">
      <div className="p-4 pt-16 sm:p-6 sm:pt-16">
        <h2 id="video-modal-title" className="absolute top-6 left-6 text-xl">
          {title}
        </h2>
        {/* Видео монтируется только пока модалка открыта — при закрытии воспроизведение останавливается */}
        {open && (
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="aspect-video w-full rounded bg-dark"
          />
        )}
      </div>
    </Modal>
  )
}
