import clsx from 'clsx'
import Reveal from './Reveal'

/**
 * Надзаголовок + заголовок секции.
 * <SectionHeading eyebrow="Our blog" title="Latest posts" align="left" />
 * Плавно появляется при прокрутке.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  as: Tag = 'h2',
  className,
}) {
  return (
    <Reveal className={clsx(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">{eyebrow}</p>
      )}
      <Tag className="text-3xl leading-tight md:text-[46px]">{title}</Tag>
    </Reveal>
  )
}
