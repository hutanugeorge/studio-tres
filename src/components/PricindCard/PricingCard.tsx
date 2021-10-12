import React, { FC } from 'react'

import { Price, SubService } from '../../../utils/constants'


type GenerateCards = (subServices: SubService[]) => Array<JSX.Element>

const PricingCard: FC<Price> = (props: Price): JSX.Element => {
   return (
      <div className="pricing-card">
         <div className="pricing-card__main-service">
            <h2 className="pricing-card__main-service--title">
               {props.title}
            </h2>
         </div>
         <div className="pricing-card__sub-services">
            {renderSubServices(props.subServices)}
         </div>
      </div>
   )
}

const renderSubServices: GenerateCards = (subServices: SubService[]): Array<JSX.Element> =>
   subServices.map((subService, index) => (
      <div key={index} className="pricing-card__sub-services--service">
         <h3 className="pricing-card__sub-services--service--title">
            {subService.title}
         </h3>
         <p className="pricing-card__sub-services--service--price">
            {`${subService.price}  RON`}
         </p>
      </div>
   ))

export default PricingCard

