import { actions, defaultValues } from '../utils/constants'
import { IPromotion } from '../shared/interfaces/presentationPage'


interface IPromotionsReducerAction {
   type: string
   payload: { promotions: IPromotion[] }
}

const { FETCH_PROMOTIONS } = actions
const { PROMOTION } = defaultValues

const promotionReducer = (state: IPromotion[] = [ PROMOTION ], { type, payload }: IPromotionsReducerAction) => {
   switch (type) {
      case FETCH_PROMOTIONS:
         const { promotions } = payload
         return { promotions }
      default:
         return state
   }
}

export default promotionReducer