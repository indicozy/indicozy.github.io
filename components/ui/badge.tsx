import { FC, ReactNode } from 'react'

type IDimensions = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface TypeBadge {
  children: ReactNode
  icon?: ReactNode
  rounded?: IDimensions | 'full'
  margin?: string
}
export const Badge: FC<TypeBadge> = ({ children, icon, rounded, margin }) => {
  return (
    <span
      className={`bg-zinc-50 dark:bg-zinc-700 text-sm font-semibold mr-2 px-2.5 py-1 mt-1 ${
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
  )
}
