import React, { useEffect, useState } from 'react'

import { getLandingPhrase } from '../../api/tresStudio'

import '../stylesheets/components/_hero-section.sass'
import '../stylesheets/utils/_utils.sass'

const HeroSection = (): JSX.Element => {

   const [phrase, setPhrase] = useState('')

   useEffect(() => {
      getPhrase().catch(console.log)
   }, [])

   const getPhrase = async (): Promise<void> => {
      const { landingInfo } = await getLandingPhrase()
      setPhrase(landingInfo.landingPhrase)
   }

   return (
      <section className="hero-section row">
         <div className="hero-section__image-container">
         </div>
         <div className="hero-section__text-container">
            <h1 className="hero-section__title"> {phrase} </h1>
            <a href="#" className="primary-btn hero-section__button">
               Make an appointment
            </a>
         </div>
      </section>
   )
}

export default HeroSection