import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'
import Footer from './(public)/(home)/Footer'
import Script from 'next/script'
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
      <Footer />
      <Script
        async
        defer
        src="https://agentes.numeral8.mx/js/widget/xic1logbwtuduptm/float.js"
      />
    </>
  )
}


export default Layout
