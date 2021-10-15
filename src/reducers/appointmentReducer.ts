import { Action } from "../../shared/interfaces/api"
import { IAppointment } from "../../shared/interfaces/userDashboard";
import { Actions, defaultValues } from "../../utils/constants";
import { Reducer } from "../../shared/types"


const appointmentReducer: Reducer<IAppointment[], Action<IAppointment[]>> = (state: IAppointment[] = [ defaultValues.APPOINTMENT ], action: Action<IAppointment[]>): IAppointment[] => {
   const { type, payload } = action;
   switch (type) {
      case Actions.APPOINTMENTS:
         return payload
      default:
         return state
   }
}

export default appointmentReducer