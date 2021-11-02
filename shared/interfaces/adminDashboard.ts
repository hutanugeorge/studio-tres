import { IEmployee } from "./userDashboard"


interface IAdminEmployeesInfo extends Omit<IEmployee, "unavailability" | "appointments"> {}

export interface IAdminEmployee extends IAdminEmployeesInfo {
   readonly _id: string
   readonly email: string
   readonly lastThreeAppointments: [
      {
         readonly date: string,
         readonly hour: string
      }
   ]
}