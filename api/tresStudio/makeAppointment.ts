import axios from "axios"
import { IAppointment } from "../../shared/interfaces/makeAppointment"
import { tresStudioAPIRoutes } from "../../utils/constants"


export const postAppointments = async (args: IAppointment) => {
   try {
      const appointmentData = { ...args }
      const token = localStorage.getItem('token')
      const headers = { authorization: `Bearer ${token}` }
      return await axios.post(tresStudioAPIRoutes.appointments, appointmentData, { headers })
   } catch (error: any) {
      console.log(error)
      return error.response
   }
}