import React, { Dispatch, FC, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { IUseFetchResponse } from "../../../shared/interfaces/api"
import useFetch from "../../customHooks/useFetch"
import HomeIcon from "../Icons/HomeIcon"
import SettingsIcon from '../Icons/SettingsIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import { RootState } from "../../reducers"
import { logoutUser, setUserView, toggleSettingsMenu } from "../../actions"
import { Actions, IUpperTab, tresStudioAPIRoutes } from "../../../utils/constants"
import { IUserInfo } from "../../../shared/interfaces/user"
import { IUserViewAction } from "../../../shared/interfaces/userView"
import { RenderIcon } from "./renderIcons"


interface IUserInfoBarArgs {
   customerUpperTabs: IUpperTab[]
   renderIcon: RenderIcon
}

type RenderCustomerUpperTabs = (tabs: IUpperTab[], renderIcon: RenderIcon, role: string | undefined) => JSX.Element[]
type DispatchOnClick = (action: IUserViewAction | undefined, dispatch: Dispatch<IUserViewAction>) => void

const UserInfoBar: FC<IUserInfoBarArgs> = ({ customerUpperTabs, renderIcon }: IUserInfoBarArgs): JSX.Element => {
   const dispatch = useDispatch()

   const isMenuOpen: boolean = useSelector((state: RootState) => state.isMenuOpen)
   const userInfo: IUseFetchResponse<{ userInfo: IUserInfo }> = useFetch<{ userInfo: IUserInfo }>(tresStudioAPIRoutes.user, true)

   const openUserClassName = 'user-info__mobile--open'

   useEffect((): void => {
   }, [ userInfo.data ])

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
                        &nbsp;{userInfo.data?.userInfo.firstName}!
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
                     {renderUpperTabs(customerUpperTabs, renderIcon, userInfo.data?.userInfo.role)}
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
                        onClick={(): void => {
                           dispatch(logoutUser())
                        }}>
                     <div className="user-info__details--detail--icon">
                        <LogoutIcon/>
                     </div>
                     <p className="user-info__details--detail--personal">Logout</p>
                  </Link>
               </div>
            </div>
         </div>
         <div
            onClick={(): void => {
               dispatch(toggleSettingsMenu(isMenuOpen))
            }}
            className={`user-info__mobile ${isMenuOpen ? openUserClassName : ''}`}>
            <div
               onClick={(e): void => {
                  e.stopPropagation()
               }}
               className="user-info__mobile-settings">
               <div className="user-info__mobile-details--detail">
                  <div className="user-info__mobile-details--detail--icon">
                     <SettingsIcon/>
                  </div>
                  <p className="user-info__mobile-details--detail--personal">Settings</p>
               </div>
               <Link className="user-info__mobile-details--detail" to={'/'}
                     onClick={(): void => {
                        dispatch(logoutUser())
                        dispatch(toggleSettingsMenu(isMenuOpen))
                     }}>
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

const renderUpperTabs: RenderCustomerUpperTabs = (tabs: IUpperTab[], renderIcon: RenderIcon, role: string | undefined): JSX.Element[] => {
   const dispatch = useDispatch()

   const [ activeTab, setActiveTab ] = useState<string>('')

   useEffect((): void => {
      let firstView = Actions.DISCOUNTS
      if (role === 'customer') {
         firstView = Actions.DISCOUNTS
         setActiveTab('Discounts')
      } else if (role === 'employee') {
         firstView = Actions.VISITS
         setActiveTab('Appointments')
      } else if (role === 'admin') {
         firstView = Actions.EMPLOYEES
         setActiveTab('Employees')
      }
      dispatchOnClick(setUserView(firstView), dispatch)
   }, [ role ])

   return (tabs.map(({ title, action }, index: number): JSX.Element =>
      <div key={index}
           className={`user-info__details--detail ${activeTab === title ? 'user-info__details--detail--active' : ''}`}
           onClick={(): void => {
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


export default UserInfoBar