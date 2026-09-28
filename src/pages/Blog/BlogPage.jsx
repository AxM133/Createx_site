import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { HiArrowLeft, HiArrowRight, HiMagnifyingGlass } from 'react-icons/hi2'
import PostCard from '@/components/cards/PostCard'
import ArticlesNewsletterSection from '@/components/sections/ArticlesNewsletterSection'
import SectionHeading from '@/components/ui/SectionHeading'
import { posts } from '@/data/posts'

const tabs = ['All', 'Articles', 'Videos', 'Podcasts']
const typeByTab = { Articles: 'Article', Videos: 'Video', Podcasts: 'Podcast' }
const pageSize = 6

export default function BlogPage() {
  // ?category= и ?search= приходят со страницы поста (категория, теги)
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState('All')
  const [category, setCategory] = useState(searchParams.get('category') ?? 'All categories')
  const [search, setSearch] = useState(searchParams.get('search') ?? '')
  const [page, setPage] = useState(1)

  const categories = [...new Set(posts.map((post) => post.category))]
  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return posts.filter((post) => {
      const matchesType = activeTab === 'All' || post.type === typeByTab[activeTab]
      const matchesCategory = category === 'All categories' || post.category === category
      const matchesSearch =
        !normalizedSearch ||
        `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(' ')}`
          .toLowerCase()
          .includes(normalizedSearch)

      return matchesType && matchesCategory && matchesSearch
    })
  }, [activeTab, category, search])
  const pageCount = Math.ceil(filteredPosts.length / pageSize)
  const visiblePosts = filteredPosts.slice((page - 1) * pageSize, page * pageSize)

  const updateFilter = (update) => {
    update()
    setPage(1)
  }

  return (
    <>
      <section className="container-site py-16 lg:py-24">
        <SectionHeading eyebrow="Our blog" title="Createx School Journal" />

        <div className="mt-10 flex flex-col gap-6 border-b border-gray-400 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Post type">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => updateFilter(() => setActiveTab(tab))}
                className={`rounded border px-4 py-2 text-sm font-bold transition-colors ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-700 hover:border-gray-500 hover:text-dark'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <label className="flex items-center gap-3 text-sm font-bold text-dark">
              Blog category
              <select
                value={category}
                onChange={(event) => updateFilter(() => setCategory(event.target.value))}
                className="h-11 min-w-44 rounded border border-gray-500 bg-white px-3 font-normal outline-none focus:border-primary"
              >
                <option>All categories</option>
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="relative block sm:w-56">
              <span className="sr-only">Search blog posts</span>
              <input
                type="search"
                value={search}
                onChange={(event) => updateFilter(() => setSearch(event.target.value))}
                placeholder="Search blog..."
                className="h-11 w-full rounded border border-gray-500 bg-white py-2 pr-10 pl-3 text-sm outline-none placeholder:text-gray-700 focus:border-primary"
              />
              <HiMagnifyingGlass
                aria-hidden="true"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-700"
              />
            </label>
          </div>
        </div>

        {visiblePosts.length > 0 ? (
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-gray-700">No posts found. Try another search.</p>
        )}

        {pageCount > 1 && (
          <nav className="mt-14 flex items-center justify-center gap-2" aria-label="Blog pages">
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

      <ArticlesNewsletterSection />
    </>
  )
}
