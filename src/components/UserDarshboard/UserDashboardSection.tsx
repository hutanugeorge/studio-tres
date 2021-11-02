import React, { FC } from 'react'

import { useDispatch, useSelector } from "react-redux"

import EmployeesSection from "./EmployeesSection/EmployeesSection"
import PromotionSection from './PromotionsSection/PromotionSection'
import RewardsSection from './RewardsSection/RewardsSection'
import AppointmentsSection from './AppointmentsSection/AppointmentsSection'
import { RootState } from "../../reducers"
import { Actions } from '../../../utils/constants'
import { toggleSettingsMenu } from "../../actions"


type RenderUserView = (userView: string) => JSX.Element

const { REWARDS, VISITS, STATISTICS } = Actions

const UserDashboardSection: FC<{ role: string }> = ({ role }: { role: string }): JSX.Element => {
   const dispatch = useDispatch()

   const userView: string = useSelector((state: RootState) => state.userView)
   const isMenuOpen: boolean = useSelector((state: RootState) => state.isMenuOpen)

   return (
      <div className="user-dashboard">
         <div className="user-dashboard__toggle-menu--wrap"
              onClick={(): void => {
                 dispatch(toggleSettingsMenu(isMenuOpen))
              }}>
            <div className="user-dashboard__toggle-menu"/>
         </div>
         <div className="user-dashboard__mobile-menu--wrap">
            <div className="user-dashboard__mobile-menu">

            </div>
         </div>
         {renderViewBaseOnRole(role, userView)}
      </div>
   )
}

const renderViewBaseOnRole = (role: string, userView: string): JSX.Element | undefined => {
   if (role === 'customer') return renderCustomerView(userView)
   else if (role === 'employee') return renderEmployeeView(userView)
   else if (role === 'admin') return renderAdminView(userView)
}

const renderCustomerView: RenderUserView = (userView: string): JSX.Element => {
   switch (userView) {
      case REWARDS:
         return <RewardsSection/>
      case VISITS:
         return <AppointmentsSection/>
      default:
         return <PromotionSection/>
   }
}

const renderEmployeeView: RenderUserView = (userView: string): JSX.Element => {
   switch (userView) {
      case VISITS:
         return <AppointmentsSection/>
      default:
         return <AppointmentsSection/>
   }
}

const renderAdminView: RenderUserView = (userView: string): JSX.Element => {
   switch (userView) {
      case STATISTICS:
         return <AppointmentsSection/>
      default:
         return <EmployeesSection/>
   }
}

export default UserDashboardSection