import * as React from 'react'
import { FC, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { IUserData } from "../../../../shared/interfaces/user"

import RewardCard from "./RewardsCard";
import { RootState } from "../../../reducers";
import { fetchRewards } from "../../../actions";
import { IReward } from "../../../../shared/interfaces/userDashboard";


type RenderRewardCard = (props: IReward[]) => JSX.Element[]

const RewardsSection: FC = (): JSX.Element => {
   const history = useHistory()
   const dispatch = useDispatch()

   const rewards: IReward[] = useSelector((state: RootState) => state.rewards)
   const userData: IUserData = useSelector((state: RootState) => state.isUserAuthenticated)

   const isAuthenticated = userData.name !== ''

   useEffect(() => {
      !isAuthenticated ? history.push('/') : dispatch(fetchRewards())
   }, [])
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
                  <p className="rewards__header-points-content">Points <span>1200</span></p>
               </div>
               <div className="rewards__header-code">
                  <p className="rewards__header-code-content">Promotion Code <span>GeorgeHutanu</span></p>
               </div>
            </div>
            <div className="rewards-card__product-list">
               {
                  rewards[0].title === 'No rewards yet'
                     ? <div className="rewards-card__product-list--no-rewards" key={1}>Loading Rewards...</div>
                     : renderRewardCards(rewards)
               }
            </div>
         </div>
      </div>)
}

const renderRewardCards: RenderRewardCard = (rewards: IReward[]): JSX.Element[] =>
   rewards.map(({ title, services }: IReward, index: number) =>
      <RewardCard key={index} title={title} services={services}/>
   )


export default RewardsSection