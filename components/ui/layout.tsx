import { StreamlinesFull } from '@/lib/streamlines/streamlines-draw'

export const Layout = ({ children }) => {
  return (
    <>
      <StreamlinesFull />
      {children}
    </>
  )
}
