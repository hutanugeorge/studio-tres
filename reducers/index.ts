import { combineReducers } from 'redux'

import landingReducer from './landingReducer'
import featuresReducer from './featureReducer'
import reviewsReducer from './reviewsReducer'
import userViewReducer from "./userViewReducer"
import promotionReducer from "./fetchPromotions";


export const rootReducer = combineReducers({
  landingInfo: landingReducer,
  features: featuresReducer,
  reviews: reviewsReducer,
  promotions: promotionReducer,
  userView: userViewReducer
})

export type RootState = ReturnType<typeof rootReducer>