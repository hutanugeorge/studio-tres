import React, { FC } from 'react'

import PricingSection from '../components/PricingSection/PricingSection'
import DesktopNavigation from '../components/NavigationSection/DesktopNavigation'
import MobileNavigation from '../components/NavigationSection/MobileNavigation'
import '../components/PricingSection/pricing-section.sass'

const Pricing: FC = (): JSX.Element =>
  <div className="pricing-wrap">
    <DesktopNavigation/>
    <MobileNavigation/>
    <PricingSection/>
  </div>


export default Pricing