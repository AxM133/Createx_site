import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Badge from '@/components/ui/Badge'
import { ROUTES } from '@/router/paths'

/**
 * Карточка курса.
 * variant="horizontal" — главная (Featured Courses), "vertical" — страница Courses.
 */
export default function CourseCard({ course, variant = 'vertical', className }) {
  const horizontal = variant === 'horizontal'

  return (
    <Link
      to={ROUTES.course(course.id)}
      className={clsx(
        'group flex overflow-hidden rounded bg-white shadow-card-sm transition-[box-shadow,translate] duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-card',
        horizontal ? 'flex-col sm:flex-row' : 'flex-col',
        className,
      )}
    >
      <div
        className={clsx(
          'relative shrink-0 overflow-hidden bg-accent-yellow',
          horizontal ? 'aspect-[4/3] sm:aspect-auto sm:min-h-[200px] sm:w-[43%]' : 'aspect-[16/10]',
        )}
      >
        <img
          src={course.author.photo}
          alt={course.author.name}
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-110"
        />
      </div>
      <div className={clsx('flex flex-col', horizontal ? 'justify-center p-6' : 'p-6')}>
        <Badge className="self-start">{course.category}</Badge>
        <h3 className="mt-3 text-lg leading-snug font-bold transition-colors group-hover:text-primary">
          {course.title}
        </h3>
        <p className="mt-3 text-sm text-gray-700">
          <span className="font-bold text-primary">${course.price}</span>
          <span className="mx-2 text-gray-500">|</span>
          by {course.author.name}
        </p>
      </div>
    </Link>
  )
}
