import Link from 'next/link'
import { FC } from 'react'

import { IconMenu2 } from '@tabler/icons'
import { useTranslation } from 'next-export-i18n'

import { LanguageSwitcherMenu } from '../language-switcher-menu'
import { Logo } from './logo'
import ThemeToggler from './theme-toggle'

export const Sidebar: FC = () => {
  const { t } = useTranslation()
  return (
    <aside className='hidden fixed top-0 left-0 z-10 flex-col justify-between items-center py-8 w-20 h-screen border-r sm:flex bg-background dark:bg-back_dark border-r-foreground dark:border-r-fore_dark'>
      <div className='flex flex-col items-center'>
        <Link className='' href='/notes'>
          <IconMenu2 size={30} stroke={1.2} />
        </Link>
        <LanguageSwitcherMenu />
        <ThemeToggler />
      </div>
      <div className='pt-1 text-2xl font-bold tracking-wider uppercase whitespace-nowrap -rotate-90 font-domain'>
        {t('name')}
      </div>
      <Link href='/'>
        <Logo />
      </Link>
    </aside>
  )
}
