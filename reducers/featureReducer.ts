import { actions, defaultValues } from '../utils/constants'
import { IFeature } from '../shared/interfaces/presentationPage'


interface featuresReducerAction {
  type: string
  payload: { features: IFeature[] }
}

const { FETCH_FEATURES } = actions
const { DEFAULT_FEATURE } = defaultValues

const featuresReducer = (state: IFeature[] = [ DEFAULT_FEATURE ], {
  type,
  payload
}: featuresReducerAction) => {
  switch (type) {
    case FETCH_FEATURES:
      const { features } = payload
      return features.length === 0 ? { ...state } : { features }
    default:
      return { ...state }
  }
}

export default featuresReducer