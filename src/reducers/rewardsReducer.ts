import { Action } from "../../shared/interfaces/api"
import { IReward } from "../../shared/interfaces/userDashboard";
import { Actions, defaultValues } from "../../utils/constants";
import { Reducer } from "../../shared/types";


const { FETCH_REWARDS } = Actions
const { REWARD } = defaultValues

const rewardsReducer: Reducer<IReward[], Action<IReward[]>> = (state: IReward[] = [ REWARD ], action: Action<IReward[]>): IReward[] => {
   const { type, payload } = action
   switch (type) {
      case FETCH_REWARDS:
         return payload
      default:
         return state
   }
}

export default rewardsReducer