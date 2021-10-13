import { Actions, defaultValues } from '../../utils/constants'
import { Reducer } from "../../shared/types";


interface IUserViewReducerAction {
   type: string
   payload: string
}

const { DISCOUNTS, REWARDS, VISITS } = Actions
const { USER_VIEW } = defaultValues

const userViewReducer: Reducer<string, IUserViewReducerAction> = (state: string = USER_VIEW, action: IUserViewReducerAction): string => {
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