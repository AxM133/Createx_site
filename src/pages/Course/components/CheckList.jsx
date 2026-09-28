import clsx from 'clsx'
import { HiOutlineCheckCircle } from 'react-icons/hi2'
import Reveal from '@/components/ui/Reveal'

/** Список с красными галочками — «You will learn», «Who will benefit» */
export default function CheckList({ items, className, itemClassName }) {
  return (
    <ul className={clsx('space-y-3', className)}>
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={i * 70} className={clsx('flex gap-3', itemClassName)}>
          <HiOutlineCheckCircle size={20} className="mt-0.5 shrink-0 text-primary" />
          <span>{item}</span>
        </Reveal>
      ))}
    </ul>
  )
}
