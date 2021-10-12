import { Actions, defaultValues } from '../../utils/constants'
import { ILandingInfo } from '../../shared/interfaces/presentationPage'


interface ILandingReducerAction {
  type: string,
  payload: ILandingInfo
}
type LandingReducer = (state: ILandingInfo, action: ILandingReducerAction) => ILandingInfo

const { FETCH_HERO_SECTION } = Actions
const { LANDING_INFO } = defaultValues

const landingReducer: LandingReducer = (state: ILandingInfo = LANDING_INFO, { type, payload }: ILandingReducerAction) => {
  switch (type) {
    case FETCH_HERO_SECTION:
      return { ...state, landingPhrase: payload.landingPhrase, landingButtonPhrase: payload.landingButtonPhrase}
    default:
      return { ...state }
  }
}

export default landingReducer