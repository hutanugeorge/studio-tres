import { Actions, defaultValues } from '../../utils/constants'
import { ILandingInfo } from '../../shared/interfaces/presentationPage'
import { Reducer } from '../../shared/types'


interface ILandingReducerAction {
  type: string,
  payload: ILandingInfo
}

const { FETCH_HERO_SECTION } = Actions
const { LANDING_INFO } = defaultValues

const landingReducer: Reducer<ILandingInfo, ILandingReducerAction> = (state: ILandingInfo = LANDING_INFO, action: ILandingReducerAction): ILandingInfo => {
  const {type, payload} = action
  switch (type) {
    case FETCH_HERO_SECTION:
      return { ...state, landingPhrase: payload.landingPhrase, landingButtonPhrase: payload.landingButtonPhrase}
    default:
      return { ...state }
  }
}

export default landingReducer