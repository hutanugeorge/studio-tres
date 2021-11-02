import React from "react"
import DiscountIcon from "../Icons/DiscountIcon"
import LocationIcon from "../Icons/LocationIcon"
import PeopleIcon from "../Icons/PeopleIcon"
import RewardIcon from "../Icons/RewardIcon"
import StatisticsIcon from "../Icons/StatisticsIcon"


export type RenderIcon = (title: string, active: boolean) => JSX.Element

export const renderCustomerIcon: RenderIcon = (title: string, active: boolean): JSX.Element => {
   switch (title) {
      case 'Rewards':
         return <RewardIcon active={active}/>
      case 'Appointments':
         return <LocationIcon active={active}/>
      default:
         return <DiscountIcon active={active}/>
   }
}

export const renderAdminIcon: RenderIcon = (title: string, active: boolean): JSX.Element => {
   switch (title) {
      case 'Employees':
         return <PeopleIcon active={active}/>
      case 'Statistics':
         return <StatisticsIcon active={active} />
      default:
         return <PeopleIcon active={active}/>
   }
}

export const renderEmployeeIcon: RenderIcon = (title: string, active: boolean): JSX.Element => {
   switch (title) {
      case 'Appointments':
         return <LocationIcon active={active}/>
      default:
         return <LocationIcon active={active}/>
   }
}