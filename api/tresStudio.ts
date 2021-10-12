import axios, { AxiosResponse } from 'axios'

import { defaultValues, tresStudioAPIRoutes } from '../utils/constants'
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import { IReward, IPromotion, IAppointment } from "../shared/interfaces/userDashboard";


type GetAxiosResponse = (route: string) => Promise<AxiosResponse>
type Get<T> = () => Promise<T>

export const getLandingInfo: Get<ILandingInfo> = async (): Promise<ILandingInfo> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.landing)
   return status === 200 ? data.landingInfo : defaultValues.LANDING_INFO
}

export const getFeatures: Get<IFeature[]> = async (): Promise<IFeature[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.features)
   return status === 200 ? data.features : [ defaultValues.FEATURE ]
}

export const getReviews: Get<IReview[]> = async (): Promise<IReview[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.reviews)
   return status === 200 ? data.reviews : [ defaultValues.REVIEW ]
}

export const getPromotions: Get<IPromotion[]> = async (): Promise<IPromotion[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.promotions)
   return status === 200 ? data.promotions : [ defaultValues.PROMOTION ]
}

export const getRewards: Get<IReward[]> = async (): Promise<IReward[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.rewards)
   return status === 200 ? data.rewards : [ defaultValues.REWARD ]
}

export const getAppointments: Get<IAppointment[]> = async (): Promise<IAppointment[]> => {
   const { status, data }: AxiosResponse = await getAxiosResponse(tresStudioAPIRoutes.appointments)
   return status === 200 ? data.appointments : [ defaultValues.APPOINTMENT ]
}

const getAxiosResponse: GetAxiosResponse = async (route: string): Promise<AxiosResponse> => {
   return await axios.get(route)
}