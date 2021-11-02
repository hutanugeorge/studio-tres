import React, { FC } from 'react'

import ProgramSection from '../components/Program/ProgramSection'
import DesktopNavigation from '../components/NavigationSection/DesktopNavigation'
import MobileNavigation from '../components/NavigationSection/MobileNavigation'
import '../components/Program/program-section.sass'


const Program: FC = (): JSX.Element =>
  <div className="section-program__wrap">
    <DesktopNavigation/>
    <MobileNavigation/>
    <ProgramSection/>
  </div>

export default Program