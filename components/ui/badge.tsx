import { FC, ReactNode } from 'react'

type IDimensions = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface TypeBadge {
  children: ReactNode
  icon?: ReactNode
  rounded?: IDimensions | 'full'
}
export const Badge: FC<TypeBadge> = ({ children, icon, rounded }) => {
  return (
    <span
      className={`bg-zinc-50 dark:bg-zinc-700 text-sm font-semibold mr-2 px-2.5 py-1 mt-1 ${
        rounded ? 'rounded-' + rounded : 'rounded'
      } inline-flex items-center space-x-4 flex-nowrap`}
    >
      <div className='mr-1'>{icon}</div>
      {children}
    </span>
  )
}
