import { Header } from './header'
import { Sidebar } from './sidebar'
import { StreamlinesFull } from './streamlines-draw'

export const Layout = ({ children }) => {
  return (
    <>
      <StreamlinesFull />
      <Header />
      <Sidebar />
      <main className='mt-20 sm:mt-0 mx-2 sm:mx-56'>{children}</main>
    </>
  )
}
