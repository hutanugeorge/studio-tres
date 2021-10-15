import { useEffect } from "react"
import * as React from 'react'
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import UserInfo from '../components/UserInfo/UserInfo'
import UserDashboardSection from '../components/UserDarshboard/UserDashboardSection'
import { RootState } from "../reducers"


const UserSide = () => {
   const history = useHistory()

   const loginStatus = useSelector((state: RootState) => state.isUserAuthenticated)

   const isAuthenticated = loginStatus.name !== ''

   useEffect(() => {
      !isAuthenticated && history.push('/userDashboard')
   }, [])

   return (
       <div className="user-side">
         <UserInfo/>
         <UserDashboardSection/>
      </div>)
}

export default UserSide