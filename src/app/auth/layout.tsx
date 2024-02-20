'use client'

import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

import 'react-toastify/dist/ReactToastify.min.css'

const Layout = ({ children }: { children: ReactNode }) => {
  // For now we dont want auth support
  redirect('/')
  return (
    <>
      {children}
    </>
  )
}

export default Layout
