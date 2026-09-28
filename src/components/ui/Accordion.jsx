import { useId, useState } from 'react'
import clsx from 'clsx'
import { HiMinus, HiPlus } from 'react-icons/hi2'
import Reveal from './Reveal'

/**
 * Раскрывающийся список «+ Lesson 1. Title» — программа курса, темы события.
 * <Accordion items={[{ title, text }]} label="Lesson" />
 */
export default function Accordion({ items, label, className }) {
  const id = useId()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <ul className={clsx('space-y-4', className)}>
      {items.map((item, i) => {
        const open = i === openIndex
        const Icon = open ? HiMinus : HiPlus
        return (
          <Reveal as="li" key={item.title} delay={i * 60}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="group flex w-full items-start gap-3 text-left text-base font-bold"
              >
                <Icon
                  size={18}
                  className="mt-0.5 shrink-0 text-primary transition-transform duration-300 group-hover:rotate-90"
                />
                <span className="shrink-0 font-normal text-primary">
                  {label} {i + 1}.
                </span>
                <span className="text-dark transition-colors group-hover:text-primary">
                  {item.title}
                </span>
              </button>
            </h3>
            {/* grid-rows 0fr → 1fr — плавное раскрытие без замера высоты */}
            <div
              id={`${id}-${i}`}
              className={clsx(
                'grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo',
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <p className="overflow-hidden pl-[30px] text-sm text-gray-700">
                <span className="block pt-3">{item.text}</span>
              </p>
            </div>
          </Reveal>
        )
      })}
    </ul>
  )
}
