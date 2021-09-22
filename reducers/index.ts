import { combineReducers } from 'redux'

import landingReducer from './landingReducer'
import featureCardsReducer from './featureSectionReducer'


export const rootReducer = combineReducers({
  landingInfo: landingReducer,
  featureCards: featureCardsReducer
})

export type RootState = ReturnType<typeof rootReducer>