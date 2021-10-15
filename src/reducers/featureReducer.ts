import { Action } from "../../shared/interfaces/api"
import { Actions, defaultValues } from '../../utils/constants'
import { IFeature } from '../../shared/interfaces/presentationPage'
import { Reducer } from '../../shared/types'




const { FETCH_FEATURES } = Actions
const { FEATURE } = defaultValues

const featuresReducer: Reducer<IFeature[], Action<IFeature[]>> = (state: IFeature[] = [ FEATURE ], action: Action<IFeature[]>): IFeature[] => {
   const { type, payload } = action
   switch (type) {
      case FETCH_FEATURES:
         return payload
      default:
         return state
   }
}

export default featuresReducer