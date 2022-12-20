import { FC, ReactNode } from 'react'

type TypeBadge = {
  children: ReactNode
}
export const Badge: FC<TypeBadge> = ({ children }) => {
  return (
    <span className='bg-pink-100 text-stone-800 text-sm font-semibold mr-2 px-2.5 py-1 rounded'>
      {children}
    </span>
  )
}
