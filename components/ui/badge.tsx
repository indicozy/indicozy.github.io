import { FC, ReactNode } from 'react'

type TypeBadge = {
  children: ReactNode
}
export const Badge: FC<TypeBadge> = ({ children }) => {
  return (
    <span className='bg-stone-50 dark:bg-zinc-700 text-sm font-semibold mr-2 px-2.5 py-1 rounded'>
      {children}
    </span>
  )
}
