import * as React from 'react'
import { FC } from "react";


interface FeatureCard {
   index: number
   image: string
   title: string
   description: string
}

const FeatureCard: FC<FeatureCard> = ({index, image, title, description}: FeatureCard) =>
   <div className="card" key={index}>
      <div className="card__image-container">
         <img className="card__image" src={`./images/${image}`} alt=""/>
      </div>
      <div className="card__title-container">
         <h2 className="card__title-container-title">{title}</h2>
      </div>
      <div className="card__description-container">
         <p className="card__description-container-text">
            {description}
         </p>
      </div>
      <div className="card__button-container">
         <a href="#" className="card__button">Learn More</a>
      </div>
   </div>

export default FeatureCard