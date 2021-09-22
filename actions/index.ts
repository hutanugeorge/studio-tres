import { Dispatch } from 'redux'

import { getFeatureCards, getLandingInfo } from '../api/tresStudio'
import { actions } from '../utils/constants'
import { LandingInfo } from '../shared/interfaces/landingInfo'
import { FeatureCard } from '../shared/interfaces/featureSection'


const { FETCH_HERO_SECTION, FETCH_FEATURE_CARDS } = actions

type fetchActionType = () => (dispatch: Dispatch) => void

export const fetchLanding: fetchActionType = () => async (dispatch: Dispatch) => {
  const { landingPhrase, landingButtonPhrase }: LandingInfo = await getLandingInfo()
  dispatch({
    type: FETCH_HERO_SECTION,
    payload: { landingPhrase, landingButtonPhrase }
  })
}

export const fetchFeatureCards: fetchActionType = () => async (dispatch: Dispatch) => {
  const featureCards: FeatureCard[] = await getFeatureCards()
  dispatch({
    type: FETCH_FEATURE_CARDS,
    payload: { featureCards }
  })
}
