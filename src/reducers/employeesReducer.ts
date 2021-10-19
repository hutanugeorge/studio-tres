import { Action } from "../../shared/interfaces/api"
import { IEmployee } from "../../shared/interfaces/userDashboard"
import { Reducer } from "../../shared/types"
import { Actions, defaultValues } from "../../utils/constants"


const employeesReducer: Reducer<IEmployee[], Action<IEmployee[]>> = (state: IEmployee[] = [ defaultValues.EMPLOYEE ], action: Action<IEmployee[]>): IEmployee[] => {
   const { type, payload } = action
   switch (type) {
      case Actions.FETCH_EMPLOYEES:
         return payload
      default:
         return state
   }
}

export default employeesReducer