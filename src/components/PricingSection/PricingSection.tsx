import React, { FC } from 'react'

import { JSXArrayElements } from '../../../shared/types'
import { prices } from '../../../utils/constants'
import PricingCard from './PricingCard'
import './pricing-section.sass'


const PricingSection: FC = (): JSX.Element => {
  return (
    <section className="pricing-section">
      <div className="pricing-section__cards">
        {renderCards()}
      </div>
    </section>
  )
}

const renderCards: JSXArrayElements = (): JSX.Element[] => prices.map((price, index: number) => (
  <PricingCard key={index} title={price.title} subServices={price.subServices}/>
))

export default PricingSection