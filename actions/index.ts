import { Dispatch } from 'redux'

import { getFeatures, getLandingInfo, getReviews } from '../api/tresStudio'
import { actions } from '../utils/constants'
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import { SetUserView } from "../shared/types";



type FetchActionType = () => (dispatch: Dispatch) => void


export const fetchLanding: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const { landingPhrase, landingButtonPhrase }: ILandingInfo = await getLandingInfo()
   dispatch({
      type: actions.FETCH_HERO_SECTION,
      payload: { landingPhrase, landingButtonPhrase }
   })
}

export const fetchFeatures: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const features: IFeature[] = await getFeatures()
   dispatch({
      type: actions.FETCH_FEATURES,
      payload: { features }
   })
}

export const fetchReviews: FetchActionType = () => async (dispatch: Dispatch): Promise<void> => {
   const reviews: IReview[] = await getReviews()
   dispatch({
      type: actions.FETCH_REVIEWS,
      payload: { reviews }
   })
}

export const setUserViewDiscounts: SetUserView = () => {
   return {
      type: actions.DISCOUNTS,
      payload: actions.DISCOUNTS
   }
}

export const setUserViewRewards: SetUserView = () => {
   return {
      type: actions.REWARDS,
      payload: actions.REWARDS
   }
}

export const setUserViewVisits: SetUserView = () => {
   return {
      type: actions.VISITS,
      payload: actions.VISITS
   }
}
