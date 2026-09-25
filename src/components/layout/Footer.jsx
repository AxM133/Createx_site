import { Link } from 'react-router-dom'
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
  HiArrowRight,
  HiHeart,
} from 'react-icons/hi2'
import Logo from '@/components/ui/Logo'
import SocialLinks from '@/components/ui/SocialLinks'
import { NAV_LINKS, ROUTES } from '@/router/paths'
import { CONTACTS, COURSE_CATEGORIES } from '@/data/contacts'

function FooterTitle({ children }) {
  return (
    <h3 className="mb-6 text-base font-bold tracking-wider text-white uppercase">{children}</h3>
  )
}

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault()
    e.currentTarget.reset()
  }

  return (
    <footer className="bg-dark text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.8fr_0.9fr_1.3fr] lg:gap-10 lg:py-20">
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            Createx Online School is a leader in online studying. We have lots of courses and
            programs from the main market experts. We provide relevant approaches to online
            learning, internships and employment in the largest companies in the country.
          </p>
          <SocialLinks className="mt-8 text-white/60" />
        </div>

        <div>
          <FooterTitle>Site map</FooterTitle>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/60 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Courses</FooterTitle>
          <ul className="space-y-3">
            {COURSE_CATEGORIES.map((category) => (
              <li key={category}>
                <Link
                  to={`${ROUTES.courses}?category=${encodeURIComponent(category)}`}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Contact us</FooterTitle>
          <ul className="space-y-3">
            <li>
              <a
                href={`tel:${CONTACTS.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                <HiOutlineDevicePhoneMobile size={18} />
                {CONTACTS.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                <HiOutlineEnvelope size={18} />
                {CONTACTS.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <FooterTitle>Sign up to our newsletter</FooterTitle>
          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="h-11 w-full rounded border border-white/30 bg-white/10 pr-12 pl-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-white"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute top-0 right-0 grid h-11 w-11 place-items-center text-white hover:text-primary"
            >
              <HiArrowRight size={18} />
            </button>
          </form>
          <p className="mt-3 text-xs text-white/60">
            *Subscribe to our newsletter to receive communications and early updates from Createx
            SEO Agency.
          </p>
        </div>
      </div>

      <div className="bg-dark-light">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-sm sm:flex-row">
          <p className="flex items-center gap-1 text-white/60">
            © All rights reserved. Made with <HiHeart className="text-primary" /> by Createx Studio
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-bold tracking-wider text-white/60 uppercase transition-colors hover:text-white"
          >
            Go to top
          </button>
        </div>
      </div>
    </footer>
  )
}
