import * as React from "react"

import { promoCardsColors } from "../../../../utils/constants"
import { IReward, IRewardService } from "../../../../shared/interfaces/userDashboard";


type RewardService = (props: IReward) => JSX.Element
type RenderRewardServices = (props: IRewardService[]) => JSX.Element[]

const RewardCard: RewardService = ({ title, services }: IReward): JSX.Element => {
   const cardColor = title as keyof typeof promoCardsColors
   const { [cardColor]: color } = promoCardsColors
   return <>
      <div className="rewards-card__product-list-content">
         <div className={`rewards-card__product-list-image rewards-card__product-list-image${color}`}/>
         <div className="rewards-card__services-list">
            <div className="rewards-card__services-list-header">
               <p className="rewards-card__services-list-header--text">{title}</p>
            </div>
            <div className="rewards-card__services-list-content">
               {renderRewardServices(services)}
            </div>
         </div>
      </div>
   </>
}

const renderRewardServices: RenderRewardServices = (services: IRewardService[]): JSX.Element[] =>
   services.map(({ title, points }: IRewardService, index: number): JSX.Element =>
      <div className="rewards-card__services-list-content-element" key={index}>
         <p className="rewards-card__services-list-content--title">{title}</p>
         <p className="rewards-card__services-list-content--points"> {points} points </p>
         <a className="rewards-card__services-list-content--button"> Take it </a>
      </div>
   )
export default RewardCard