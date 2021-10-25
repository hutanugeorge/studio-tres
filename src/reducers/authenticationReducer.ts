import { Action } from "../../shared/interfaces/api"
import { IUser } from "../../shared/interfaces/user"
import { Reducer } from "../../shared/types"
import { Actions, defaultValues } from "../../utils/constants";


const authenticationReducer: Reducer<IUser, Action<IUser>> = (state: IUser = defaultValues.USER, action: Action<IUser>): IUser => {
   const { type, payload } = action
   switch (type) {
      case Actions.LOGIN:
         payload.token && localStorage.setItem('token', payload.token)
         payload.userId && localStorage.setItem('userId', payload.userId)
         return { ...payload }
      case Actions.LOGOUT:
         localStorage.removeItem('token')
         localStorage.removeItem('userId')
         return { ...payload }
      case Actions.LOGIN_ERROR:
         return { ...payload }
      default:
         return state
   }
}

export default authenticationReducer