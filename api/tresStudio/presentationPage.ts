import { AxiosResponse } from "axios"

import getAxiosResponse from "../getAxiosResponse"
import { Get } from "../../shared/interfaces/api"
import { IFeature, ILandingInfo, IReview } from "../../shared/interfaces/presentationPage"
import { defaultValues, tresStudioAPIRoutes } from "../../utils/constants"


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