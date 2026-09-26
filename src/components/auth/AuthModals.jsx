import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import { useAuthModal } from '@/hooks/useAuthModal'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

/** Переключатель модалок авторизации. Подключён в MainLayout — менять не нужно. */
export default function AuthModals() {
  const { mode, close } = useAuthModal()

  // Помним последний режим, чтобы содержимое не пропадало во время анимации закрытия
  const [lastMode, setLastMode] = useState(mode)
  if (mode !== null && mode !== lastMode) setLastMode(mode)
  const shown = mode ?? lastMode

  return (
    <Modal open={mode !== null} onClose={close} labelledBy="auth-modal-title">
      <div key={shown} className="animate-fade-in">
        {shown === 'signin' && <SignInModal />}
        {shown === 'signup' && <SignUpModal />}
      </div>
    </Modal>
  )
}
