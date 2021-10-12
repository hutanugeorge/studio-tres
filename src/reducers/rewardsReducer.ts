import { IReward } from "../../shared/interfaces/userDashboard";
import { Actions, defaultValues } from "../../utils/constants";


interface IRewardReducerAction {
   type: string
   payload: { rewards: IReward[] }
}

const { FETCH_REWARDS } = Actions
const { REWARD } = defaultValues

const rewardsReducer = (state: IReward[] = [ REWARD ], action: IRewardReducerAction): IReward[] => {
   const { type, payload } = action
   switch (type) {
      case FETCH_REWARDS:
         const { rewards } = payload
         return rewards
      default:
         return state
   }
}

export default rewardsReducer