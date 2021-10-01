import * as React from 'react'
import { FC } from 'react'

import PhoneIcon from '../Icons/PhoneIcon'
import PersonIcon from '../Icons/PersonIcon'
import SettingsIcon from '../Icons/SettingsIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import LocationIcon from '../Icons/LocationIcon'
import MailIcon from '../Icons/MailIcon'
import { Link } from 'react-router-dom'

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
            <div className="user-info__details--detail">
              <div className="user-info__details--detail--icon">
                <PersonIcon/>
              </div>
              <p className="user-info__details--detail--personal">John Smith</p>
            </div>
            <div className="user-info__details--detail">
              <div className="user-info__details--detail--icon">
                <MailIcon/>
              </div>
              <p className="user-info__details--detail--personal">john@smith.com</p>
            </div>
            <div className="user-info__details--detail">
              <div className="user-info__details--detail--icon">
                <PhoneIcon/>
              </div>
              <p className="user-info__details--detail--personal">0742 572 009</p>
            </div>
            <div className="user-info__details--detail">
              <div className="user-info__details--detail--icon">
                <LocationIcon/>
              </div>
              <p className="user-info__details--detail--personal">7</p>
            </div>
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
            <p className="user-info__details--detail--personal" >Logout</p>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default UserInfo