import React from 'react'

import FeatureCard from '../Cards/FeatureCard'
import '../stylesheets/components/_feature-section.sass'
import { featureCards } from '../../utils/constants'


const FeatureSection = (): JSX.Element => (
   <section className="feature-section--wrap">
      <div className="feature-section">
         {generateCards()}
      </div>
   </section>
)

const generateCards = () => featureCards.map(({
                                                 image,
                                                 title,
                                                 description
                                              }, index) => (
   <FeatureCard image={image} title={title} description={description}
                key={index}/>
))

export default FeatureSection
