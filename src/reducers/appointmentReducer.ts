import { IAppointment } from "../../shared/interfaces/userDashboard";
import { Actions, defaultValues } from "../../utils/constants";


interface IAppointmentsReducerAction {
   type: string
   payload: { appointments: IAppointment[] }
}

const appointmentReducer = (state: IAppointment[] = [ defaultValues.APPOINTMENT ], action: IAppointmentsReducerAction) => {
   const { type, payload } = action;
   switch (type) {
      case Actions.APPOINTMENTS:
         const { appointments } = payload
         return appointments
      default:
         return state
   }
}

export default appointmentReducer