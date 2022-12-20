import Link from 'next/link'
import { FC } from 'react'

import { LanguageSwitcherMenu } from '../language-switcher-menu'
import { Logo } from './logo'

export const Sidebar: FC = () => {
  return (
    <aside className='flex fixed top-0 left-0 flex-col justify-between items-center py-8 w-20 h-screen bg-red-200 border-r border-r-black'>
      <Link href='/'>
        <Logo />
      </Link>
      <LanguageSwitcherMenu />
    </aside>
  )
}
