import Link from 'next/link'

import { IconMenu2 } from '@tabler/icons'

import { LanguageSwitcherMenu } from '../language-switcher-menu'
import { Logo } from './logo'
import ThemeToggler from './theme-toggle'

export const Header = () => {
  return (
    <header className='container flex fixed top-0 left-0 z-10 flex-row justify-between items-center px-4 w-screen h-20 border-b border-b-foreground dark:border-b-fore_dark bg-background dark:bg-back_dark sm:px-0 sm:hidden'>
      <Link href='/'>
        <Logo />
      </Link>
      <div className='flex items-center'>
        <LanguageSwitcherMenu />
        <ThemeToggler />
        <Link className='' href='/notes'>
          <IconMenu2 size={30} stroke={1.2} />
        </Link>
      </div>
    </header>
  )
}
