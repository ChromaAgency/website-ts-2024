'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getHorizontalMenuItems, getMenuItems } from '@/helpers/menu'
import { OffcanvasLayout } from '@/components'
import AppMenu from './Menu'
import VerticalMenu from './VerticalMenu'
import { useToggle } from '@/hooks'


import logoDark from '@/assets/images/logo-dark.png'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [isOpenOffcanvas, toggleOffcanvas, _openOffcanvas, closeOffcanvas] =
    useToggle()

  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY >= 80) {
          navbarRef.current.classList.add(
            'bg-white',
            'shadow-panel',
            'border-slate-200/80'
          )
        } else {
          navbarRef.current.classList.remove(
            'bg-white',
            'shadow-panel',
            'border-slate-200/80'
          )
        }
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, []) 

  return (
    <>
      <header
        id="navbar"
        ref={navbarRef}
        className="fixed top-0 inset-x-0 flex items-center z-40 w-full bg-white/95 lg:bg-white/75 backdrop-blur-md border-b border-transparent transition-all py-4"
      >
        <div className="container">
          <nav className="flex items-center">
            <Link href="/">
              <Image src={logoDark} className="h-8" width={126} alt="Logo" />
            </Link>
            <div className="lg:block hidden ms-auto rounded-full border border-slate-200/80 bg-white/90 px-4 py-1.5 shadow-sm">
              <AppMenu menuItems={getHorizontalMenuItems()} />
            </div>
            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button
                type="button"
                onClick={toggleOffcanvas}
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-brand"
              >
                <FaBars size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <OffcanvasLayout
        placement="end"
        sizeClassName="w-full max-w-sm bg-white border-s border-slate-200"
        open={isOpenOffcanvas}
        toggleOffcanvas={closeOffcanvas}
      >
        <div className="flex flex-col h-screen divide-y-2 divide-gray-200">
          <div className="p-6 flex items-center justify-between">
            <Link href="/">
              <Image src={logoDark} width={126} className="h-8" alt="Logo" />
            </Link>
            <button
              className="flex items-center rounded-md border border-slate-200 px-2 py-1 text-brand"
              onClick={closeOffcanvas}
            >
              <FaXmark size={20} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-full" id="right-menu">
            <VerticalMenu menuItems={getMenuItems()} />
          </div>
        </div>
      </OffcanvasLayout>
    </>
  )
}

export default Navbar