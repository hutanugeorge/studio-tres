import { AxiosResponse } from "axios"

import getAxiosResponse from "../getAxiosResponse"
import { Get } from "../../shared/interfaces/api"
import { IAppointment, IPromotion, IReward } from "../../shared/interfaces/userDashboard"
import { defaultValues, tresStudioAPIRoutes } from "../../utils/constants"


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