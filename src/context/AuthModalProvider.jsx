import { useCallback, useMemo, useState } from 'react'
import { AuthModalContext } from './authModalContext'

/**
 * Управляет модалками авторизации.
 * mode: null | 'signin' | 'signup'
 */
export function AuthModalProvider({ children }) {
  const [mode, setMode] = useState(null)

  const openSignIn = useCallback(() => setMode('signin'), [])
  const openSignUp = useCallback(() => setMode('signup'), [])
  const close = useCallback(() => setMode(null), [])

  const value = useMemo(
    () => ({ mode, openSignIn, openSignUp, close }),
    [mode, openSignIn, openSignUp, close],
  )

  return <AuthModalContext.Provider value={value}>{children}</AuthModalContext.Provider>
}
