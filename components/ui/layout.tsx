import { StreamlinesFull } from '@/lib/streamlines/streamlines-draw'

import { Sidebar } from './sidebar'

export const Layout = ({ children }) => {
  return (
    <div>
      <StreamlinesFull />
      <Sidebar />
      <main className='ml-28'>{children}</main>
    </div>
  )
}
