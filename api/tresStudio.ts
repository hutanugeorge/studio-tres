import axios, { AxiosResponse } from 'axios'

import { defaultValues, tresStudioAPIRoutes } from '../utils/constants'
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'


type getAxiosResponse = (route: string) => Promise<AxiosResponse>
type getLandingInfo = () => Promise<ILandingInfo>
type getFeatures = () => Promise<IFeature[]>
type getReviews = () => Promise<IReview[]>

export const getLandingInfo: getLandingInfo = async (): Promise<ILandingInfo> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.landing)
   return status === 200 ? data.landingInfo : defaultValues.LANDING_INFO
}

export const getFeatures: getFeatures = async (): Promise<IFeature[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.features)
   return status === 200 ? data.features : [ defaultValues.FEATURE ]
}

export const getReviews: getReviews = async (): Promise<IReview[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.reviews)
   return status === 200 ? data.reviews : [ defaultValues.REVIEW ]
}

const getAxiosResponse: getAxiosResponse = async (route: string): Promise<AxiosResponse> => {
   return await axios.get(route)
}