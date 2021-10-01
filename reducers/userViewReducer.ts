import { actions, defaultValues } from '../utils/constants'


interface IUserViewReducerAction {
   type: string
   payload: string
}

const { DISCOUNTS, REWARDS, VISITS } = actions
const { USER_VIEW } = defaultValues

const userViewReducer = (state: string = USER_VIEW, { type, payload }: IUserViewReducerAction): string => {
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