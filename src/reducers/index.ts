import { combineReducers } from 'redux'

import userViewReducer from "./userViewReducer"
import toggleMenuReducer from "./toggleMenuReducer";
import authenticationReducer from "./authenticationReducer";


export const rootReducer = combineReducers({
   userView: userViewReducer,
   isMenuOpen: toggleMenuReducer,
   isUserAuthenticated: authenticationReducer,
})


export type RootState = ReturnType<typeof rootReducer>