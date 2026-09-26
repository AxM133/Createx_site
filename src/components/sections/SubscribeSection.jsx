import { useState } from 'react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

/** «Subscribe to the Createx School announcements» — главная, About Us, Courses, Events */
export default function SubscribeSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section className="relative overflow-hidden bg-gradient-pink py-20 lg:py-28">
      <div className="relative z-10 container-site text-center">
        <Reveal>
          <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">
            Don’t miss anything
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight md:text-[46px]">
            Subscribe to the Createx School announcements
          </h2>
        </Reveal>
        <Reveal
          as="form"
          delay={150}
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Your working email"
            aria-label="Your working email"
            className="h-11 flex-1 rounded border border-gray-500 bg-white px-4 text-sm transition-[border-color,box-shadow] duration-300 outline-none placeholder:text-gray-600 focus:border-primary focus:ring-4 focus:ring-primary/15"
          />
          <Button type="submit">Subscribe</Button>
        </Reveal>
        {sent && (
          <p className="mt-4 animate-fade-up text-sm text-gray-800">
            Thank you! You are subscribed.
          </p>
        )}
      </div>
      {/* Декоративные «шапочки» из макета: заменить на иллюстрации из Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 size-64 animate-drift rounded-full bg-primary/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-10 size-64 animate-drift rounded-full bg-management/10 blur-2xl [animation-delay:-9s]"
      />
    </section>
  )
}
