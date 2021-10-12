import { Actions, defaultValues } from '../../utils/constants'
import { IPromotion } from '../../shared/interfaces/presentationPage'


interface IPromotions {
   promotions: IPromotion[]
}

interface IPromotionsReducerAction {
   type: string
   payload: IPromotions
}
type PromotionReducer = (state: IPromotion[], action: IPromotionsReducerAction) => IPromotion[]

const { FETCH_PROMOTIONS } = Actions
const { PROMOTION } = defaultValues

const promotionReducer: PromotionReducer = (state: IPromotion[] = [ PROMOTION ], action: IPromotionsReducerAction) => {
   const { type, payload } = action
   switch (type) {
      case FETCH_PROMOTIONS:
         const { promotions } = payload
         return promotions
      default:
         return state
   }
}

export default promotionReducer