import clsx from 'clsx'
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const ALL = {
  facebook: { icon: FaFacebookF, label: 'Facebook' },
  twitter: { icon: FaTwitter, label: 'Twitter' },
  youtube: { icon: FaYoutube, label: 'YouTube' },
  telegram: { icon: FaTelegramPlane, label: 'Telegram' },
  instagram: { icon: FaInstagram, label: 'Instagram' },
  linkedin: { icon: FaLinkedinIn, label: 'LinkedIn' },
}

/**
 * Иконки соцсетей.
 * <SocialLinks networks={['facebook', 'twitter']} className="text-gray-700" />
 */
export default function SocialLinks({ networks = Object.keys(ALL), className, size = 18 }) {
  return (
    <ul className={clsx('flex items-center gap-5', className)}>
      {networks.map((key) => {
        const { icon: Icon, label } = ALL[key]
        return (
          <li key={key}>
            <a href="#" aria-label={label} className="transition-colors hover:text-primary">
              <Icon size={size} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
