import Link from 'next/link'
import { FC, useState } from 'react'

import { IconMenu2 } from '@tabler/icons'
import { navigation } from 'data/navigation'
import { INote } from 'data/navigation'
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
    x: -100
  },
  loading: () => ({
    opacity: 0,
    x: -100
  })
}

const NavigationItem: FC<INote & { toggle: () => void }> = ({
  href,
  name,
  tslug,
  toggle
}) => {
  const { t } = useTranslation()
  return (
    <motion.li
      className='mt-2 font-normal hover:font-bold transition-[font-weight] duration-150'
      variants={variantsNavigationItem}
    >
      <Link onClick={() => toggle()} href={href}>
        {t(tslug)?.length ? t(tslug) : name}
      </Link>
    </motion.li>
  )
}

const variantsNavigation = {
  loading: () => ({
    // width: '100vw',
    transition: {
      delay: 0
    }
  }),
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
  }
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
    width: '100vw',
    transition: {
      delay: 0.2
    }
  }),
  closed: () => ({
    width: '5rem',
    transition: {
      delay: 0.3
    }
  }),
  open: () => ({
    width: '20rem'
  })
}

export const Sidebar = ({ isRouterLoading }: { isRouterLoading: boolean }) => {
  const { t } = useTranslation()
  const [isOpen, toggleOpen] = useState(false)

  return (
    <motion.aside
      initial={'closed'}
      animate={isRouterLoading ? 'loading' : isOpen ? 'open' : 'closed'}
      variants={variants}
      className='hidden fixed top-0 left-0 z-10 justify-end items-center h-screen border-r sm:flex bg-background dark:bg-back_dark border-r-foreground dark:border-r-fore_dark transition-colors duration-300'
    >
      <div className='h-screen py-8 text-4xl mr-8 font-runs w-[11rem] ml-4'>
        <Navigation toggle={() => toggleOpen(false)} />
      </div>
      <div className='flex flex-col items-center h-screen justify-between py-8 w-8 px-10'>
        <div className='flex flex-col items-center'>
          <button className='' onClick={() => toggleOpen((isOpen) => !isOpen)}>
            <IconMenu2 size={30} stroke={1.2} />
          </button>
          <LanguageSwitcherMenu />
          <ThemeToggler />
        </div>
        <div className='pt-1 text-2xl tracking-widest uppercase whitespace-nowrap -rotate-90 font-runs'>
          {t('name')}
        </div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
    </motion.aside>
  )
}
