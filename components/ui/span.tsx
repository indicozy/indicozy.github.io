import { FC, ReactNode } from 'react'

export const Span: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className='bg-background dark:bg-back_dark'>{children}</span>
}
