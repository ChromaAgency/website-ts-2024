import type { Metadata } from 'next'
import {  Poppins } from 'next/font/google'
import { ReactNode } from 'react'

// styles
import './globals.css'
import 'aos/dist/aos.css'
import AppProviders from '@/components/AppProviders'

const PoppinsFont = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: {
    template:
      '%s | Chroma',
    default: 'Chroma',
  },
  description:
    'Tu implementador de ERP.',
  authors: [{ name: 'Chroma' }],
}



export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {

  return (
    <html lang="es" className='dark'>

      <body className={PoppinsFont.className}>
        <AppProviders>
          <div id='__next_splash'>
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  )
}
