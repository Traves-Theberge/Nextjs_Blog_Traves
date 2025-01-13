import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SocialLink } from '@/types/social'

export const socialLinks: SocialLink[] = [
  {
    icon: FiMail,
    href: 'mailto:traves.theberge@gmail.com',
    label: 'Email Contact'
  },
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/traves-theberge',
    label: 'LinkedIn Profile'
  },
  {
    icon: FiGithub,
    href: 'https://github.com/Traves-Theberge',
    label: 'GitHub Profile'
  }
] 