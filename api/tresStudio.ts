import axios, { AxiosResponse } from 'axios'

import { defaultValues, tresStudioAPIRoutes } from '../utils/constants'
import { IFeature, ILandingInfo, IPromotion, IReview } from '../shared/interfaces/presentationPage'


type GetAxiosResponse = (route: string) => Promise<AxiosResponse>
type GetLandingInfo = () => Promise<ILandingInfo>
type GetFeatures = () => Promise<IFeature[]>
type GetReviews = () => Promise<IReview[]>
type GetPromotions = () => Promise<IPromotion[]>

export const getLandingInfo: GetLandingInfo = async (): Promise<ILandingInfo> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.landing)
   return status === 200 ? data.landingInfo : defaultValues.LANDING_INFO
}

export const getFeatures: GetFeatures = async (): Promise<IFeature[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.features)
   return status === 200 ? data.features : [ defaultValues.FEATURE ]
}

export const getReviews: GetReviews = async (): Promise<IReview[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.reviews)
   return status === 200 ? data.reviews : [ defaultValues.REVIEW ]
}

export const getPromotions: GetPromotions = async (): Promise<IPromotion[]> => {
   const {status, data}: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.promotions)
   return status === 200 ? data.promotions : [defaultValues.PROMOTION]
}

const getAxiosResponse: GetAxiosResponse = async (route: string): Promise<AxiosResponse> => {
   return await axios.get(route)
}