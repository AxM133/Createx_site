import { HiOutlinePlayCircle, HiOutlineStar, HiOutlineUserGroup } from 'react-icons/hi2'
import Reveal from '@/components/ui/Reveal'
import SocialLinks from '@/components/ui/SocialLinks'
import { courseDetails } from '@/data/courseDetails'

export default function CuratorSection({ curator }) {
  const { rating, courses, students, bio } = courseDetails.curator
  const stats = [
    { icon: HiOutlineStar, label: `${rating} rate` },
    { icon: HiOutlinePlayCircle, label: `${courses} courses` },
    { icon: HiOutlineUserGroup, label: `${students} students` },
  ]

  return (
    <section className="relative pb-20 lg:pb-28">
      {/* Декоративные круги за фото */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-0 size-40 rounded-full border-[16px] border-accent-yellow/15 lg:left-[8%]"
      />
      <div className="relative container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal effect="clip">
          <div className="aspect-[495/573] overflow-hidden rounded bg-accent-yellow">
            <img
              src={curator.photo}
              alt={curator.name}
              loading="lazy"
              className="size-full object-cover object-top transition-transform duration-700 ease-out-expo hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal effect="left" delay={150}>
          <p className="text-sm font-bold tracking-wider text-gray-800 uppercase">Course curator</p>
          <h2 className="mt-3 text-3xl md:text-[46px] md:leading-tight">{curator.name}</h2>
          <p className="mt-2 text-lg text-gray-700">{curator.role}</p>

          <ul className="mt-6 space-y-2 text-gray-800">
            {stats.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon size={18} className="text-primary" />
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-800">{bio}</p>

          <SocialLinks
            networks={['facebook', 'instagram', 'twitter', 'linkedin']}
            className="mt-8 text-gray-700"
            size={16}
          />
        </Reveal>
      </div>
    </section>
  )
}
