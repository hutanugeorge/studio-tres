import React, { FC } from 'react'

import PricingSection from '../../components/PricingSection/PricingSection'
import Navigation from '../../components/NavigationSection/NavigationSection'

const Pricing: FC = (): JSX.Element =>
  (
    <>
      <Navigation/>
      <PricingSection/>
    </>
  )

export default Pricing