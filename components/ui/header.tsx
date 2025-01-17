import Link from 'next/link'
import { FC, useState } from 'react'

import { IconMenu2 } from '@tabler/icons'
import { INote, navigation } from 'data/navigation'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-export-i18n'

import { LanguageSwitcherMenu } from '../language-switcher-menu'
import { Logo } from './logo'
import ThemeToggler from './theme-toggle'

const variantsNavigationItem = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: 100
  },
  loading: {
    opacity: 0,
    x: 100
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
    <motion.li className='mt-2 text-right' variants={variantsNavigationItem}>
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
      delayChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  loading: {}
}
const Navigation: FC<{ toggle: () => void }> = ({ toggle }) => {
  return (
    <motion.ul variants={variantsNavigation}>
      {navigation.map((note, i) => (
        <NavigationItem key={i} {...note} toggle={() => toggle()} />
      ))}
    </motion.ul>
  )
}

const variants = {
  loading: () => ({
    height: '100vh',
    transition: {
      delay: 0.3
    }
  }),
  closed: () => ({
    height: '5rem',
    transition: {
      delay: 0.4
    }
  }),
  open: () => ({
    height: '21rem'
  })
}

export const Header = ({ isRouterLoading }: { isRouterLoading: boolean }) => {
  const [isOpen, toggleOpen] = useState<boolean>(false)
  return (
    <motion.header
      initial={'closed'}
      animate={isRouterLoading ? 'loading' : isOpen ? 'open' : 'closed'}
      variants={variants}
      className='container flex fixed top-0 left-0 z-10 flex-col justify-end items-center h-full w-screen border-b border-b-foreground dark:border-b-fore_dark bg-background dark:bg-back_dark sm:px-0 sm:hidden transition-colors duration-300'
    >
      <div className='w-screen text-2xl mr-8 mb-2 font-runs'>
        <Navigation toggle={() => toggleOpen(false)} />
      </div>
      <div className='flex w-screen px-4 justify-between py-4'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='flex items-center'>
          <LanguageSwitcherMenu />
          <ThemeToggler />
          <button className='' onClick={() => toggleOpen((isOpen) => !isOpen)}>
            <IconMenu2 size={30} stroke={1.2} />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
