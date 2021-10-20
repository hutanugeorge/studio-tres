import axios, { AxiosResponse } from "axios"

import { AxiosRequest } from "../../shared/interfaces/api"
import { IFeature, ILandingInfo, IReview } from "../../shared/interfaces/presentationPage"
import { IEmployee } from "../../shared/interfaces/userDashboard"
import { defaultValues, tresStudioAPIRoutes } from "../../utils/constants"


export const getLandingInfo: AxiosRequest<ILandingInfo> = async (): Promise<ILandingInfo> => {
   const { status, data }: AxiosResponse = await axios.get(tresStudioAPIRoutes.landing)
   return status === 200 ? data.landingInfo : defaultValues.LANDING_INFO
}

export const getFeatures: AxiosRequest<IFeature[]> = async (): Promise<IFeature[]> => {
   const { status, data }: AxiosResponse = await axios.get(tresStudioAPIRoutes.features)
   return status === 200 ? data.features : [ defaultValues.FEATURE ]
}

export const getReviews: AxiosRequest<IReview[]> = async (): Promise<IReview[]> => {
   const { status, data }: AxiosResponse = await axios.get(tresStudioAPIRoutes.reviews)
   return status === 200 ? data.reviews : [ defaultValues.REVIEW ]
}

export const getEmployees: AxiosRequest<IEmployee[]> = async (): Promise<IEmployee[]> => {
   const {status, data}: AxiosResponse = await axios.get(tresStudioAPIRoutes.getEmployees)
   return status === 200 ? data.employees : [ defaultValues.EMPLOYEE]
}