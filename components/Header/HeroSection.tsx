import React from 'react'

import '../stylesheets/components/_hero-section.sass'

const HeroSection = (): JSX.Element => {
    return (
       <div className="hero-section">
           <div className="hero-section__image-container">
           </div>
           <div className="hero-section__text-container">
                <h1 className="hero-section__title"> Come to us to get beauty </h1>
                <a href="#" className="primary-btn hero-section__button">
                   Make an appointment
               </a>
           </div>
       </div>
    )
}

export  default HeroSection