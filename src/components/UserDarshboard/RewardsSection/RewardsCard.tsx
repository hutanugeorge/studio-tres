import * as React from "react"

import { IUseFetchResponse } from "../../../../shared/interfaces/api"
import { IUserInfo } from "../../../../shared/interfaces/user"
import { promoCardsColors, tresStudioAPIRoutes } from "../../../../utils/constants"
import { IReward, IRewardService } from "../../../../shared/interfaces/userDashboard";
import useFetch from "../../../customHooks/useFetch"


type RewardService = (props: IReward) => JSX.Element
type RenderRewardServices = (props: IRewardService[]) => JSX.Element[]

const RewardCard: RewardService = ({ title, services }: IReward): JSX.Element => {
   const cardColor = title as keyof typeof promoCardsColors
   const { [cardColor]: color } = promoCardsColors

   return <div className="rewards-card__product-list-content">
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
}

const renderRewardServices: RenderRewardServices = (services: IRewardService[]): JSX.Element[] => {
   const userInfo: IUseFetchResponse<{ userInfo: IUserInfo }> = useFetch<{ userInfo: IUserInfo }>(tresStudioAPIRoutes.user, true)
   const { data, error, loading } = userInfo

   if (data)
      return services.map(({ title, points }: IRewardService, index: number): JSX.Element =>
         <div className="rewards-card__services-list-content-element" key={index}>
            <p className="rewards-card__services-list-content--title">{title}</p>
            <p className="rewards-card__services-list-content--points"> {points} points </p>
            {data.userInfo.rewardsPoints ?
               <a className={`rewards-card__services-list-content--button`}> Take it </a> : null}
         </div>
      )
   else if (error)
      return [ <div key={1}>Error</div> ]
   else if (loading)
      return [ <div key={1}>Just loading...</div> ]
   else
      return [ <div key={1}>Something else</div> ]
}
export default RewardCard