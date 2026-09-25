import { useState } from 'react'
import clsx from 'clsx'
import {
  HiOutlineAcademicCap,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBookOpen,
  HiOutlineUserGroup,
} from 'react-icons/hi2'
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

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <SectionHeading eyebrow="Our benefits" title="That’s how we do it" />

        <div role="tablist" className="mt-12 flex gap-4 overflow-x-auto pb-2 lg:justify-between">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={id === activeId}
              onClick={() => setActiveId(id)}
              className={clsx(
                'flex h-12 shrink-0 items-center gap-2 rounded border px-6 font-bold transition-colors lg:flex-1 lg:justify-center',
                id === activeId
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-700 hover:text-primary',
              )}
            >
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h3 className="text-3xl">{active.title}</h3>
            <p className="mt-6 text-gray-800">{TEXT}</p>
          </div>
          {/* TODO: заменить на иллюстрации из Figma */}
          <img
            key={active.id}
            src={unsplash(active.image, 900)}
            alt=""
            loading="lazy"
            className="aspect-[4/3] w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  )
}
