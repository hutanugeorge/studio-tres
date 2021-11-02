import { FC, useState } from "react"
import * as React from "react"

import { renderEmployeeEditForm, renderLastAppointments, renderPersonalInformation } from "./employeeSectionParts"


const EmployeesSection: FC = (): JSX.Element => {
   const [ editEmployee, setEditEmployee ] = useState<boolean>(false)

   return <>
      <div className="employees--wrap">
         <div className="employees__title">
            <p className="employees__title-content">
               Employees
            </p>
         </div>
         <div className="employees">
            <div className="employees__add-employee">
               <p className="employees__add-employee__button">
                  Add employee
               </p>
            </div>
            <div className="employees__categories">
               <div className="employees__categories__employees-group">
                  <div className="employees__categories__employees-group--title">
                     <p className="employees__categories__employees-group--title--content">
                        Hair Care
                     </p>
                  </div>
                  <div className="employees__categories__employees-group__employee">
                     <div className="employees__categories__employees-group__employee--info">
                        <div className="employees__categories__employees-group__employee--info--person">
                           {renderPersonalInformation(setEditEmployee)}
                        </div>
                        {renderLastAppointments()}
                     </div>
                     {editEmployee && renderEmployeeEditForm(setEditEmployee)}
                  </div>
               </div>
            </div>

         </div>
      </div>
   </>
}

export default EmployeesSection