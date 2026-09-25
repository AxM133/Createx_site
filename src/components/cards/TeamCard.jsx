import SocialLinks from '@/components/ui/SocialLinks'

/** Карточка тьютора — главная (Meet our team), About Us */
export default function TeamCard({ member }) {
  return (
    <article className="group text-center">
      <div className="relative aspect-[285/320] overflow-hidden rounded bg-accent-yellow">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="size-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-dark/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <SocialLinks
            networks={['facebook', 'instagram', 'linkedin']}
            className="gap-3 text-white"
            size={16}
          />
        </div>
      </div>
      <h3 className="mt-5 text-xl font-bold">{member.name}</h3>
      <p className="mt-1 text-gray-700">{member.role}</p>
    </article>
  )
}
