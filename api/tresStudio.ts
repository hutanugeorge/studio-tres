import axios, { AxiosResponse } from 'axios'

import { defaultValues, tresStudioAPIRoutes } from '../utils/constants'
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'


type getAxiosResponse = (route: string) => Promise<AxiosResponse>
type getLandingInfo = () => Promise<ILandingInfo>
type getFeatures = () => Promise<IFeature[]>
type getReviews = () => Promise<IReview[]>

const { landing, features, reviews } = tresStudioAPIRoutes
const { DEFAULT_LANDING_INFO, DEFAULT_FEATURE, DEFAULT_REVIEW } = defaultValues

export const getLandingInfo: getLandingInfo = async (): Promise<ILandingInfo> => {
  const { status, data }: AxiosResponse = await getAxiosResponse(landing)
  return status === 200 ? data.landingInfo : DEFAULT_LANDING_INFO
}

export const getFeatures: getFeatures = async (): Promise<IFeature[]> => {
  const { status, data }: AxiosResponse = await getAxiosResponse(features)
  return status === 200 ? data.features : [ DEFAULT_FEATURE ]
}

export const getReviews: getReviews = async (): Promise<IReview[]> => {
  const { status, data }: AxiosResponse = await getAxiosResponse(reviews)
  return status === 200 ? data.reviews : [ DEFAULT_REVIEW ]
}

const getAxiosResponse: getAxiosResponse = async (route: string): Promise<AxiosResponse> => {
  return await axios.get(route)
}