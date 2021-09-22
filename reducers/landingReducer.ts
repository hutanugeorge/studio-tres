import { actions } from '../utils/constants'
import { LandingInfo } from '../shared/interfaces/landingInfo'


interface landingReducerAction {
  type: string,
  payload: LandingInfo
}

const { FETCH_HERO_SECTION } = actions

const INITIAL_STATE: LandingInfo = {
  landingPhrase: 'Default',
  landingButtonPhrase: 'Make an appointment'
}

const landingReducer = (state: LandingInfo = INITIAL_STATE, { type, payload }: landingReducerAction) => {
  switch (type) {
    case FETCH_HERO_SECTION:
      return { ...state, landingPhrase: payload.landingPhrase, landingButtonPhrase: payload.landingButtonPhrase}
    default:
      return { ...state }
  }
}

export default landingReducer