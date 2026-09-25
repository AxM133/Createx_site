import { HiOutlineCheckCircle } from 'react-icons/hi2'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/router/paths'
import { unsplash } from '@/utils/image'

const REASONS = [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
  'Tincidunt sagittis neque sem ac eget.',
  'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.',
]

export default function WhyCreatexSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        <img
          src={unsplash('1524504388940-b1c1722653e1', 1000)}
          alt="Student learning with a laptop"
          loading="lazy"
          className="aspect-[595/500] w-full rounded object-cover"
        />
        <div>
          <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">
            Who we are
          </p>
          <h2 className="text-3xl md:text-[46px]">Why Createx?</h2>
          <ul className="mt-8 space-y-3">
            {REASONS.map((reason) => (
              <li key={reason} className="flex gap-3 text-gray-800">
                <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-primary" size={20} />
                {reason}
              </li>
            ))}
          </ul>
          <Button to={ROUTES.about} className="mt-10">
            More about us
          </Button>
        </div>
      </div>
    </section>
  )
}
