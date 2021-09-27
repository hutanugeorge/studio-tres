import { combineReducers } from 'redux'

import landingReducer from './landingReducer'
import featuresReducer from './featureReducer'
import reviewsReducer from './reviewsReducer'


export const rootReducer = combineReducers({
  landingInfo: landingReducer,
  features: featuresReducer,
  reviews: reviewsReducer
})

export type RootState = ReturnType<typeof rootReducer>