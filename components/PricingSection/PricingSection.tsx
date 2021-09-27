import React from 'react'

import { JSXArrayElements } from '../../shared/types'
import { prices } from '../../utils/constants'
import PricingCard from '../PricindCard/PricingCard'
import './pricing-section.sass'


const PricingSection = (): JSX.Element => {
  return (
    <section className="pricing-section">
      <div className="pricing-section__cards">
        {generateCards()}
      </div>
    </section>
  )
}

const generateCards: JSXArrayElements = (): JSX.Element[] => prices.map(price => (
  <PricingCard title={price.title} subServices={price.subServices}/>
))

export default PricingSection