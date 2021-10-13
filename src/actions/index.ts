import { Dispatch } from 'redux'

import { getFeatures, getLandingInfo, getReviews } from "../../api/tresStudio/presentationPage";
import { getAppointments, getPromotions, getRewards } from "../../api/tresStudio/userDashboard";
import { IFeature, ILandingInfo, IReview } from '../../shared/interfaces/presentationPage'
import { IAppointment, IReward, IPromotion } from "../../shared/interfaces/userDashboard";
import { IToggleSettingsMenu, IUserViewAction } from "../../shared/interfaces/userView";
import { Actions } from '../../utils/constants'
import { Action } from "../../shared/interfaces/api";


type FetchActionType<T> = () => (dispatch: Dispatch<Action<T>>) => void
type ToggleSettingsMenu = (isOpen: boolean) => IToggleSettingsMenu
type SetUserView = () => IUserViewAction

export const fetchLanding: FetchActionType<{ landingPhrase: string, landingButtonPhrase: string }> = () => async (dispatch: Dispatch<Action<{ landingPhrase: string, landingButtonPhrase: string }>>): Promise<void> => {
   const { landingPhrase, landingButtonPhrase }: ILandingInfo = await getLandingInfo()
   dispatch({
      type: Actions.FETCH_HERO_SECTION,
      payload: { landingPhrase, landingButtonPhrase }
   })
}

export const fetchFeatures: FetchActionType<IFeature[]> = () => async (dispatch: Dispatch<Action<IFeature[]>>): Promise<void> => {
   const features: IFeature[] = await getFeatures()
   dispatch({
      type: Actions.FETCH_FEATURES,
      payload: features
   })
}

export const fetchReviews: FetchActionType<IReview[]> = () => async (dispatch: Dispatch<Action<IReview[]>>): Promise<void> => {
   const reviews: IReview[] = await getReviews()
   dispatch({
      type: Actions.FETCH_REVIEWS,
      payload: reviews
   })
}

export const fetchPromotions: FetchActionType<IPromotion[]> = () => async (dispatch: Dispatch<Action<IPromotion[]>>): Promise<void> => {
   const promotions: IPromotion[] = await getPromotions()
   dispatch({
      type: Actions.FETCH_PROMOTIONS,
      payload: promotions
   })
}

export const fetchRewards: FetchActionType<IReward[]> = () => async (dispatch: Dispatch<Action<IReward[]>>): Promise<void> => {
   const rewards: IReward[] = await getRewards()
   dispatch({
      type: Actions.FETCH_REWARDS,
      payload: rewards
   })
}

export const fetchAppointments: FetchActionType<IAppointment[]> = () => async (dispatch: Dispatch<Action<IAppointment[]>>): Promise<void> => {
   const appointments: IAppointment[] = await getAppointments()
   dispatch({
      type: Actions.APPOINTMENTS,
      payload: appointments
   })
}

export const setUserViewDiscounts: SetUserView = (): IUserViewAction => {
   return {
      type: Actions.DISCOUNTS,
      payload: Actions.DISCOUNTS
   }
}

export const setUserViewRewards: SetUserView = (): IUserViewAction => {
   return {
      type: Actions.REWARDS,
      payload: Actions.REWARDS
   }
}

export const setUserViewVisits: SetUserView = (): IUserViewAction => {
   return {
      type: Actions.VISITS,
      payload: Actions.VISITS
   }
}

export const toggleSettingsMenu: ToggleSettingsMenu = (isOpen: boolean): IToggleSettingsMenu => {
   return {
      type: Actions.TOGGLE_MENU,
      payload: isOpen
   }
}
