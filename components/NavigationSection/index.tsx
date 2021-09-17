import React from 'react'
import Header from './Header'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const Navigation = (): JSX.Element => (
   <section className="navigation-section">
       <Header />
       <DesktopNavigation />
       <MobileNavigation />
   </section>
)

export default Navigation