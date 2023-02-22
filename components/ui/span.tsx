import { FC, ReactNode } from 'react'

export const Span: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className=''>{children}</span>
}
