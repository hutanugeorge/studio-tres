import * as React from 'react'
import { FC } from 'react'

import { useDispatch, useSelector } from "react-redux";

import PromotionSection from './PromotionsSection/PromotionSection'
import RewardsSection from './RewardsSection/RewardsSection'
import AppointmentsSection from './AppointmentsSection/AppointmentsSection'
import { RootState } from "../../reducers";
import { Actions } from '../../../utils/constants'
import { toggleSettingsMenu } from "../../actions";


type RenderUserView = (userView: string) => JSX.Element

const { REWARDS, VISITS } = Actions

const UserDashboardSection: FC = (): JSX.Element => {
   const userView = useSelector((state: RootState) => state.userView)
   const dispatch = useDispatch()
   const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen)

   return (
      <div className="user-dashboard">
         <div className="user-dashboard__toggle-menu--wrap"
         onClick={() => {
            dispatch(toggleSettingsMenu(isMenuOpen))
         }}>
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
         return <RewardsSection />
      case VISITS:
         return <AppointmentsSection />
      default:
         return <PromotionSection />
   }
}


export default UserDashboardSection