import { Header } from './header'
import { Sidebar } from './sidebar'
import { StreamlinesFull } from './streamlines-draw'

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
