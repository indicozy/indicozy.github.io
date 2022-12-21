import { StreamlinesFull } from '@/lib/streamlines/streamlines-draw'

import { Header } from './header'
import { Sidebar } from './sidebar'

export const Layout = ({ children }) => {
  return (
    <>
      <StreamlinesFull />
      <Header />
      <Sidebar />
      <main className='mt-20 ml-0 sm:mt-0 sm:ml-28'>{children}</main>
    </>
  )
}
