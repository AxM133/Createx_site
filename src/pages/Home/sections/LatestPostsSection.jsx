import PostCard from '@/components/cards/PostCard'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { posts } from '@/data/posts'
import { ROUTES } from '@/router/paths'

export default function LatestPostsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our blog" title="Latest posts" align="left" />
          <Reveal effect="left" delay={150}>
            <Button to={ROUTES.blog}>Go to blog</Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.id} delay={i * 120} className="grid">
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
