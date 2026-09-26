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
          className="size-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-dark/80 to-transparent p-4 opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100">
          <SocialLinks
            networks={['facebook', 'instagram', 'linkedin']}
            className="translate-y-4 gap-3 text-white transition-[translate] duration-500 ease-out-expo group-focus-within:translate-y-0 group-hover:translate-y-0"
            size={16}
          />
        </div>
      </div>
      <h3 className="mt-5 text-xl font-bold transition-colors group-hover:text-primary">
        {member.name}
      </h3>
      <p className="mt-1 text-gray-700">{member.role}</p>
    </article>
  )
}
