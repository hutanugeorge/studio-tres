import React from 'react'

import { prices } from '../../utils/constants'
import PricingCard from '../Cards/PricingCard'
import '../stylesheets/components/_pricing-section.sass'

const PricingSection = (): JSX.Element => {
    return (
       <section className="pricing-section">
           {generateCards()}
       </section>
    )
}

const generateCards = (): JSX.Element[] => prices.map(price => (
   <PricingCard title={price.title} subServices={price.subServices}/>
))

export default PricingSection