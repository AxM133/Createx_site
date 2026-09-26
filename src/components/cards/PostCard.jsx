import { Link } from 'react-router-dom'
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineMicrophone,
  HiOutlinePlayCircle,
  HiArrowRight,
} from 'react-icons/hi2'
import { ROUTES } from '@/router/paths'

const TYPE_META = {
  Article: { icon: HiOutlineDocumentText, action: 'Read' },
  Video: { icon: HiOutlinePlayCircle, action: 'Watch' },
  Podcast: { icon: HiOutlineMicrophone, action: 'Listen' },
}

/** Карточка поста блога — главная (Latest posts), Blog, Single Post (You may also like) */
export default function PostCard({ post }) {
  const { icon: TypeIcon, action } = TYPE_META[post.type]
  const url = ROUTES.post(post.id)

  return (
    <article className="group flex flex-col">
      <Link to={url} className="relative block aspect-[390/300] overflow-hidden rounded">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="absolute top-4 left-4 flex items-center gap-1 rounded bg-white px-2 py-1 text-xs text-dark transition-[translate] duration-500 ease-spring group-hover:-translate-y-0.5">
          <TypeIcon size={14} />
          {post.type}
        </span>
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-700">
        <span>{post.category}</span>
        <span className="text-gray-500">|</span>
        <span className="flex items-center gap-1">
          <HiOutlineCalendar /> {post.date}
        </span>
        {post.duration && (
          <>
            <span className="text-gray-500">|</span>
            <span className="flex items-center gap-1">
              <HiOutlineClock /> {post.duration}
            </span>
          </>
        )}
      </div>

      <h3 className="mt-3 text-xl leading-snug font-bold">
        <Link to={url} className="transition-colors hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-gray-800">{post.excerpt}</p>
      <Link
        to={url}
        className="group/action mt-5 flex items-center gap-2 self-start font-bold text-dark transition-colors hover:text-primary"
      >
        {action}
        <HiArrowRight className="text-primary transition-transform duration-300 ease-out-expo group-hover/action:translate-x-1.5" />
      </Link>
    </article>
  )
}
