'use client'
import { Fragment, ReactNode, useEffect } from 'react'
import Aos from 'aos'

/**
 * You can put here all the Providers which are using useContext
 */
const AppProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default AppProviders
