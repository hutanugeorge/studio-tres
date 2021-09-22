import React from 'react'

import { JSXArrayElements } from '../../shared/types'
import { prices } from '../../utils/constants'
import PricingCard from '../Cards/PricingCard'
import '../stylesheets/components/_pricing-section.sass'


const PricingSection = (): JSX.Element =>
      <section className="pricing-section">
         <div className="pricing-section__title-container">
            <h1 className="pricing-section__title">
               Pricing
            </h1>
         </div>
         <div className="pricing-section__cards">
            {generateCards()}
         </div>
      </section>


const generateCards:JSXArrayElements = (): JSX.Element[] => prices.map(price => (
   <PricingCard title={price.title} subServices={price.subServices}/>
))

export default PricingSection