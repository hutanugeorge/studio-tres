import React, { FC, useEffect } from 'react'

import { useHistory } from "react-router-dom"

import RewardCard from "./RewardsCard"
import { IUseFetchResponse } from "../../../../shared/interfaces/api"
import { IUserInfo } from "../../../../shared/interfaces/user"
import { tresStudioAPIRoutes } from "../../../../utils/constants"
import useFetch from "../../../customHooks/useFetch"
import { IReward } from "../../../../shared/interfaces/userDashboard"


type RenderRewardCard = (props: IReward[]) => JSX.Element[]

const RewardsSection: FC = (): JSX.Element => {
   const history = useHistory()

   const rewards: IUseFetchResponse<{ rewards: IReward[] }> = useFetch<{ rewards: IReward[] }>(tresStudioAPIRoutes.rewards, true)
   const userInfo: IUseFetchResponse<{ userInfo: IUserInfo }> = useFetch<{ userInfo: IUserInfo }>(tresStudioAPIRoutes.user, true)

   const token = localStorage.getItem('token')

   useEffect((): void => {
      !token && history.push('/')
   }, [ userInfo.data, rewards.data ])

   if (userInfo.data && rewards.data)
      return (
         <div className="rewards--wrap">
            <div className="rewards__title">
               <p className="rewards__title-content">
                  Rewards
               </p>
            </div>
            <div className="rewards">
               <div className="rewards__header">
                  <div className="rewards__header-points">
                     <p className="rewards__header-points-content">Points <span>{userInfo.data.userInfo.rewardsPoints}</span>
                     </p>
                  </div>
                  <div className="rewards__header-code">
                     <p className="rewards__header-code-content">
                        Promotion Code <span>{userInfo.data.userInfo.promotionCode}</span></p>
                  </div>
               </div>
               <div className="rewards-card__product-list">
                  {
                     rewards.data.rewards[0].title === 'No rewards yet'
                        ? <div className="rewards-card__product-list--no-rewards" key={1}>Loading Rewards...</div>
                        : renderRewardCards(rewards.data.rewards)
                  }
               </div>
            </div>
         </div>
      )
   else if (userInfo.error || rewards.error)
      return <div>Error</div>
   else if (userInfo.loading || rewards.loading)
      return <div>Just loading...</div>
   else
      return <div>Something else</div>
}

const renderRewardCards: RenderRewardCard = (rewards: IReward[]): JSX.Element[] =>
   rewards.map(({ title, services }: IReward, index: number) =>
      <RewardCard key={index} title={title} services={services}/>
   )


export default RewardsSection