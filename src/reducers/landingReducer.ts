import { Action } from "../../shared/interfaces/api"
import { Actions, defaultValues } from '../../utils/constants'
import { ILandingInfo } from '../../shared/interfaces/presentationPage'
import { Reducer } from '../../shared/types'


const { FETCH_HERO_SECTION } = Actions
const { LANDING_INFO } = defaultValues

const landingReducer: Reducer<ILandingInfo, Action<ILandingInfo>> = (state: ILandingInfo = LANDING_INFO, action: Action<ILandingInfo>): ILandingInfo => {
  const {type, payload} = action
  switch (type) {
    case FETCH_HERO_SECTION:
      return { ...state, landingPhrase: payload.landingPhrase, landingButtonPhrase: payload.landingButtonPhrase}
    default:
      return { ...state }
  }
}

export default landingReducer