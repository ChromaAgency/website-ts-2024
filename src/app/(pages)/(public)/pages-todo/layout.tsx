import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
import { ReactNode, Suspense } from 'react'
const Navbar = dynamic(() => import('@/components/layout/Navbar'))
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))

const Layout = ({ children }: { children: ReactNode }) => {
    redirect('/')
  return (
    <>
      
      </>
  )
}

export default Layout
