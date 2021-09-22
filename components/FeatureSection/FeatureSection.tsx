import React, { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchFeatureCards } from '../../actions'
import '../stylesheets/components/_feature-section.sass'
import '../stylesheets/components/_card.sass'
import { RootState } from '../../reducers'
import { FeatureCard } from '../../shared/interfaces/featureSection'


interface FeatureCards {
  featureCards: FeatureCard[]
}

type generateCards = (featureCards: FeatureCards) => JSX.Element[]

const FeatureSection: FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const featureCards: FeatureCards = useSelector((state: RootState) => state.featureCards)

  useEffect(() => {
    dispatch(fetchFeatureCards())
  }, [ dispatch ])

  return (
    <section className="feature-section--wrap">
      <div className="feature-section">
        {generateCards(featureCards)}
      </div>
    </section>
  )
}

const generateCards: generateCards = ({ featureCards }: FeatureCards): JSX.Element[] => {
  if (featureCards === undefined) return [ <div key={'1'}>Loading...</div> ]
  return featureCards.map((featureCard: FeatureCard) =>
    <div className="card" key={featureCard._id}>
      <div className="card__image-container">
        <img className="card__image" src={`./images/${featureCard.image}`} alt=""/>
      </div>
      <div className="card__title-container">
        <h2 className="card__title-container-title">{featureCard.title}</h2>
      </div>
      <div className="card__description-container">
        <p className="card__description-container-text">
          {featureCard.description}
        </p>
      </div>
      <div className="card__button-container">
        <a href="#" className="card__button">Learn More</a>
      </div>
    </div>
  )
}

export default FeatureSection
