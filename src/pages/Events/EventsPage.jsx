import { useMemo, useState } from 'react'
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronDown,
  HiMagnifyingGlass,
  HiOutlineBars3,
  HiOutlineSquares2X2,
} from 'react-icons/hi2'
import EventCard from '@/components/cards/EventCard'
import EventRow from '@/components/cards/EventRow'
import SubscribeSection from '@/components/sections/SubscribeSection'
import SectionHeading from '@/components/ui/SectionHeading'
import { events } from '@/data/events'

const pageSizes = [3, 6, 9]
const monthNumbers = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}

function getEventDate(event) {
  return monthNumbers[event.month] * 100 + Number(event.day)
}

const controlClass =
  'h-11 w-full rounded border border-gray-500 bg-white text-sm text-gray-800 transition-[border-color,box-shadow] duration-300 outline-none hover:border-gray-600 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15'

/** Select фильтра: своя стрелка вместо браузерной, одинаковая высота и отступы */
function FilterSelect({ label, className, children, ...props }) {
  return (
    <label className="flex items-center gap-3 text-sm font-bold whitespace-nowrap text-dark">
      {label}
      <span className={`relative block ${className}`}>
        <select
          {...props}
          className={`${controlClass} cursor-pointer appearance-none pr-10 pl-4 font-normal`}
        >
          {children}
        </select>
        <HiChevronDown
          aria-hidden="true"
          size={16}
          className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-700"
        />
      </span>
    </label>
  )
}

export default function EventsPage() {
  const [category, setCategory] = useState('All categories')
  const [sortOrder, setSortOrder] = useState('newest')
  const [pageSize, setPageSize] = useState(9)
  const [search, setSearch] = useState('')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)

  const categories = [...new Set(events.map((event) => event.type))]
  const filteredEvents = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return events
      .filter((event) => {
        const matchesCategory = category === 'All categories' || event.type === category
        const matchesSearch =
          !normalizedSearch ||
          `${event.title} ${event.type} ${event.month} ${event.day}`
            .toLowerCase()
            .includes(normalizedSearch)

        return matchesCategory && matchesSearch
      })
      .sort((first, second) => {
        const difference = getEventDate(first) - getEventDate(second)
        return sortOrder === 'newest' ? -difference : difference
      })
  }, [category, search, sortOrder])

  const pageCount = Math.ceil(filteredEvents.length / pageSize)
  const visibleEvents = filteredEvents.slice((page - 1) * pageSize, page * pageSize)
  const updatePageSize = (value) => {
    setPageSize(Number(value))
    setPage(1)
  }
  const updateFilter = (setter, value) => {
    setter(value)
    setPage(1)
  }

  return (
    <>
      <section className="container-site py-16 lg:py-24">
        <SectionHeading eyebrow="Our events" title="Lectures, workshops & master-classes" />

        <div className="mt-10 flex flex-col gap-5 border-y border-gray-400 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <FilterSelect
              label="Event category"
              value={category}
              onChange={(event) => updateFilter(setCategory, event.target.value)}
              className="w-48"
            >
              <option>All categories</option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </FilterSelect>
            <FilterSelect
              label="Sort by"
              value={sortOrder}
              onChange={(event) => updateFilter(setSortOrder, event.target.value)}
              className="w-40"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </FilterSelect>
            <FilterSelect
              label="Show"
              value={pageSize}
              onChange={(event) => updatePageSize(event.target.value)}
              className="w-24"
            >
              {pageSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </FilterSelect>
          </div>

          <div className="flex items-center gap-4">
            <label className="relative block flex-1 lg:w-64 lg:flex-none">
              <span className="sr-only">Search events</span>
              <input
                type="search"
                value={search}
                onChange={(event) => updateFilter(setSearch, event.target.value)}
                placeholder="Search event..."
                className={`${controlClass} pr-10 pl-4 placeholder:text-gray-600 [&::-webkit-search-cancel-button]:hidden`}
              />
              <HiMagnifyingGlass
                aria-hidden="true"
                size={18}
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-700"
              />
            </label>
            <div className="flex shrink-0 items-center gap-1" role="group" aria-label="Event view">
              <button
                type="button"
                aria-label="List view"
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
                className={`grid size-11 place-items-center rounded transition-colors ${
                  view === 'list' ? 'text-primary' : 'text-gray-700 hover:text-dark'
                }`}
              >
                <HiOutlineBars3 size={21} />
              </button>
              <button
                type="button"
                aria-label="Grid view"
                aria-pressed={view === 'grid'}
                onClick={() => setView('grid')}
                className={`grid size-11 place-items-center rounded transition-colors ${
                  view === 'grid' ? 'text-primary' : 'text-gray-700 hover:text-dark'
                }`}
              >
                <HiOutlineSquares2X2 size={20} />
              </button>
            </div>
          </div>
        </div>

        {visibleEvents.length ? (
          view === 'list' ? (
            <div className="mt-10 space-y-4">
              {visibleEvents.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleEvents.map((event) => (
                <EventCard key={event.id} event={event} as="h2" />
              ))}
            </div>
          )
        ) : (
          <p className="py-20 text-center text-gray-700">No events found. Try another search.</p>
        )}

        {pageCount > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Event pages">
            <button
              type="button"
              aria-label="Previous page"
              disabled={page === 1}
              onClick={() => setPage((current) => current - 1)}
              className="grid size-10 place-items-center rounded text-dark transition-colors hover:text-primary disabled:text-gray-500"
            >
              <HiArrowLeft />
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                aria-current={page === pageNumber ? 'page' : undefined}
                onClick={() => setPage(pageNumber)}
                className={`grid size-10 place-items-center rounded text-sm font-bold transition-colors ${
                  page === pageNumber ? 'text-primary' : 'text-dark hover:text-primary'
                }`}
              >
                {pageNumber}
              </button>
            ))}
            <button
              type="button"
              aria-label="Next page"
              disabled={page === pageCount}
              onClick={() => setPage((current) => current + 1)}
              className="grid size-10 place-items-center rounded text-dark transition-colors hover:text-primary disabled:text-gray-500"
            >
              <HiArrowRight />
            </button>
          </nav>
        )}
      </section>
      <SubscribeSection />
    </>
  )
}
