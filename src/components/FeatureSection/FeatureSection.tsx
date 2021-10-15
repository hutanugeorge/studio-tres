import React, { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchFeatures } from '../../actions'
import { RootState } from '../../reducers'
import { IFeature } from '../../../shared/interfaces/presentationPage'
import FeatureCard from "./FeatureCard";


type RenderCards = (features: IFeature[]) => JSX.Element[]

const FeatureSection: FC = (): JSX.Element => {
   const dispatch = useDispatch()

   const features: IFeature[] = useSelector((state: RootState) => state.features)

   useEffect(() => {
      dispatch(fetchFeatures())
   }, [])

   return (
      <section className="feature-section--wrap" id="features">
         <div className="feature-section">
            {renderCards(features)}
         </div>
      </section>
   )
}

const renderCards: RenderCards = (features: IFeature[]): JSX.Element[] =>
   features.length === 0
      ? [ <div key={'1'}>Loading...</div> ]
      : features.map(({ image, title, description }: IFeature, index: number) =>
         <FeatureCard key={index} index={index} image={image} title={title} description={description}/>)


export default FeatureSection
