import axios, { AxiosResponse } from "axios"

import { AxiosRequest } from "../../shared/interfaces/api"
import { IAppointment, IEmployee, IPromotion, IReward } from "../../shared/interfaces/userDashboard"
import { defaultValues, tresStudioAPIRoutes } from "../../utils/constants"


export const getPromotions: AxiosRequest<IPromotion[]> = async (): Promise<IPromotion[]> => {
   const token = localStorage.getItem('token')
   const headers = { authorization: `Bearer ${token}` }
   const { status, data }: AxiosResponse = await axios.get(tresStudioAPIRoutes.promotions, { headers })
   return status === 200 ? data.promotions : [ defaultValues.PROMOTION ]
}

export const getRewards: AxiosRequest<IReward[]> = async (): Promise<IReward[]> => {
   const token = localStorage.getItem('token')
   const headers = { authorization: `Bearer ${token}` }
   const { status, data }: AxiosResponse = await axios.get(tresStudioAPIRoutes.rewards, { headers })
   return status === 200 ? data.rewards : [ defaultValues.REWARD ]
}

export const getAppointments: AxiosRequest<IAppointment[]> = async (): Promise<IAppointment[]> => {
   const token = localStorage.getItem('token')
   const headers = { authorization: `Bearer ${token}` }
   const { status, data }: AxiosResponse = await axios.get(tresStudioAPIRoutes.appointments, { headers })
   return status === 200 ? data.appointments : [ defaultValues.APPOINTMENT ]
}

