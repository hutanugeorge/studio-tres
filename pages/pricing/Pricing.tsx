import * as React from 'react'

import PricingSection from '../../components/PricingSection/PricingSection'
import Navigation from '../../components/NavigationSection'

const Pricing = (): JSX.Element =>
    (
       <>
          <Navigation />
          <PricingSection />
       </>
    )

export default Pricing