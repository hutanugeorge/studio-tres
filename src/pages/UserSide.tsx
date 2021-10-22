import React, { Dispatch, SetStateAction, useEffect } from "react"

import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import { Action } from "../../shared/interfaces/api"
import { IUser } from "../../shared/interfaces/user"
import UserInfo from '../components/UserInfo/UserInfo'
import UserDashboardSection from '../components/UserDarshboard/UserDashboardSection'
import { logoutUser } from "../actions"


const UserSide = () => {
   const history = useHistory()
   const dispatch = useDispatch()

   const token = localStorage.getItem('token')

   useEffect(() => {
      if (!token)
         history.push('/')
      else
         autoLogOut(dispatch)
   }, [ ])

   return (
      <div className="user-side">
         <UserInfo/>
         <UserDashboardSection/>
      </div>)
}

const autoLogOut = (dispatch: Dispatch<SetStateAction<Action<IUser>>>) => {
   setTimeout(() => {
      dispatch(logoutUser())
   }, 1000 * 60 * 60)
}

export default UserSide