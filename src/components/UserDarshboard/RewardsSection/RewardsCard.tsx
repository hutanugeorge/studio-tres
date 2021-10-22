import * as React from "react"
import { useSelector } from "react-redux"
import { IUserInfo } from "../../../../shared/interfaces/user"

import { promoCardsColors } from "../../../../utils/constants"
import { IReward, IRewardService } from "../../../../shared/interfaces/userDashboard";
import { RootState } from "../../../reducers"


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

const renderRewardServices: RenderRewardServices = (services: IRewardService[]): JSX.Element[] => {
   const { rewardsPoints }: IUserInfo = useSelector((state: RootState) => state.userInfo)
   return services.map(({ title, points }: IRewardService, index: number): JSX.Element => {
      return (
         <div className="rewards-card__services-list-content-element" key={index}>
            <p className="rewards-card__services-list-content--title">{title}</p>
            <p className="rewards-card__services-list-content--points"> {points} points </p>
            <a className={`rewards-card__services-list-content--button${rewardsPoints < Number(points) ? '--disable' : ''}`}> Take
               it </a>
         </div>)
      }
   )
}
export default RewardCard