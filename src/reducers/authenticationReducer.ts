import { Action } from "../../shared/interfaces/api"
import { IUserData } from "../../shared/interfaces/user"
import { Reducer } from "../../shared/types"
import { Actions, defaultValues } from "../../utils/constants";



const authenticationReducer: Reducer<IUserData, Action<IUserData>> = (state: IUserData = defaultValues.USER, action: Action<IUserData>): IUserData => {
   const { type, payload } = action
   switch (type) {
      case Actions.LOGIN:
         localStorage.setItem('token', payload.token)
         return { ...payload }
      case Actions.LOGOUT:
         localStorage.removeItem('token')
         return { ...payload }
      case Actions.LOGIN_ERROR:
         return { ...payload }
      default:
         return { ...state }
   }
}

export default authenticationReducer