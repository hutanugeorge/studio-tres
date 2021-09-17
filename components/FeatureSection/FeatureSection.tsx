import React from 'react'

import Card from '../Card/Card'
import '../stylesheets/components/_feature-section.sass'
import { featureCards } from '../../utils/constants'


const FeatureSection = (): JSX.Element => (
   <section className="feature-section">
       {generateCards()}
   </section>
)

const generateCards = () => featureCards.map(({ image, title, description }) => (
   <Card image={image} title={title} description={description}/>
))

export default FeatureSection
