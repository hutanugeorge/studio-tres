import React from 'react'

import { Price, SubService } from '../../utils/constants'
import '../stylesheets/components/_pricing-card.sass'


const PricingCard = (props: Price): JSX.Element => {
    return (
       <div className="pricing-card">
           <div className="pricing-card__main-service">
               <h2 className="pricing-card__main-service--title">
                   {props.title}
               </h2>
           </div>
           <div className="pricing-card__sub-services">
               {generateSubServices(props.subServices)}
           </div>
       </div>
    )
}

const generateSubServices = (subServices: SubService[]): JSX.Element[] =>
   subServices.map(subService => (
      <div className="pricing-card__sub-services--service">
          <h3 className="pricing-card__sub-services--service--title">
              {subService.title}
          </h3>
          <p className="pricing-card__sub-services--service--price">
              {`${subService.price}  RON`}
          </p>
      </div>
   ))

export default PricingCard