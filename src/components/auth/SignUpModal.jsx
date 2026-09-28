import { useState } from 'react'
import { useAuthModal } from '@/hooks/useAuthModal'

export default function SignUpModal() {
  const { openSignIn } = useAuthModal()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="w-full max-w-[400px] overflow-hidden rounded-[4px] bg-white text-[#1e212c] shadow-2xl">
      <div className="px-8 pt-7 pb-5">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[28px] leading-tight font-bold text-[#1e212c]">Sign up</h2>

          <p className="mx-auto mt-3 max-w-[310px] text-[12px] leading-[17px] text-[#787A80]">
            Registration takes less than a minute but gives you full control over your studying.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="signup-name"
              className="mb-2 block text-[12px] font-medium text-[#424551]"
            >
              Full Name
            </label>

            <input
              id="signup-name"
              type="text"
              placeholder="Your full name"
              required
              className="h-[40px] w-full rounded-[4px] border border-[#D7DADD] px-3 text-[12px] text-[#424551] transition outline-none placeholder:text-[#9A9CA3] focus:border-[#FF3F3A] focus:ring-2 focus:ring-[#FF3F3A]/10"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label
              htmlFor="signup-email"
              className="mb-2 block text-[12px] font-medium text-[#424551]"
            >
              Email
            </label>

            <input
              id="signup-email"
              type="email"
              placeholder="Your working email"
              required
              className="h-[40px] w-full rounded-[4px] border border-[#D7DADD] px-3 text-[12px] text-[#424551] transition outline-none placeholder:text-[#9A9CA3] focus:border-[#FF3F3A] focus:ring-2 focus:ring-[#FF3F3A]/10"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label
              htmlFor="signup-password"
              className="mb-2 block text-[12px] font-medium text-[#424551]"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="signup-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
                className="h-[40px] w-full rounded-[4px] border border-[#D7DADD] px-3 pr-11 text-[12px] text-[#424551] transition outline-none placeholder:text-[#9A9CA3] focus:border-[#FF3F3A] focus:ring-2 focus:ring-[#FF3F3A]/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-[#787A80] hover:text-[#FF3F3A]"
              >
                {showPassword ? (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.9 4.3A10.8 10.8 0 0 1 12 4c5 0 8.7 4 10 8a14.8 14.8 0 0 1-3.2 5.1" />
                  </svg>
                ) : (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <label
              htmlFor="signup-confirm-password"
              className="mb-2 block text-[12px] font-medium text-[#424551]"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
                id="signup-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                required
                className="h-[40px] w-full rounded-[4px] border border-[#D7DADD] px-3 pr-11 text-[12px] text-[#424551] transition outline-none placeholder:text-[#9A9CA3] focus:border-[#FF3F3A] focus:ring-2 focus:ring-[#FF3F3A]/10"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-[#787A80] hover:text-[#FF3F3A]"
              >
                {showConfirmPassword ? (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.9 4.3A10.8 10.8 0 0 1 12 4c5 0 8.7 4 10 8a14.8 14.8 0 0 1-3.2 5.1" />
                  </svg>
                ) : (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember */}
          <label className="mt-4 flex cursor-pointer items-center gap-2 text-[11px] text-[#424551]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-[13px] w-[13px] accent-[#FF3F3A]"
            />
            Remember me
          </label>

          {/* Sign up */}
          <button
            type="submit"
            className="mt-4 h-[44px] w-full rounded-[4px] bg-[#FF3F3A] text-[12px] font-semibold text-white transition hover:bg-[#E93631] active:scale-[0.99]"
          >
            Sign up
          </button>
        </form>

        {/* Sign in */}
        <p className="mt-4 text-[11px] text-[#424551]">
          Already have an account?{' '}
          <button
            type="button"
            onClick={openSignIn}
            className="font-medium text-[#FF3F3A] hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>

      {/* Social */}
      <div className="border-t border-[#E5E8ED] px-8 py-4">
        <p className="text-center text-[11px] text-[#787A80]">Or sign in with</p>

        <div className="mt-3 flex items-center justify-center gap-4">
          <button type="button" className="text-[#787A80] transition hover:text-[#1877F2]">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
            </svg>
          </button>

          <button type="button" className="text-[#787A80] transition hover:text-[#4285F4]">
            <svg width="17" height="17" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21.8 12.2c0-.7-.1-1.5-.2-2.2H12v4.1h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.6Z"
              />
              <path
                fill="currentColor"
                d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3v2.7A10.1 10.1 0 0 0 12 22Z"
              />
              <path
                fill="currentColor"
                d="M6.4 13.8A6.1 6.1 0 0 1 6 12c0-.6.1-1.2.4-1.8V7.5H3A10 10 0 0 0 2 12c0 1.6.4 3.1 1 4.5l3.4-2.7Z"
              />
              <path
                fill="currentColor"
                d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 2.9 14.7 2 12 2 8.1 2 4.7 4.2 3 7.5l3.4 2.7C7.2 7.8 9.4 6 12 6Z"
              />
            </svg>
          </button>

          <button type="button" className="text-[#787A80] transition hover:text-[#1DA1F2]">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.9c0 .3 0 .6.1.9-3.3-.2-6.2-1.7-8.2-4.1-.4.6-.6 1.3-.6 2 0 1.4.7 2.6 1.7 3.3-.6 0-1.2-.2-1.7-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.7 2 2.9 3.8 2.9A8 8 0 0 1 2 19.3 11.3 11.3 0 0 0 8.1 21c7.3 0 11.3-6 11.3-11.3v-.5c.8-.6 1.4-1.3 1.9-2.1Z" />
            </svg>
          </button>

          <button type="button" className="text-[#787A80] transition hover:text-[#0A66C2]">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.5 8.2H2.7V21h3.8V8.2ZM4.6 3A2.2 2.2 0 1 0 4.6 7.4 2.2 2.2 0 0 0 4.6 3ZM21.3 13.7c0-3.9-2.1-5.7-5-5.7-2.3 0-3.3 1.3-3.8 2.1V8.2H8.7V21h3.8v-6.3c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 2 2.1 3.5V21h4.2v-7.3Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
