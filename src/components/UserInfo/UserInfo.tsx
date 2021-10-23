import React, { Dispatch, FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"
import { IUserInfo } from "../../../shared/interfaces/user"
import HomeIcon from "../Icons/HomeIcon"

import SettingsIcon from '../Icons/SettingsIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import LocationIcon from '../Icons/LocationIcon'
import DiscountIcon from "../Icons/DiscountIcon"
import RewardIcon from "../Icons/RewardIcon"
import { RootState } from "../../reducers"
import { fetchUserInfo, logoutUser, setUserView, toggleSettingsMenu } from "../../actions"
import { Actions, userUpperTabs } from "../../../utils/constants"
import { JSXArrayElements } from "../../../shared/types"
import { IUserViewAction } from "../../../shared/interfaces/userView"


type DispatchOnClick = (action: IUserViewAction | undefined, dispatch: Dispatch<IUserViewAction>) => void
type RenderIcon = (title: string, active: boolean) => JSX.Element

const UserInfo: FC = (): JSX.Element => {
   const dispatch = useDispatch()

   const isMenuOpen: boolean = useSelector((state: RootState) => state.isMenuOpen)
   const userInfo: IUserInfo = useSelector((state: RootState) => state.userInfo)
   const openUserClassName = 'user-info__mobile--open'

   useEffect(() => {
      dispatch(fetchUserInfo())
   }, [])
   return (
      <>
         <div className="user-info-wrap">
            <div className="user-info">
               <div className="user-info__container">
                  <div className="user-info__header">
                     <div className="user-info__header--image">
                        <img
                           src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Sunglasses&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=DarkBrown"
                           alt="avatar" className="user-info__header--image--content"/>
                     </div>
                     <p className="user-info__header--name">
                        Hello,
                        <span className="user-info__header--name--firstname">
                        &nbsp;{userInfo.firstName}!
                     </span>
                     </p>
                  </div>
                  <div className="user-info__details">
                     <Link className="user-info__details--detail" to={'/'}>
                        <div className="user-info__details--detail--icon">
                           <HomeIcon/>
                        </div>
                        <p className="user-info__details--detail--personal">Home</p>
                     </Link>
                     {renderUserUpperTabs()}
                  </div>
               </div>
               <div className="user-info__settings">
                  <div className="user-info__details--detail">
                     <div className="user-info__details--detail--icon">
                        <SettingsIcon/>
                     </div>
                     <p className="user-info__details--detail--personal">Settings</p>
                  </div>
                  <Link className="user-info__details--detail"
                        to={'/'}
                        onClick={() => dispatch(logoutUser())}>
                     <div className="user-info__details--detail--icon">
                        <LogoutIcon/>
                     </div>
                     <p className="user-info__details--detail--personal">Logout</p>
                  </Link>
               </div>
            </div>
         </div>
         <div
            onClick={() => {
               dispatch(toggleSettingsMenu(isMenuOpen))
            }}
            className={`user-info__mobile ${isMenuOpen ? openUserClassName : ''}`}>
            <div
               onClick={(e) => {
                  e.stopPropagation()
               }}
               className="user-info__mobile-settings">
               <div className="user-info__mobile-details--detail">
                  <div className="user-info__mobile-details--detail--icon">
                     <SettingsIcon/>
                  </div>
                  <p className="user-info__mobile-details--detail--personal">Settings</p>
               </div>
               <Link className="user-info__mobile-details--detail" to={'/'}>
                  <div className="user-info__mobile-details--detail--icon">
                     <LogoutIcon/>
                  </div>
                  <p className="user-info__mobile-details--detail--personal">Logout</p>
               </Link>
            </div>
         </div>
      </>
   )
}

const dispatchOnClick: DispatchOnClick = (action: IUserViewAction | undefined, dispatch: Dispatch<IUserViewAction>): void => {
   action && dispatch(action)
}

const renderUserUpperTabs: JSXArrayElements = (): JSX.Element[] => {
   const dispatch = useDispatch()
   const [ activeTab, setActiveTab ] = useState<string>('Discounts')

   useEffect(() => {
      dispatchOnClick(setUserView(Actions.DISCOUNTS), dispatch)
   }, [])

   return (userUpperTabs.map(({ title, action }, index: number) =>
      <div key={index}
           className={`user-info__details--detail ${activeTab === title ? 'user-info__details--detail--active' : ''}`}
           onClick={() => {
              dispatchOnClick(action, dispatch)
              setActiveTab(title)
           }}>
         <div className="user-info__details--detail--icon">
            {activeTab === title ? renderIcon(title, true) : renderIcon(title, false)}
         </div>
         <p className="user-info__details--detail--personal">{title}</p>
      </div>
   ))
}

const renderIcon: RenderIcon = (title: string, active: boolean): JSX.Element => {
   switch (title) {
      case 'Rewards':
         return <RewardIcon active={active}/>
      case 'Appointments':
         return <LocationIcon active={active}/>
      default:
         return <DiscountIcon active={active}/>
   }
}

export default UserInfo