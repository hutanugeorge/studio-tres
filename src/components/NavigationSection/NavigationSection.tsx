import React, { FC } from 'react'

import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import HeroSection from '../HeroSection/HeroSection'


const Navigation: FC = (): JSX.Element => (
   <section className="navigation-section">
      <DesktopNavigation/>
      <MobileNavigation/>
      <HeroSection/>
   </section>
)

export default Navigation