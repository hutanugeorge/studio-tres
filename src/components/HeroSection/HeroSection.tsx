import React, { FC, useEffect } from 'react'

import { Link } from "react-router-dom"

import { IUseFetchResponse } from "../../../shared/interfaces/api"
import { ILandingInfo } from "../../../shared/interfaces/presentationPage"
import useFetch from '../../customHooks/useFetch'
import { tresStudioAPIRoutes } from "../../../utils/constants"


interface ILandingInfoResponse {
   landingInfo: ILandingInfo
}

const HeroSection: FC = (): JSX.Element => {
   const landingInfo: IUseFetchResponse<ILandingInfoResponse> = useFetch<ILandingInfoResponse>(tresStudioAPIRoutes.landing)
   const { data, error, loading } = landingInfo

   useEffect((): void => {
   }, [ data ])

   if (data)
      return (
         <section className="hero-section">
            <div className="hero-section__text-container">
               <h1 className="hero-section__title"> {data.landingInfo.landingPhrase} </h1>
               <div className="hero-section__button-wrap">
                  <Link to="/appointment" className="hero-section__button">
                     {data.landingInfo.landingButtonPhrase}
                  </Link>
               </div>
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

export default HeroSection