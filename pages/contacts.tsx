import Link from 'next/link'
import { FC } from 'react'

import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandMastodon,
  IconLocation,
  IconMail,
  IconMapPin,
  TablerIcon
} from '@tabler/icons'
import { useTranslation } from 'next-export-i18n'

const Contacts: FC = () => {
  const { t } = useTranslation()
  const links: { href: string; icon: TablerIcon; text: string }[] = [
    {
      href: 'https://github.com/indicozy',
      icon: IconBrandGithub,
      text: 'indicozy'
    },
    {
      href: 'https://instagram.com/indicozy',
      icon: IconBrandInstagram,
      text: 'indicozy'
    },
    {
      href: 'mailto:indicozy@gmail.com',
      icon: IconMail,
      text: 'indicozy@gmail.com'
    },
    {
      href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      icon: IconMapPin,
      text: 'Why do you need that?'
    }
  ]
  return (
    <div className='h-screen relative'>
      <div className='absolute left-0 bottom-0 mb-20'>
        <h1 className='text-6xl'>{t('name')}</h1>
        <div className='flex flex-col'>
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              <div className='flex mt-2'>
                <link.icon /> <span className='w-2'></span> {link.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Contacts
