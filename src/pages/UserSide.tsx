import React, { Dispatch, FC, SetStateAction, useEffect } from "react"

import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { History } from "history"

import UserDashboardSection from '../components/UserDarshboard/UserDashboardSection'
import { renderAdminIcon, renderCustomerIcon, renderEmployeeIcon, RenderIcon } from "../components/UserInfo/renderIcons"
import UserInfoBar from '../components/UserInfo/UserInfoBar'
import { logoutUser } from "../actions"
import useFetch from "../customHooks/useFetch"
import { IUser, IUserInfo } from "../../shared/interfaces/user"
import { Action, IUseFetchResponse } from "../../shared/interfaces/api"
import {
   adminUpperTabs,
   customerUpperTabs,
   employeeUpperTabs,
   IUpperTab,
   logOutTime,
   tresStudioAPIRoutes
} from "../../utils/constants"


type AutoLogOut = (dispatch: Dispatch<SetStateAction<Action<IUser>>>, history: History<unknown> | string[] | undefined) => void
type RenderUserDashboard = (role: string) => JSX.Element

const UserSide: FC = (): JSX.Element => {
   const history = useHistory()
   const dispatch = useDispatch()

   const token = localStorage.getItem('token')
   const userInfo: IUseFetchResponse<{ userInfo: IUserInfo }> = useFetch<{ userInfo: IUserInfo }>(tresStudioAPIRoutes.user, true)
   const { data, error, loading } = userInfo

   useEffect((): void => {
      !token ? history.push('/') : autoLogOut(dispatch, history)
   }, [])
   if (data)
      return (
         <div className="user-side">
            {renderUserDashboard(data.userInfo.role)}
         </div>)
   else if (error)
      return <div>Error</div>
   else if (loading)
      return <div>Just loading...</div>
   else
      return <div>Something else</div>
}

const renderUserDashboard: RenderUserDashboard = (role: string): JSX.Element => {
   let tabs: IUpperTab[]
   let renderIcon: RenderIcon
   if (role === 'customer') {
      tabs = customerUpperTabs
      renderIcon = renderCustomerIcon
   } else if (role === 'employee') {
      tabs = employeeUpperTabs
      renderIcon = renderEmployeeIcon
   } else if (role === 'admin') {
      tabs = adminUpperTabs
      renderIcon = renderAdminIcon
   } else {
      tabs = []
      renderIcon = renderCustomerIcon
   }

   return <>
      <UserInfoBar customerUpperTabs={tabs} renderIcon={renderIcon}/>
      <UserDashboardSection role={role}/>
   </>
}

export const autoLogOut: AutoLogOut = (dispatch: Dispatch<SetStateAction<Action<IUser>>>, history: History<unknown> | string[] | undefined): void => {
   setTimeout((): void => {
      history?.push('/')
      dispatch(logoutUser())
   }, logOutTime)
}

export default UserSide