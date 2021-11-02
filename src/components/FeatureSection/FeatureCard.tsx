import React, { FC } from "react"


interface IFeatureCard {
   readonly index: number
   readonly image: string
   readonly title: string
   readonly description: string
}

const FeatureCard: FC<IFeatureCard> = ({index, image, title, description}: IFeatureCard): JSX.Element =>
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