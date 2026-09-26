import Button from '@/components/ui/Button'
import { ROUTES } from '@/router/paths'

export default function NotFoundPage() {
  return (
    <section className="container-site py-32 text-center">
      <p className="inline-block animate-zoom-in">
        <span className="inline-block text-shimmer animate-float text-8xl font-black md:text-9xl">
          404
        </span>
      </p>
      <h1 className="mt-4 animate-fade-up text-3xl [animation-delay:150ms]">Page not found</h1>
      <p className="mt-4 animate-fade-up text-gray-700 [animation-delay:250ms]">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-8 animate-fade-up [animation-delay:350ms]">
        <Button to={ROUTES.home}>Go to homepage</Button>
      </div>
    </section>
  )
}
