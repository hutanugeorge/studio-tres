import dayjs from "dayjs"
import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { postAppointments } from "../../../api/tresStudio/makeAppointment"

import { IEmployee, IEmployeeAppointment } from "../../../shared/interfaces/userDashboard"
import { defaultValues, weekDaysShort } from "../../../utils/constants"
import { fetchEmployees } from "../../actions"
import { RootState } from "../../reducers"
import {
   renderMakeAppointmentHeader,
   renderMakeAppointmentUpperSideContact,
   renderMakeAppointmentUpperSideFormInputs,
   renderMakeAppointmentUpperSideFormMessage,
   renderServices,
   renderSubServices
} from "./makeAppointmentsParts"
import {
   getAWeekDatesByNow,
   getBusyHoursByDay, getDailyProgram,
   getEmployeeDayAppointments,
   getServiceDuration
} from "./makeAppointmentUtils"


const MakeAppointment = (): JSX.Element => {
   const dispatch = useDispatch()

   const employees: IEmployee[] = useSelector((state: RootState) => state.employees)

   const [ firstName, setFirsName ] = useState<string>('')
   const [ lastName, setLastName ] = useState<string>('')
   const [ email, setEmail ] = useState<string>('')
   const [ phone, setPhone ] = useState<string>('')
   const [ message, setMessage ] = useState<string>('')
   const [ appointmentHour, setAppointmentHour ] = useState<string>('')
   const [ appointmentDay, setAppointmentDay ] = useState<string>('')
   const [ mainService, setMainService ] = useState<string>('Service')
   const [ subService, setSubService ] = useState<string>('')
   const [ employee, setEmployee ] = useState<IEmployee>(defaultValues.EMPLOYEE)
   const [ appointmentsDates, setAppointmentsDates ] = useState<IEmployeeAppointment[] | undefined>(undefined)
   const [appointmentServerMessage, setAppointmentServerMessage ] = useState<string>('')

   const scheduleDates = {
      firstName,
      lastName,
      email,
      phone,
      message,
      mainService,
      subService,
      employee: employee._id,
      hour: appointmentHour,
      day: appointmentDay
   }
   const inputsArgs = { setFirsName, setLastName, setEmail, setPhone }


   useEffect(() => {
      dispatch(fetchEmployees())
   }, [])

   return (
      <div className="make-appointment--wrap">
         <div className="make-appointment">
            <div className="make-appointment__header">
               {renderMakeAppointmentHeader()}
            </div>
            <div className="make-appointment__container">
               <div className="make-appointment__container__upper-side">
                  {renderMakeAppointmentUpperSideContact()}
                  <div className="make-appointment__container__upper-side__form">
                     {renderMakeAppointmentUpperSideFormInputs(inputsArgs)}
                     <div className="make-appointment__container__upper-side__form__employee">
                        <div className="make-appointment__container__upper-side__form__employee-services">
                           <select id="services"
                                   onChange={(e) => {
                                      setMainService(e.currentTarget.value)
                                      setEmployee(defaultValues.EMPLOYEE)
                                   }}
                                   className="make-appointment__container__upper-side__form__lower-inputs--input">
                              {renderServices()}
                           </select>
                           <select id="services"
                                   onChange={(e) => {
                                      e.currentTarget.value !== 'Subservice' ? setSubService(e.currentTarget.value) : null
                                   }}
                                   className={`make-appointment__container__upper-side__form__lower-inputs--input${mainService === 'Service' ? '--hidden' : ''}`}>
                              {renderSubServices(mainService)}
                           </select>
                        </div>
                        <div className="make-appointment__container__upper-side__form__employee-list">
                           {employees.map((employee: IEmployee, index: number) => {
                              if (mainService !== '' && mainService === employee.field)
                                 return <div
                                    className="make-appointment__container__upper-side__form__employee-list--image--wrap"
                                    key={index}>
                                    <div className="make-appointment__container__upper-side__form__employee-list--image"
                                         onClick={() => {
                                            setEmployee(employee)
                                            setAppointmentsDates(getEmployeeDayAppointments(employee.appointments))
                                         }}>
                                       <img
                                          className="make-appointment__container__upper-side__form__employee-list--image--content"
                                          src={`images/employees/${employee.firstName.toLowerCase()}_${employee.lastName.toLowerCase()}.jpg`}
                                          alt="employee photo"/>
                                    </div>
                                    <div
                                       className="make-appointment__container__upper-side__form__employee-list--image--name">
                                       {`${employee.firstName}  ${employee.lastName}`}
                                    </div>
                                 </div>
                           })}
                        </div>
                     </div>
                     {renderMakeAppointmentUpperSideFormMessage(setMessage)}
                  </div>
               </div>
               <div
                  className={`make-appointment__container__lower-side ${employee.jobTitle === '' || mainService === 'Service' ? 'make-appointment__container__lower-side--hidden' : ''}`}>
                  <div className="make-appointment__container__lower-side__employee-info">
                     <div className="make-appointment__container__lower-side__employee-info--photo">
                        <img
                           src={`images/employees/${employee.firstName.toLowerCase()}_${employee.lastName.toLowerCase()}.jpg`}
                           alt="employee-photo"
                           className="make-appointment__container__lower-side__employee-info--photo--content"/>
                     </div>
                     <div className="make-appointment__container__lower-side__employee-info--identification">
                        <div className="make-appointment__container__lower-side__employee-info--identification--name">
                           <p className="make-appointment__container__lower-side__employee-info--identification--name--content">
                              {`${employee.firstName}  ${employee.lastName}`}
                           </p>
                        </div>
                        <div
                           className="make-appointment__container__lower-side__employee-info--identification--job-title">
                           <p className="make-appointment__container__lower-side__employee-info--identification--job-title--content">
                              {employee.jobTitle}
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="make-appointment__container__lower-side__employee-program">
                     {getAWeekDatesByNow().map((date: number, index: number) => {
                        const newDate = new Date()
                        const day = dayjs(new Date(newDate.setDate(date))).day()
                        const weekday = day % 7
                        let hasBusyHours = false;
                        let busyWorkingHours: number | (string | void)[]
                        getBusyHoursByDay(appointmentsDates).map((busyDay: (number | (string | void)[])[]) => {
                           hasBusyHours = busyDay.includes(date)
                           if (hasBusyHours)
                              busyWorkingHours = busyDay[1]
                        })
                        return <div key={index}
                                    onClick={() => {
                                       setAppointmentDay(String(date))
                                    }}
                                    className="make-appointment__container__lower-side__employee-program__element">
                           <div className="make-appointment__container__lower-side__employee-program__element__day">
                              <div
                                 className="make-appointment__container__lower-side__employee-program__element__day--week-day">
                                 <p className="make-appointment__container__lower-side__employee-program__element__day--week-day--content">{weekDaysShort[weekday]}</p>
                              </div>
                              <div
                                 className="div make-appointment__container__lower-side__employee-program__element__day--day-number">
                                 <p className="make-appointment__container__lower-side__employee-program__element__day--day-number">{date}</p>
                              </div>
                           </div>
                           <div className="make-appointment__container__lower-side__employee-program__element__hours">
                              {getDailyProgram(getServiceDuration(employee.jobTitle)).map((dayProgram: string, index: number) => {
                                    const hour = dayProgram.split(':')[0].length === 1 ? `0${dayProgram.split(':')[0]}` : dayProgram.split(':')[0]
                                    const minute = dayProgram.split(':')[1].length === 1 ? `${dayProgram.split(':')[1]}0` : dayProgram.split(':')[1]
                                    let exactTime: {} | null | undefined | string;
                                    if (typeof busyWorkingHours !== "number") {
                                       busyWorkingHours
                                          ? exactTime = busyWorkingHours?.includes(`${hour}:${minute}`) ? '-' : `${hour}:${minute}`
                                          : exactTime = `${hour}:${minute}`
                                    }
                                    return (
                                       <div key={index}
                                            className="make-appointment__container__lower-side__employee-program__element__hours--hour">
                                          <p onClick={() => {
                                             if (typeof exactTime === "string")
                                                setAppointmentHour(exactTime)
                                          }}
                                             className={`make-appointment__container__lower-side__employee-program__element__hours--hour--content 
                                          make-appointment__container__lower-side__employee-program__element__hours--hour--content${String(date) === appointmentDay && String(exactTime) === appointmentHour ? '--active' : ''}`}>
                                             {exactTime}
                                          </p>
                                       </div>
                                    )
                                 }
                              )}
                           </div>
                        </div>
                     })}
                  </div>
                  <div className="make-appointment__container__lower-side__submit-button">
                     <p>{appointmentServerMessage}</p>
                     <p onClick={async () => {
                        const response = await postAppointments(scheduleDates)
                        response.status === 200
                        && setAppointmentServerMessage(`${response.data.userFirstName}, ${response.data.message}`)
                     }}
                        className="make-appointment__container__lower-side__submit-button--content">
                        Submit appointment
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}


export default MakeAppointment