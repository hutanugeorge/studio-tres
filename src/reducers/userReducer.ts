import { Action } from "../../shared/interfaces/api"
import { IUserInfo } from "../../shared/interfaces/user"
import { Reducer } from "../../shared/types"
import { Actions, defaultValues } from "../../utils/constants"


const userReducer: Reducer<IUserInfo, Action<IUserInfo>> = (state: IUserInfo = defaultValues.USER_DATA, action: Action<IUserInfo>): IUserInfo => {
   const { type, payload } = action
   switch(type) {
      case Actions.USER_INFO:
         return {...state, ...payload}
      default:
         return state
   }
}

export default userReducer