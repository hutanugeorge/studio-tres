import { Actions, defaultValues } from '../../utils/constants'
import { IFeature } from '../../shared/interfaces/presentationPage'
import { Reducer } from '../../shared/types'



interface IFetchFeatureAction {
   type: Actions.FETCH_FEATURES
   payload: IFeature[]
}
type Action = IFetchFeatureAction

const { FETCH_FEATURES } = Actions
const { FEATURE } = defaultValues

const featuresReducer: Reducer<IFeature[], Action> = (state: IFeature[] = [ FEATURE ], action: Action): IFeature[] => {
   const { type, payload } = action
   switch (type) {
      case FETCH_FEATURES:
         return payload
      default:
         return state
   }
}

export default featuresReducer