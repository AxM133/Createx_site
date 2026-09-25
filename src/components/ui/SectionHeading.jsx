import clsx from 'clsx'

/**
 * Надзаголовок + заголовок секции.
 * <SectionHeading eyebrow="Our blog" title="Latest posts" align="left" />
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  as: Tag = 'h2',
  className,
}) {
  return (
    <div className={clsx(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">{eyebrow}</p>
      )}
      <Tag className="text-3xl leading-tight md:text-[46px]">{title}</Tag>
    </div>
  )
}
