import * as React from 'react'
import { FC } from 'react'

import ScheduleSection from '../../components/Program/ScheduleSection'
import DesktopNavigation from '../../components/NavigationSection/DesktopNavigation'
import MobileNavigation from '../../components/NavigationSection/MobileNavigation'
import '../../components/Program/schedule-section.sass'


const Program: FC = (): JSX.Element =>
  <div className="section-program__wrap">
    <DesktopNavigation/>
    <MobileNavigation/>
    <ScheduleSection/>
  </div>

export default Program