import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Header } from './header'
import { Sidebar } from './sidebar'
import { StreamlinesFull } from './streamlines-draw'

export const Layout = ({ children }) => {
  const router = useRouter()
  const [isRouterLoading, isRouterLoadingSet] = useState(false)

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        isRouterLoadingSet(true)
      }
    }
    const handleComplete = () => isRouterLoadingSet(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])
  return (
    <>
      <StreamlinesFull />
      <Header isRouterLoading={isRouterLoading} />
      <Sidebar isRouterLoading={isRouterLoading} />
      <main className='mt-20 sm:mt-0 mx-2 sm:mx-56'>{children}</main>
    </>
  )
}
