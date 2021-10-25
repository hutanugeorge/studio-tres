import React, { Dispatch, FC, SetStateAction, useEffect } from "react"

import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import { Action } from "../../shared/interfaces/api"
import { IUser } from "../../shared/interfaces/user"
import UserInfo from '../components/UserInfo/UserInfo'
import UserDashboardSection from '../components/UserDarshboard/UserDashboardSection'
import { logoutUser } from "../actions"


type AutoLogOut = (dispatch: Dispatch<SetStateAction<Action<IUser>>>) => void

const UserSide: FC = (): JSX.Element => {
   const history = useHistory()
   const dispatch = useDispatch()

   const token = localStorage.getItem('token')

   useEffect((): void => {
      !token ? history.push('/') : autoLogOut(dispatch)
   }, [])

   return (
      <div className="user-side">
         <UserInfo/>
         <UserDashboardSection/>
      </div>)
}

const autoLogOut: AutoLogOut = (dispatch: Dispatch<SetStateAction<Action<IUser>>>): void => {
   setTimeout((): void => {
      dispatch(logoutUser())
   }, 1000 * 60 * 60)
}

export default UserSide