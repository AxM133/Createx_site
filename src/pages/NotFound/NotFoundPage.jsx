import Button from '@/components/ui/Button'
import { ROUTES } from '@/router/paths'

export default function NotFoundPage() {
  return (
    <section className="container-site py-32 text-center">
      <p className="text-8xl font-black text-primary">404</p>
      <h1 className="mt-4 text-3xl">Page not found</h1>
      <p className="mt-4 text-gray-700">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Button to={ROUTES.home} className="mt-8">
        Go to homepage
      </Button>
    </section>
  )
}
