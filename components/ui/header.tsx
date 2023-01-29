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
    y: 0
  },
  closed: {
    opacity: 0,
    y: -100
  }
}

const NavigationItem: FC<INote> = ({ href, name, tslug }) => {
  const { t } = useTranslation()
  return (
    <motion.li className='mt-2 text-right' variants={variantsNavigationItem}>
      <Link href={href}>{t(tslug)?.length ? t(tslug) : name}</Link>
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
const Navigation: FC = () => {
  const notes: INote[] = [
    { href: '/notes', name: 'Notes', tslug: 'navbar.notes' },
    { href: '/about', name: 'About', tslug: 'navbar.about' },
    { href: '/blog', name: 'Blog', tslug: 'navbar.blog' },
    { href: '/contacts', name: 'Contacts', tslug: 'navbar.contacts' }
  ]
  return (
    <motion.ul variants={variantsNavigation}>
      {notes.map((note, i) => (
        <NavigationItem key={i} {...note} />
      ))}
    </motion.ul>
  )
}

const variants = {
  closed: () => ({
    height: '5rem',
    transition: {
      delay: 0.4
    }
  }),
  open: () => ({
    height: '16rem'
  })
}

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <motion.header
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className='container flex fixed top-0 left-0 z-10 flex-col justify-end items-center h-full w-screen border-b border-b-foreground dark:border-b-fore_dark bg-background dark:bg-back_dark sm:px-0 sm:hidden'
    >
      <div className='w-screen text-2xl mr-8 mb-4'>
        <Navigation />
      </div>
      <div className='flex w-screen px-4 justify-between py-4'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='flex items-center'>
          <LanguageSwitcherMenu />
          <ThemeToggler />
          <button className='' onClick={() => toggleOpen()}>
            <IconMenu2 size={30} stroke={1.2} />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
