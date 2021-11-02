import axios, { AxiosResponse } from "axios"

import { IAppointment } from "../../shared/interfaces/makeAppointment"
import { PostRequest } from "../../shared/types"
import { tresStudioAPIRoutes } from "../../utils/constants"


export const postAppointments: PostRequest<IAppointment> = async (args: IAppointment): Promise<AxiosResponse> => {
   try {
      const appointmentData = { ...args }
      const token = localStorage.getItem('token')
      const headers = { authorization: `Bearer ${token}` }
      return await axios.post(tresStudioAPIRoutes.appointments, appointmentData, { headers })
   } catch (error: any) {
      return error.response
   }
}