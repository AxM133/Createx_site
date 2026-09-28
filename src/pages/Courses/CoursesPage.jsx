import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { HiArrowPath, HiMagnifyingGlass } from 'react-icons/hi2'
import CourseCard from '@/components/cards/CourseCard'
import CertificateSection from '@/components/sections/CertificateSection'
import SubscribeSection from '@/components/sections/SubscribeSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { COURSE_CATEGORIES } from '@/data/contacts'
import { courses } from '@/data/courses'

const ALL = 'All'
const PAGE_SIZE = 9

/**
 * Courses — каталог курсов.
 * Категория хранится в адресе (?category=Marketing), поэтому ссылки из футера и About Us
 * открывают уже отфильтрованный список.
 */
export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const category = COURSE_CATEGORIES.includes(categoryParam) ? categoryParam : ALL
  const [search, setSearch] = useState('')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const tabs = [ALL, ...COURSE_CATEGORIES].map((name) => ({
    name,
    count: name === ALL ? courses.length : courses.filter((c) => c.category === name).length,
  }))

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return courses.filter(
      (course) =>
        (category === ALL || course.category === category) &&
        (!query || `${course.title} ${course.author.name}`.toLowerCase().includes(query)),
    )
  }, [category, search])

  const selectCategory = (name) => {
    setSearchParams(name === ALL ? {} : { category: name }, { replace: true })
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <>
      <section className="container-site py-16 lg:py-24">
        <SectionHeading eyebrow="Enjoy your studying!" title="Our online courses" />

        <Reveal
          delay={100}
          className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Course category">
            {tabs.map(({ name, count }) => (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={category === name}
                onClick={() => selectCategory(name)}
                className={clsx(
                  'rounded border px-4 py-2 text-sm font-bold transition-colors',
                  category === name
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-700 hover:text-primary',
                )}
              >
                {name}
                <sup className="ml-0.5 text-[10px]">{count}</sup>
              </button>
            ))}
          </div>

          <label className="relative block lg:w-72">
            <span className="sr-only">Search course</span>
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setVisibleCount(PAGE_SIZE)
              }}
              placeholder="Search course..."
              className="h-11 w-full rounded border border-gray-500 bg-white pr-10 pl-4 text-sm outline-none placeholder:text-gray-600 focus:border-primary [&::-webkit-search-cancel-button]:hidden"
            />
            <HiMagnifyingGlass
              aria-hidden="true"
              size={18}
              className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-700"
            />
          </label>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, visibleCount).map((course, i) => (
              <Reveal key={course.id} delay={(i % 3) * 100} className="grid">
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-gray-700">No courses found. Try another search.</p>
        )}

        {filtered.length > visibleCount && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
              className="group flex items-center gap-2 font-bold text-dark transition-colors hover:text-primary"
            >
              <HiArrowPath
                size={20}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
              Load more
            </button>
          </div>
        )}
      </section>

      <TestimonialsSection />
      <CertificateSection />
      <SubscribeSection />
    </>
  )
}
