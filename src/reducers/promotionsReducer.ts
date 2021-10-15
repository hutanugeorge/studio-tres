import { Action } from "../../shared/interfaces/api"
import { Actions, defaultValues } from '../../utils/constants'
import { IPromotion } from '../../shared/interfaces/userDashboard'
import { Reducer } from '../../shared/types'



const { FETCH_PROMOTIONS } = Actions
const { PROMOTION } = defaultValues

const promotionReducer: Reducer<IPromotion[], Action<IPromotion[]>> = (state: IPromotion[] = [ PROMOTION ], action: Action<IPromotion[]>): IPromotion[] => {
   const { type, payload } = action
   switch (type) {
      case FETCH_PROMOTIONS:
         return payload
      default:
         return state
   }
}

export default promotionReducer