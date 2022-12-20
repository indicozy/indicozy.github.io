import { StreamlinesFull } from '@/lib/streamlines/streamlines-draw'

import { Sidebar } from './sidebar'

export const Layout = ({ children }) => {
  return (
    <>
      <StreamlinesFull />
      <Sidebar />
      <main className='ml-24'>{children}</main>
    </>
  )
}
