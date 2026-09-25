import Modal from '@/components/ui/Modal'
import { useAuthModal } from '@/hooks/useAuthModal'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

/** Переключатель модалок авторизации. Подключён в MainLayout — менять не нужно. */
export default function AuthModals() {
  const { mode, close } = useAuthModal()

  return (
    <Modal open={mode !== null} onClose={close} labelledBy="auth-modal-title">
      {mode === 'signin' && <SignInModal />}
      {mode === 'signup' && <SignUpModal />}
    </Modal>
  )
}
