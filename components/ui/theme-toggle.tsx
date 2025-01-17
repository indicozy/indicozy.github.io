import { useEffect, useState } from 'react'

import { IconMoon, IconSun } from '@tabler/icons'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, mountedSet] = useState(false)
  useEffect(() => mountedSet(true), [])
  if (!mounted) return <div className='w-8 h-8'></div>
  return (
    <button
      className='flex justify-center items-center w-8 h-8 rounded-lg transition-all duration-300 focus:outline-none'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label='Toggle Dark Mode'
    >
      {theme === 'light' ? (
        <IconMoon className='w-5 h-5' />
      ) : (
        <IconSun className='w-5 h-5' />
      )}
    </button>
  )
}

export default ThemeToggler
