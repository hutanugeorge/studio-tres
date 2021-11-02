import { Dispatch } from 'redux'

import { postLogin } from "../../api/tresStudio/authentication"
import { IUser } from "../../shared/interfaces/user"
import { ILoginUserArgs } from "../../shared/interfaces/userDashboard"
import { IToggleSettingsMenu, IUserViewAction } from "../../shared/interfaces/userView"
import { Action } from "../../shared/interfaces/api"
import { Actions, defaultValues } from '../../utils/constants'


type ToggleSettingsMenu = (isOpen: boolean) => IToggleSettingsMenu
type SetUserView = (view: string) => IUserViewAction
type LogoutUser = () => Action<IUser>
type LoginUser<T> = (args: ILoginUserArgs) => (dispatch: Dispatch<Action<T>>) => Promise<void>


export const setUserView: SetUserView = (view: string): IUserViewAction => {
   return {
      type: view,
      payload: view
   }
}

export const toggleSettingsMenu: ToggleSettingsMenu = (isOpen: boolean): IToggleSettingsMenu => {
   return {
      type: Actions.TOGGLE_MENU,
      payload: isOpen
   }
}

export const loginUser: LoginUser<IUser> = (args: ILoginUserArgs): (dispatch: Dispatch<Action<IUser>>) => Promise<void> =>
   async (dispatch: Dispatch<Action<IUser>>): Promise<void> => {
      try {
         const user = await postLogin(args)
         user.status === 200 && dispatch({
            type: Actions.LOGIN,
            payload: user.data
         })
         user.status === 401 && dispatch({
            type: Actions.LOGIN_ERROR,
            payload: user.data
         })
         user.status === 403 && dispatch({
            type: Actions.LOGIN_ERROR,
            payload: user.data
         })
      } catch (err: any) {
         console.log(err)
      }
   }

export const logoutUser: LogoutUser = (): Action<IUser> => {
   return {
      type: Actions.LOGOUT,
      payload: defaultValues.USER
   }
}
