import React, { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchFeatures } from '../../actions'
import { RootState } from '../../reducers'
import { IFeature } from '../../shared/interfaces/presentationPage'


interface IFeatures {
  features: IFeature[]
}

type generateCards = (features: IFeatures) => JSX.Element[]

const FeatureSection: FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const features: IFeatures = useSelector((state: RootState) => state.features)

  useEffect(() => {
    dispatch(fetchFeatures())
  }, [ dispatch ])

  return (
    <section className="feature-section--wrap" id="features">
      <div className="feature-section">
        {generateCards(features)}
      </div>
    </section>
  )
}

const generateCards: generateCards = ({ features }: IFeatures): JSX.Element[] => {
  if (features === undefined) return [ <div key={'1'}>Loading...</div> ]
  return features.map((feature: IFeature) =>
    <div className="card" key={feature._id}>
      <div className="card__image-container">
        <img className="card__image" src={`./images/${feature.image}`} alt=""/>
      </div>
      <div className="card__title-container">
        <h2 className="card__title-container-title">{feature.title}</h2>
      </div>
      <div className="card__description-container">
        <p className="card__description-container-text">
          {feature.description}
        </p>
      </div>
      <div className="card__button-container">
        <a href="#" className="card__button">Learn More</a>
      </div>
    </div>
  )
}

export default FeatureSection
