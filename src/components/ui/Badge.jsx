import clsx from 'clsx'

const categoryColors = {
  Marketing: 'bg-marketing',
  Management: 'bg-management',
  'HR & Recruting': 'bg-hr',
  Design: 'bg-design',
  Development: 'bg-development',
}

/** Цветной бейдж категории курса: <Badge>Marketing</Badge> */
export default function Badge({ children, className }) {
  return (
    <span
      className={clsx(
        'inline-block rounded px-2 py-0.5 text-xs text-white',
        categoryColors[children] ?? 'bg-gray-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
