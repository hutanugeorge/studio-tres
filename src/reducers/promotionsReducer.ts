import { Actions, defaultValues } from '../../utils/constants'
import { IPromotion } from '../../shared/interfaces/userDashboard'
import { Reducer } from '../../shared/types'
import { ILandingInfo } from "../../shared/interfaces/presentationPage";


interface IPromotionsReducerAction {
   type: string
   payload: IPromotion[]
}

const { FETCH_PROMOTIONS } = Actions
const { PROMOTION } = defaultValues

const promotionReducer: Reducer<IPromotion[], IPromotionsReducerAction> = (state: IPromotion[] = [ PROMOTION ], action: IPromotionsReducerAction): IPromotion[] => {
   const { type, payload } = action
   switch (type) {
      case FETCH_PROMOTIONS:
         return payload
      default:
         return state
   }
}

export default promotionReducer