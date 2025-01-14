import React, { FC } from 'react'

import Navbar from './Navbar'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout: FC = ({ children }) => {
  return (
    <section>
      <Navigation />
      <section className="ml-0 xl:ml-64">
        <Navbar />
        <section className="mt-[84px] pt-7 bg-warmGray-200 min-h-content-main text-[#d0d2d6] px-4 sm:px-7">
          {children}
        </section>
        <Footer />
      </section>
    </section>
  )
}

export default Layout
