import React from 'react'

import '../stylesheets/components/_card.sass'
import { featureCard } from '../../utils/constants'


const Card = (props: featureCard):JSX.Element => {
    return (
       <div className="card">
           <div className="card__image-container" >
               <img className="card__image" src={`./images/${props.image}`} alt=""/>
           </div>
           <div className="card__title-container">
               <h2 className="card__title-container-title">{props.title}</h2>
           </div>
           <div className="card__description-container">
               <p className="card__description-container-text">
                   {props.description}
               </p>
           </div>
           <div className="card__button-container">
               <a href="#" className="card__button">Learn More</a>
           </div>
       </div>
    )
}


export default Card