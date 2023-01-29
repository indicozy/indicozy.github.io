import Link from 'next/link'
import { FC } from 'react'

import { IconMenu2 } from '@tabler/icons'
import { motion, useCycle } from 'framer-motion'
import { useTranslation } from 'next-export-i18n'

import { LanguageSwitcherMenu } from '../language-switcher-menu'
import { Logo } from './logo'
import ThemeToggler from './theme-toggle'

type INote = {
  href: string
  name: string
  tslug: string
}

const variantsNavigationItem = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: -100
  }
}

const NavigationItem: FC<INote & { toggle: () => void }> = ({
  href,
  name,
  tslug,
  toggle
}) => {
  const { t } = useTranslation()
  return (
    <motion.li className='mt-2' variants={variantsNavigationItem}>
      <Link onClick={() => toggle()} href={href}>
        {t(tslug)?.length ? t(tslug) : name}
      </Link>
    </motion.li>
  )
}

const variantsNavigation = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}
const Navigation: FC<{ toggle: () => void }> = ({ toggle }) => {
  const notes: INote[] = [
    { href: '/', name: 'Home', tslug: 'navbar.home' },
    { href: '/notes', name: 'Notes', tslug: 'navbar.notes' },
    { href: '/about', name: 'About', tslug: 'navbar.about' },
    { href: '/blog', name: 'Blog', tslug: 'navbar.blog' },
    { href: '/contacts', name: 'Contacts', tslug: 'navbar.contacts' }
  ]
  return (
    <motion.ul variants={variantsNavigation}>
      {notes.map((note, i) => (
        <NavigationItem key={i} {...note} toggle={() => toggle()} />
      ))}
    </motion.ul>
  )
}

const variants = {
  closed: () => ({
    width: '5rem',
    transition: {
      delay: 0.4
    }
  }),
  open: () => ({
    width: '20rem'
  })
}

export const Sidebar: FC = () => {
  const { t } = useTranslation()
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.aside
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className='hidden fixed top-0 left-0 z-10 justify-end items-center h-screen border-r sm:flex bg-background dark:bg-back_dark border-r-foreground dark:border-r-fore_dark'
    >
      <div className='h-screen py-8 text-4xl mr-8 font-domain'>
        <Navigation toggle={() => toggleOpen()} />
      </div>
      <div className='flex flex-col items-center h-screen justify-between py-8 w-8 px-10'>
        <div className='flex flex-col items-center'>
          <button className='' onClick={() => toggleOpen()}>
            <IconMenu2 size={30} stroke={1.2} />
          </button>
          <LanguageSwitcherMenu />
          <ThemeToggler />
        </div>
        <div className='pt-1 text-2xl font-bold tracking-wider uppercase whitespace-nowrap -rotate-90 font-domain'>
          {t('name')}
        </div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
    </motion.aside>
  )
}
