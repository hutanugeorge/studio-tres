import * as React from 'react'
import { FC } from 'react'

import { useSelector } from "react-redux";

import PromotionSection from './PromotionsSection/PromotionSection'
import RewardsSection from './RewardsSection/RewardsSection'
import LastAppointmentsSection from './VisitsSection/VisitsSection'
import { RootState } from "../../reducers";
import { actions } from '../../utils/constants'


type RenderUserView = (userView: string) => JSX.Element

const { REWARDS, VISITS } = actions

const UserDashboardSection: FC = (): JSX.Element => {
   const userView = useSelector((state: RootState) => state.userView)

   return (
      <div className="user-dashboard">
         <div className="user-dashboard__toggle-menu--wrap">
            <div className="user-dashboard__toggle-menu" />
         </div>
         <div className="user-dashboard__mobile-menu--wrap">
            <div className="user-dashboard__mobile-menu">

            </div>
         </div>
         {renderUserView(userView)}
      </div>
   )
}

const renderUserView: RenderUserView = (userView: string): JSX.Element => {
   switch (userView) {
      case REWARDS:
         return <RewardsSection/>
      case VISITS:
         return <LastAppointmentsSection/>
      default:
         return <PromotionSection/>
   }
}


export default UserDashboardSection