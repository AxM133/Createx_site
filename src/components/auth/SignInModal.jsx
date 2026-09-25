import { useAuthModal } from '@/hooks/useAuthModal'

/**
 * Sign in — содержимое модалки входа
 * Разработчик: Али
 *
 * Модалка (фон, крестик, Esc) уже готова в @/components/ui/Modal,
 * здесь нужно сверстать только содержимое по макету «Sign in»:
 *  - заголовок + описание
 *  - Email, Password (с кнопкой показать/скрыть пароль)
 *  - Keep me signed in, Forgot password?
 *  - кнопка Sign in
 *  - «Don't have an account? Sign up» → openSignUp()
 *  - «Or sign in with» + иконки соцсетей
 *
 * Можно использовать: @/components/ui/Input, Button
 */
export default function SignInModal() {
  const { openSignUp } = useAuthModal()

  return (
    <div className="p-12 text-center">
      <h2 id="auth-modal-title" className="text-3xl">
        Sign in
      </h2>
      <p className="mt-4 text-gray-700">
        В разработке — <b className="text-primary">Али</b>
      </p>
      <p className="mt-8 text-sm">
        Don&apos;t have an account?{' '}
        <button type="button" onClick={openSignUp} className="text-primary hover:underline">
          Sign up
        </button>
      </p>
    </div>
  )
}
