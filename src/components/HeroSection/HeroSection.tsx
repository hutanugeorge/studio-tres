import React, { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { ILandingInfo } from "../../../shared/interfaces/presentationPage"

import { RootState } from '../../reducers'
import { fetchLanding } from '../../actions'


const HeroSection: FC = (): JSX.Element => {
   const dispatch = useDispatch()

   const landingInfo: ILandingInfo = useSelector((state: RootState) => state.landingInfo)

   useEffect(() => {
      dispatch(fetchLanding())
   }, [])

   const { landingButtonPhrase, landingPhrase } = landingInfo;
   return (
      <section className="hero-section">
         <div className="hero-section__text-container">
            <h1 className="hero-section__title"> {landingPhrase} </h1>
            <div className="hero-section__button-wrap">
               <a href="#" className="hero-section__button">
                  {landingButtonPhrase}
               </a>
            </div>
         </div>
      </section>
   )
}

export default HeroSection