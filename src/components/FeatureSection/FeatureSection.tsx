import React, { FC, useEffect } from 'react'

import { IUseFetchResponse } from "../../../shared/interfaces/api"
import { tresStudioAPIRoutes } from "../../../utils/constants"
import useFetch from "../../customHooks/useFetch"
import { IFeature } from '../../../shared/interfaces/presentationPage'
import FeatureCard from "./FeatureCard";


type RenderCards = (features: IFeature[]) => JSX.Element[]

interface IFeatures {
   features: IFeature[]
}

const FeatureSection: FC = (): JSX.Element => {

   const features: IUseFetchResponse<IFeatures> = useFetch<IFeatures>(tresStudioAPIRoutes.features)
   const { data, error, loading } = features

   useEffect((): void => {
   }, [ data ])

   if (data)
      return (
         <section className="feature-section--wrap" id="features">
            <div className="feature-section">
               {renderCards(data.features)}
            </div>
         </section>
      )
   else if (error)
      return <div>Error</div>
   else if (loading)
      return <div>Just loading...</div>
   else
      return <div>Something else</div>
}

const renderCards: RenderCards = (features: IFeature[]): JSX.Element[] =>
   features.length === 0
      ? [ <div key={'1'}>Loading...</div> ]
      : features.map(({ image, title, description }: IFeature, index: number) =>
         <FeatureCard key={index} index={index} image={image} title={title} description={description}/>)


export default FeatureSection
