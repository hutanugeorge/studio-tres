import { actions, defaultValues } from '../utils/constants'
import { ILandingInfo } from '../shared/interfaces/presentationPage'


interface landingReducerAction {
  type: string,
  payload: ILandingInfo
}

const { FETCH_HERO_SECTION } = actions
const { LANDING_INFO } = defaultValues

const landingReducer = (state: ILandingInfo = LANDING_INFO, { type, payload }: landingReducerAction) => {
  switch (type) {
    case FETCH_HERO_SECTION:
      return { ...state, landingPhrase: payload.landingPhrase, landingButtonPhrase: payload.landingButtonPhrase}
    default:
      return { ...state }
  }
}

export default landingReducer