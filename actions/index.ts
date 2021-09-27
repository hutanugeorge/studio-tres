import { Dispatch } from 'redux'

import { getFeatures, getLandingInfo, getReviews } from '../api/tresStudio'
import { actions } from '../utils/constants'
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'


const { FETCH_HERO_SECTION, FETCH_FEATURES, FETCH_REVIEWS } = actions

type fetchActionType = () => (dispatch: Dispatch) => void

export const fetchLanding: fetchActionType = () => async (dispatch: Dispatch) => {
  const { landingPhrase, landingButtonPhrase }: ILandingInfo = await getLandingInfo()
  dispatch({
    type: FETCH_HERO_SECTION,
    payload: { landingPhrase, landingButtonPhrase }
  })
}

export const fetchFeatures: fetchActionType = () => async (dispatch: Dispatch) => {
  const features: IFeature[] = await getFeatures()
  dispatch({
    type: FETCH_FEATURES,
    payload: { features }
  })
}

export const fetchReviews: fetchActionType = () => async (dispatch: Dispatch) => {
  const reviews: IReview[] = await getReviews()
  dispatch({
    type: FETCH_REVIEWS,
    payload: { reviews }
  })
}