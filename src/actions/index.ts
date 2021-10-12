import { Dispatch } from 'redux'

import {
   getAppointments,
   getFeatures,
   getLandingInfo,
   getPromotions,
   getReviews,
   getRewards
} from '../../api/tresStudio'
import { Actions } from '../../utils/constants'
import { IFeature, ILandingInfo, IReview } from '../../shared/interfaces/presentationPage'
import { SetUserView } from "../../shared/types";
import { IToggleSettingsMenu, IUserViewAction } from "../../shared/interfaces/userView";
import { IAppointment, IReward, IPromotion } from "../../shared/interfaces/userDashboard";


type FetchActionType = () => (dispatch: Dispatch) => void
type ToggleSettingsMenu = (isOpen: boolean) => IToggleSettingsMenu


export const fetchLanding: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const { landingPhrase, landingButtonPhrase }: ILandingInfo = await getLandingInfo()
   dispatch({
      type: Actions.FETCH_HERO_SECTION,
      payload: { landingPhrase, landingButtonPhrase }
   })
}

export const fetchFeatures: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const features: IFeature[] = await getFeatures()
   dispatch({
      type: Actions.FETCH_FEATURES,
      payload: { features }
   })
}

export const fetchReviews: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const reviews: IReview[] = await getReviews()
   dispatch({
      type: Actions.FETCH_REVIEWS,
      payload: { reviews }
   })
}

export const fetchPromotions: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const promotions: IPromotion[] = await getPromotions()
   dispatch({
      type: Actions.FETCH_PROMOTIONS,
      payload: { promotions }
   })
}

export const fetchRewards: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const rewards: IReward[] = await getRewards()
   dispatch({
      type: Actions.FETCH_REWARDS,
      payload: { rewards }
   })
}

export const fetchAppointments: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const appointments: IAppointment[] = await getAppointments()
   dispatch({
         type: Actions.APPOINTMENTS,
         payload: { appointments }
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
