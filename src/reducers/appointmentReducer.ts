import { IAppointment } from "../../shared/interfaces/userDashboard";
import { Actions, defaultValues } from "../../utils/constants";
import { Reducer } from "../../shared/types"


interface IAppointmentsReducerAction {
   type: string
   payload: IAppointment[]
}

const appointmentReducer: Reducer<IAppointment[], IAppointmentsReducerAction> = (state: IAppointment[] = [ defaultValues.APPOINTMENT ], action: IAppointmentsReducerAction): IAppointment[] => {
   const { type, payload } = action;
   switch (type) {
      case Actions.APPOINTMENTS:
         return payload
      default:
         return state
   }
}

export default appointmentReducer