import { combineReducers } from 'redux'
import employeesReducer from "./employeesReducer"

import landingReducer from './landingReducer'
import featuresReducer from './featureReducer'
import reviewsReducer from './reviewsReducer'
import userReducer from "./userReducer"
import userViewReducer from "./userViewReducer"
import promotionsReducer from "./promotionsReducer";
import rewardsReducer from "./rewardsReducer";
import toggleMenuReducer from "./toggleMenuReducer";
import appointmentsReducer from "./appointmentReducer";
import authenticationReducer from "./authenticationReducer";


export const rootReducer = combineReducers({
  landingInfo: landingReducer,
  features: featuresReducer,
  reviews: reviewsReducer,
  promotions: promotionsReducer,
  rewards: rewardsReducer,
  appointments: appointmentsReducer,
  userView: userViewReducer,
  isMenuOpen: toggleMenuReducer,
  isUserAuthenticated: authenticationReducer,
  userInfo: userReducer,
  employees: employeesReducer
})



export type RootState = ReturnType<typeof rootReducer>