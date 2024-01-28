import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'
const Navbar = dynamic(() => import('@/components/layout/Navbar'))
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div />}>
        {children}
      </Suspense>

      <Suspense fallback={<div />}>
        <ScrollToTop />
      </Suspense>
      </>
  )
}

export default Layout
