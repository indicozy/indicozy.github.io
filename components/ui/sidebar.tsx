import Link from 'next/link'
import { FC } from 'react'

import { IconMenu2 } from '@tabler/icons'

import { LanguageSwitcherMenu } from '../language-switcher-menu'
import { Logo } from './logo'
import ThemeToggler from './theme-toggle'

export const Sidebar: FC = () => {
  return (
    <aside className='flex fixed top-0 left-0 z-10 flex-col justify-between items-center py-8 w-20 h-screen border-r bg-background dark:bg-back_dark border-r-foreground dark:border-r-fore_dark'>
      <div className='flex flex-col items-center'>
        <Link className='' href='/notes'>
          <IconMenu2 size={30} stroke={1.2} />
        </Link>
        <LanguageSwitcherMenu />
        <ThemeToggler />
      </div>
      <div className='pt-1 text-3xl font-bold tracking-wider uppercase whitespace-nowrap -rotate-90 font-domain'>
        Burkit Karlibay
      </div>
      <Link href='/'>
        <Logo />
      </Link>
    </aside>
  )
}
