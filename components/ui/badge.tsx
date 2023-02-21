import Link from 'next/link'
import { FC, ReactNode } from 'react'

type IDimensions = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface TypeBadge {
  children: ReactNode
  icon?: ReactNode
  rounded?: IDimensions | 'full'
  margin?: string
  href?: string
}

export const Badge: FC<TypeBadge> = ({
  children,
  icon,
  rounded,
  margin,
  href
}) => {
  const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    if (href) {
      return <Link href={href}>{children}</Link>
    }
    return <>{children}</>
  }
  return (
    <Wrapper>
      <span
        className={`bg-zinc-50 dark:bg-zinc-700 text-sm font-semibold mr-2 px-2.5 py-1 mt-1 hover:px-4 transition-all ${
          rounded ? 'rounded-' + rounded : 'rounded'
        } inline-flex items-center space-x-4 flex-nowrap ${
          margin ? 'mr-' + margin : ''
        }`}
      >
        <div className='mr-1 w-4 h-4 flex items-center justify-center'>
          {icon}
        </div>
        {children}
      </span>
    </Wrapper>
  )
}
