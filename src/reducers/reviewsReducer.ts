import { Action } from "../../shared/interfaces/api"
import { Actions, defaultValues } from '../../utils/constants'
import { IReview } from '../../shared/interfaces/presentationPage'
import { Reducer } from "../../shared/types";


const { FETCH_REVIEWS } = Actions
const { REVIEW } = defaultValues

const reviewsReducer: Reducer<IReview[], Action<IReview[]>> = (state: IReview[] = [ REVIEW ], action: Action<IReview[]>): IReview[] => {
  const { type, payload } = action
  switch (type) {
    case FETCH_REVIEWS:
      return  payload
    default:
      return state
  }
}

export default reviewsReducer