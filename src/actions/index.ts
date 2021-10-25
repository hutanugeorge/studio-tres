import { Dispatch } from 'redux'

import { getFeatures, getLandingInfo, getReviews, getEmployees } from "../../api/tresStudio/presentationPage";
import { getAppointments, getPromotions, getRewards } from "../../api/tresStudio/userDashboard";
import { postLogin } from "../../api/tresStudio/authentication";
import { getUserInfo } from "../../api/tresStudio/userSide"
import { IFeature, ILandingInfo, IReview } from '../../shared/interfaces/presentationPage'
import { IUser, IUserInfo } from "../../shared/interfaces/user"
import { IAppointment, IReward, IPromotion, IEmployee, ILoginUserArgs } from "../../shared/interfaces/userDashboard";
import { IToggleSettingsMenu, IUserViewAction } from "../../shared/interfaces/userView";
import { Action } from "../../shared/interfaces/api";
import { Actions, defaultValues } from '../../utils/constants'


type FetchActionType<T> = () => (dispatch: Dispatch<Action<T>>) => Promise<void>
type ToggleSettingsMenu = (isOpen: boolean) => IToggleSettingsMenu
type SetUserView = (view: string) => IUserViewAction
type LogoutUser = () => Action<IUser>
type LoginUser<T> = (args: ILoginUserArgs) => (dispatch: Dispatch<Action<T>>) => Promise<void>

export const fetchLanding: FetchActionType<{ landingPhrase: string, landingButtonPhrase: string }> = (): (dispatch: Dispatch<Action<ILandingInfo>>) => Promise<void> =>
   async (dispatch: Dispatch<Action<ILandingInfo>>): Promise<void> => {
      dispatch({
         type: Actions.FETCH_HERO_SECTION,
         payload: await getLandingInfo()
      })
   }

export const fetchFeatures: FetchActionType<IFeature[]> = (): (dispatch: Dispatch<Action<IFeature[]>>) => Promise<void> =>
   async (dispatch: Dispatch<Action<IFeature[]>>): Promise<void> => {
      dispatch({
         type: Actions.FETCH_FEATURES,
         payload: await getFeatures()
      })
   }

export const fetchReviews: FetchActionType<IReview[]> = (): (dispatch: Dispatch<Action<IReview[]>>) => Promise<void> =>
   async (dispatch: Dispatch<Action<IReview[]>>): Promise<void> => {
      dispatch({
         type: Actions.FETCH_REVIEWS,
         payload: await getReviews()
      })
   }

export const fetchPromotions: FetchActionType<IPromotion[]> = (): (dispatch: Dispatch<Action<IPromotion[]>>) => Promise<void> =>
   async (dispatch: Dispatch<Action<IPromotion[]>>): Promise<void> => {
      dispatch({
         type: Actions.FETCH_PROMOTIONS,
         payload: await getPromotions()
      })
   }

export const fetchRewards: FetchActionType<IReward[]> = (): (dispatch: Dispatch<Action<IReward[]>>) => Promise<void> =>
   async (dispatch: Dispatch<Action<IReward[]>>): Promise<void> => {
      dispatch({
         type: Actions.FETCH_REWARDS,
         payload: await getRewards()
      })
   }

export const fetchAppointments: FetchActionType<IAppointment[]> = (): (dispatch: Dispatch<Action<IAppointment[]>>) => Promise<void> =>
   async (dispatch: Dispatch<Action<IAppointment[]>>): Promise<void> => {
      dispatch({
         type: Actions.APPOINTMENTS,
         payload: await getAppointments()
      })
   }

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
         user.status === 401  && dispatch({
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

export const fetchUserInfo: FetchActionType<IUserInfo> = (): (dispatch: Dispatch<Action<IUserInfo>>) => Promise<void> =>
   async (dispatch: Dispatch<Action<IUserInfo>>): Promise<void> => {
      dispatch({
         type: Actions.USER_INFO,
         payload: await getUserInfo()
      })
   }


export const fetchEmployees: FetchActionType<IEmployee[]> = (): (dispatch: Dispatch<Action<IEmployee[]>>) => Promise<void> =>
   async(dispatch: Dispatch<Action<IEmployee[]>>): Promise<void> => {
    dispatch({
       type: Actions.FETCH_EMPLOYEES,
       payload: await getEmployees()
    })
   }

