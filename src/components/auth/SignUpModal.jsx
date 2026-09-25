import { useAuthModal } from '@/hooks/useAuthModal'

/**
 * Sign up — содержимое модалки регистрации
 * Разработчик: Али
 *
 * Модалка (фон, крестик, Esc) уже готова в @/components/ui/Modal,
 * здесь нужно сверстать только содержимое по макету «Sign up»:
 *  - заголовок + описание
 *  - Full Name, Email, Password, Confirm Password (показать/скрыть пароль)
 *  - Remember me
 *  - кнопка Sign up
 *  - «Already have an account? Sign in» → openSignIn()
 *  - «Or sign in with» + иконки соцсетей
 *  - валидация: пароли совпадают, email корректный
 *
 * Можно использовать: @/components/ui/Input, Button
 */
export default function SignUpModal() {
  const { openSignIn } = useAuthModal()

  return (
    <div className="p-12 text-center">
      <h2 id="auth-modal-title" className="text-3xl">
        Sign up
      </h2>
      <p className="mt-4 text-gray-700">
        В разработке — <b className="text-primary">Али</b>
      </p>
      <p className="mt-8 text-sm">
        Already have an account?{' '}
        <button type="button" onClick={openSignIn} className="text-primary hover:underline">
          Sign in
        </button>
      </p>
    </div>
  )
}
