import { Actions, defaultValues } from '../../utils/constants'
import { IReview } from '../../shared/interfaces/presentationPage'
import { Reducer } from "../../shared/types";


interface IReviewsReducerAction {
  type: string
  payload: IReview[]
}

const { FETCH_REVIEWS } = Actions
const { REVIEW } = defaultValues

const reviewsReducer: Reducer<IReview[], IReviewsReducerAction> = (state: IReview[] = [ REVIEW ], action: IReviewsReducerAction): IReview[] => {
  const { type, payload } = action
  switch (type) {
    case FETCH_REVIEWS:
      return  payload
    default:
      return state
  }
}

export default reviewsReducer