import { combineReducers } from 'redux'

import landingReducer from './landingReducer'
import featuresReducer from './featureReducer'
import reviewsReducer from './reviewsReducer'
import userViewReducer from "./userViewReducer"
import promotionsReducer from "./promotionsReducer";
import rewardsReducer from "./rewardsReducer";
import toggleMenuReducer from "./toggleMenuReducer";
import appointmentsReducer from "./appointmentReducer";


export const rootReducer = combineReducers({
  landingInfo: landingReducer,
  features: featuresReducer,
  reviews: reviewsReducer,
  promotions: promotionsReducer,
  rewards: rewardsReducer,
  appointments: appointmentsReducer,
  userView: userViewReducer,
  isMenuOpen: toggleMenuReducer
})

export type RootState = ReturnType<typeof rootReducer>