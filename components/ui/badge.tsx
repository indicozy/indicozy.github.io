import { FC, ReactNode } from 'react'

type TypeBadge = {
  children: ReactNode
  icon?: ReactNode
}
export const Badge: FC<TypeBadge> = ({ children, icon }) => {
  return (
    <span className='bg-stone-50 dark:bg-zinc-700 text-sm font-semibold mr-2 px-2.5 py-1 rounded inline-flex items-center space-x-4 flex-nowrap'>
      <div className='mr-1'>{icon}</div>
      {children}
    </span>
  )
}
