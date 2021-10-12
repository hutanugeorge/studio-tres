import * as React from 'react'
import { FC, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";

import RewardCard from "./RewardsCard";
import { RootState } from "../../../reducers";
import { fetchRewards } from "../../../actions";
import { IReward } from "../../../../shared/interfaces/userDashboard";


type RenderRewardCard = (props: IReward[]) => JSX.Element[]

const RewardsSection: FC = (): JSX.Element => {
   const dispatch = useDispatch()
   const rewards: IReward[] = useSelector((state: RootState) => state.rewards)

   useEffect(() => {
      dispatch(fetchRewards())
   }, [])
   return (
      <div className="rewards--wrap">
         <div className="rewards__title">
            <p className="rewards__title-content">Rewards</p>
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
               {rewards[0].title === 'No rewards yet' ?
                  <div className="rewards-card__product-list--no-rewards" key={1}>Loading Rewards...</div> :
                  renderRewardCards(rewards)}
            </div>
         </div>
      </div>)
}

const renderRewardCards: RenderRewardCard = (rewards: IReward[]): JSX.Element[] =>
   rewards.map(({ title, services }: IReward, index: number): JSX.Element =>
      <RewardCard key={index} title={title} services={services}/>
   )



export default RewardsSection