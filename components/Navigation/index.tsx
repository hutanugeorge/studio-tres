import React from 'react'
import Header from './Header'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const Navigation = (): JSX.Element => (
   <>
       <Header />
       <DesktopNavigation />
       <MobileNavigation />
   </>
)

export default Navigation