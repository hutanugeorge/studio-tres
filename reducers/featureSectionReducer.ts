import { actions } from '../utils/constants'
import { FeatureCard } from '../shared/interfaces/featureSection'


interface featureCardsReducerAction {
  type: string
  payload: { featureCards: FeatureCard[] }
}

const { FETCH_FEATURE_CARDS } = actions

const INITIAL_STATE: FeatureCard[] = [
  {
    image: '/loading',
    title: 'Log...',
    description: 'Loading...'
  }
]

const featureCardsReducer = (state: FeatureCard[] = INITIAL_STATE, {
  type,
  payload
}: featureCardsReducerAction) => {
  switch (type) {
    case FETCH_FEATURE_CARDS:
      return payload.featureCards.length === 0 ? {...state} : { featureCards: payload.featureCards }
    default:
      return { ...state }
  }
}

export default featureCardsReducer