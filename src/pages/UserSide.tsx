import React, { useEffect } from "react"

import { useHistory } from "react-router-dom"

import UserInfo from '../components/UserInfo/UserInfo'
import UserDashboardSection from '../components/UserDarshboard/UserDashboardSection'


const UserSide = () => {
   const history = useHistory()

   const token = localStorage.getItem('token')

   useEffect(() => {
      if (!token)
         history.push('/')

   }, [ ])

   return (
      <div className="user-side">
         <UserInfo/>
         <UserDashboardSection/>
      </div>)
}

export default UserSide