import * as React from 'react'
import { Dispatch, FC } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from "react-redux";

import SettingsIcon from '../Icons/SettingsIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import LocationIcon from '../Icons/LocationIcon'
import DiscountIcon from "../Icons/DiscountIcon";
import RewardIcon from "../Icons/RewardIcon";
import { JSXArrayElements } from "../../shared/types";
import { IUserViewAction } from "../../shared/interfaces/userView";
import { userUpperTabs } from "../../utils/constants";
import HomeIcon from "../Icons/HomeIcon";


type DispatchOnClick = (action: IUserViewAction | undefined, dispatch: Dispatch<IUserViewAction>) => void
type RenderIcon = (title: string) => JSX.Element

const UserInfo: FC = (): JSX.Element => {
   return (
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
                     Hello, <span
                     className="user-info__header--name--firstname">&nbsp; John!</span>
                  </p>
               </div>
               <div className="user-info__details">
                  <Link className="user-info__details--detail" to={'/'}>
                     <div className="user-info__details--detail--icon">
                        <HomeIcon />
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
               <Link className="user-info__details--detail" to={'/'}>
                  <div className="user-info__details--detail--icon">
                     <LogoutIcon/>
                  </div>
                  <p className="user-info__details--detail--personal">Logout</p>
               </Link>
            </div>
         </div>
      </div>)
}

const dispatchOnClick: DispatchOnClick = (action: IUserViewAction | undefined, dispatch: Dispatch<IUserViewAction>): void => {
   action && dispatch(action)
}

const renderUserUpperTabs: JSXArrayElements = (): JSX.Element[] => {
   const dispatch = useDispatch()

   return (userUpperTabs.map(({ title, action }) =>

      <div className="user-info__details--detail"
           onClick={() => dispatchOnClick(action, dispatch)}>
         <div className="user-info__details--detail--icon">
            {renderIcon(title)}
         </div>
         <p className="user-info__details--detail--personal">{title}</p>
      </div>
   ))
}

const renderIcon: RenderIcon = (title: string): JSX.Element => {
   switch (title) {
      case 'Rewards':
         return <RewardIcon/>
      case 'Last visits':
         return <LocationIcon/>
      default:
         return <DiscountIcon/>
   }
}

export default UserInfo