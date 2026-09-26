import { useLayoutEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  HiOutlineAcademicCap,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBookOpen,
  HiOutlineUserGroup,
} from 'react-icons/hi2'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { unsplash } from '@/utils/image'

const TEXT =
  'Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames. Dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisi accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.'

const TABS = [
  {
    id: 'tutors',
    label: 'Experienced Tutors',
    title: 'Only practicing tutors',
    icon: HiOutlineAcademicCap,
    image: '1531123897727-8f129e1688ce',
  },
  {
    id: 'feedback',
    label: 'Feedback & Support',
    title: 'Personal feedback from curators',
    icon: HiOutlineChatBubbleLeftRight,
    image: '1522202176988-66273c2fd55f',
  },
  {
    id: 'library',
    label: '24/7 Online Library',
    title: 'Access to the library any time',
    icon: HiOutlineBookOpen,
    image: '1488426862026-3ee34a7d66df',
  },
  {
    id: 'community',
    label: 'Community',
    title: 'Friendly community of students',
    icon: HiOutlineUserGroup,
    image: '1524504388940-b1c1722653e1',
  },
]

export default function BenefitsSection() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const active = TABS.find((tab) => tab.id === activeId)
  const listRef = useRef(null)
  const indicatorRef = useRef(null)
  const tabRefs = useRef({})

  // Рамка активного таба «переезжает» к выбранной кнопке
  useLayoutEffect(() => {
    const update = () => {
      const tab = tabRefs.current[activeId]
      const indicator = indicatorRef.current
      if (!tab || !indicator) return
      indicator.style.width = `${tab.offsetWidth}px`
      indicator.style.transform = `translateX(${tab.offsetLeft}px)`
      indicator.style.opacity = '1'
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(listRef.current)
    return () => observer.disconnect()
  }, [activeId])

  const select = (id) => {
    setActiveId(id)
    tabRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
  }

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <SectionHeading eyebrow="Our benefits" title="That’s how we do it" />

        <Reveal delay={100} className="mt-12">
          <div
            ref={listRef}
            role="tablist"
            className="relative flex gap-4 overflow-x-auto pb-2 lg:justify-between"
          >
            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 h-12 rounded border border-primary bg-primary/5 opacity-0 transition-[transform,width,opacity] duration-500 ease-out-expo"
            />
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                ref={(el) => (tabRefs.current[id] = el)}
                type="button"
                role="tab"
                aria-selected={id === activeId}
                onClick={() => select(id)}
                className={clsx(
                  'group relative flex h-12 shrink-0 items-center gap-2 rounded border border-transparent px-6 font-bold transition-colors duration-300 lg:flex-1 lg:justify-center',
                  id === activeId ? 'text-primary' : 'text-gray-700 hover:text-primary',
                )}
              >
                <Icon
                  size={20}
                  className="transition-transform duration-500 ease-spring group-hover:scale-125 group-hover:-rotate-6"
                />
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal
          role="tabpanel"
          delay={200}
          className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-24"
        >
          {/* key — при смене таба анимация проигрывается заново */}
          <div key={active.id} className="animate-fade-up">
            <h3 className="text-3xl">{active.title}</h3>
            <p className="mt-6 text-gray-800">{TEXT}</p>
          </div>
          {/* TODO: заменить на иллюстрации из Figma */}
          <div className="overflow-hidden rounded">
            <img
              key={active.id}
              src={unsplash(active.image, 900)}
              alt=""
              loading="lazy"
              className="aspect-[4/3] w-full animate-clip-in object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
