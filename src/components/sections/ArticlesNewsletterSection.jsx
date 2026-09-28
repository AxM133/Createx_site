import { useState } from 'react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import illustration from '@/components/assets/images/shukrullo/about/illustration4.png'

/** «Want to get the best articles weekly?» — Blog и Single Post */
export default function ArticlesNewsletterSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section className="overflow-hidden bg-gray-300 pt-14 lg:pt-20">
      <div className="container-site grid items-end gap-10 md:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal effect="right" className="hidden md:block">
          <img src={illustration} alt="" loading="lazy" className="mx-auto w-full max-w-md" />
        </Reveal>
        <Reveal effect="left" delay={150} className="self-center pb-14 lg:pb-20">
          <h2 className="max-w-lg text-2xl leading-tight font-black md:text-3xl">
            Want to get the best articles weekly? Subscribe to our newsletter!
          </h2>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Your email</span>
                <input
                  type="email"
                  required
                  placeholder="Your working email"
                  className="h-11 w-full rounded border border-gray-500 bg-white px-4 text-sm outline-none placeholder:text-gray-600 focus:border-primary"
                />
              </label>
              <Button type="submit">Subscribe</Button>
            </div>
            <label className="mt-4 flex items-start gap-2 text-sm text-gray-800">
              <input type="checkbox" required defaultChecked className="mt-1 accent-primary" />I
              agree to receive communications from Createx Online School
            </label>
          </form>
          {sent && (
            <p className="mt-3 animate-fade-up text-sm text-gray-800" role="status">
              Thank you! You are subscribed.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
