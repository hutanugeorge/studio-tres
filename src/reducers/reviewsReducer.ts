import { Actions, defaultValues } from '../../utils/constants'
import { IReview } from '../../shared/interfaces/presentationPage'


interface IReviewsReducerAction {
  type: string
  payload: { reviews: IReview[] }
}

const { FETCH_REVIEWS } = Actions
const { REVIEW } = defaultValues

const reviewsReducer = (state: IReview[] = [ REVIEW ], action: IReviewsReducerAction) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_REVIEWS:
      const { reviews } = payload
      return reviews.length === 0 ? { ...state } : { reviews }
    default:
      return { ...state }
  }
}

export default reviewsReducer