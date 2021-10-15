import { Action } from "../../shared/interfaces/api"
import { Actions, defaultValues } from '../../utils/constants'
import { Reducer } from "../../shared/types";


const { DISCOUNTS, REWARDS, VISITS } = Actions
const { USER_VIEW } = defaultValues

const userViewReducer: Reducer<string, Action<string>> = (state: string = USER_VIEW, action: Action<string>): string => {
   const {type, payload} = action
   switch (type) {
      case DISCOUNTS:
         return payload
      case REWARDS:
         return payload
      case VISITS:
         return payload
      default:
         return state
   }
}

export default userViewReducer