import axios from "axios"
import { IAppointment2 } from "../../shared/interfaces/makeAppointment"
import { tresStudioAPIRoutes } from "../../utils/constants"


export const postAppointments = async (args: IAppointment2) => {
   try {
      const appointmentData = { ...args }
      const token = localStorage.getItem('token')
      const headers = { authorization: `Bearer ${token}` }
      return await axios.post(tresStudioAPIRoutes.appointments, appointmentData, { headers })
   } catch (error: any) {
      return error.response
   }
}