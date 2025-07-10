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
          navbarRef.current.classList.add('bg-white', 'shadow', 'lg:bg-white')
        } else {
          navbarRef.current.classList.remove(
            'bg-white',
            'shadow',
            'lg:bg-white'
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
        className="fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5"
      >
        <div className="container">
          <nav className="flex items-center">
            <Link href="/">
              <Image src={logoDark} className="h-8" width={126} alt="Logo" />
            </Link>
            <div className="lg:block hidden ms-auto">
              <AppMenu menuItems={getHorizontalMenuItems()} />
            </div>
            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button type="button" onClick={toggleOffcanvas}>
                <FaBars size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <OffcanvasLayout
        placement="end"
        sizeClassName="w-full max-w-sm bg-white border-s"
        open={isOpenOffcanvas}
        toggleOffcanvas={closeOffcanvas}
      >
        <div className="flex flex-col h-screen divide-y-2 divide-gray-200">
          <div className="p-6 flex items-center justify-between">
            <Link href="/">
              <Image src={logoDark} width={126} className="h-8" alt="Logo" />
            </Link>
            <button className="flex items-center px-2" onClick={closeOffcanvas}>
              <FaXmark size={20} />
            </button>
          </div>
          {/* Mobile Menu Link List */}
          <div className="p-6 overflow-y-auto h-full" id="right-menu">
            <VerticalMenu menuItems={getMenuItems()} />
          </div>
        </div>
      </OffcanvasLayout>
    </>
  )
}

export default Navbar