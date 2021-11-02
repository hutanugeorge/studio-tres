import React, { FC, useEffect, useState } from "react"

import { useHistory } from "react-router-dom"
import dayjs from "dayjs"

import { postAppointments } from "../../../api/tresStudio/makeAppointment"
import { IUseFetchResponse } from "../../../shared/interfaces/api"
import { IUserInfo } from "../../../shared/interfaces/user"
import { defaultValues, tresStudioAPIRoutes, weekDaysShort } from "../../../utils/constants"
import useFetch from "../../customHooks/useFetch"
import {
   IEmployee,
   IEmployeeAppointment,
} from "../../../shared/interfaces/userDashboard"
import {
   renderMakeAppointmentHeader,
   renderMakeAppointmentUpperSideContact,
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


interface IEmployees {
   employees: IEmployee[]
}

interface IUserInfoResponse {
   userInfo: IUserInfo
}

const MakeAppointment: FC = (): JSX.Element => {
   const history = useHistory()

   // Form data
   const [ firstName, setFirsName ] = useState<string>('')
   const [ lastName, setLastName ] = useState<string>('')
   const [ email, setEmail ] = useState<string>('')
   const [ phone, setPhone ] = useState<string>('')
   const [ message, setMessage ] = useState<string>('')
   const [ appointmentHour, setAppointmentHour ] = useState<string>('')
   const [ appointmentDay, setAppointmentDay ] = useState<string>('')
   const [ mainService, setMainService ] = useState<string>('Service')
   const [ subService, setSubService ] = useState<string>('')

   // Employee data
   const [ employee, setEmployee ] = useState<Omit<IEmployee, 'unavailability' | 'appointments'> | IEmployee>(defaultValues.EMPLOYEE)
   const [ appointmentsDates, setAppointmentsDates ] = useState<IEmployeeAppointment[] | undefined>(undefined)
   const [ unavailability, setUnavailability ] = useState<string[]>([])

   // Errors data
   const [ firstNameError, setFirstNameError ] = useState<string>('')
   const [ lastNameError, setLastNameError ] = useState<string>('')
   const [ emailError, setEmailError ] = useState<string>('')
   const [ phoneError, setPhoneError ] = useState<string>('')
   const [ serviceError, setServiceError ] = useState<string>('')
   const [ subServiceError, setSubServiceError ] = useState<string>('')

   // Utils
   const [ appointmentServerMessage, setAppointmentServerMessage ] = useState<string>('')
   const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)

   const employees: IUseFetchResponse<IEmployees> = useFetch<IEmployees>(tresStudioAPIRoutes.getEmployees)
   let userInfo: IUseFetchResponse<IUserInfoResponse> = useFetch<IUserInfoResponse>(tresStudioAPIRoutes.user, true)

   const token = localStorage.getItem('token')

   useEffect((): void => {
      token && setIsLoggedIn((prev: boolean) => !prev)
   }, [ userInfo.error /* TODO fix this - why I can't put here userInfo.data? - */ ])

   const scheduleDates = {
      firstName: isLoggedIn && userInfo.data ? userInfo.data.userInfo.firstName : firstName,
      lastName: isLoggedIn && userInfo.data ? userInfo.data.userInfo.lastName : lastName,
      email: isLoggedIn && userInfo.data ? userInfo.data.userInfo.email : email,
      phone,
      message,
      serviceTitle: mainService,
      subService,
      employeeName: `${employee.firstName} ${employee.lastName}`,
      employee: employee._id,
      hour: appointmentHour,
      day: appointmentDay
   }
   if (employees.data)
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
                        <div className="make-appointment__container__upper-side__form__upper-inputs">
                           <div
                              className={`make-appointment__container__upper-side__form__upper-inputs--group 
                           make-appointment__container__upper-side__form__upper-inputs--group${isLoggedIn ? '--hidden' : ''}`}>
                              <input type="text"
                                     onChange={(e): void => {
                                        setFirsName(e.currentTarget.value)
                                     }}
                                     name="firstName"
                                     placeholder="First Name"
                                     className={`make-appointment__container__upper-side__form__upper-inputs--input 
                                  make-appointment__container__upper-side__form__upper-inputs--input${firstNameError ? '--error' : ''}`}/>
                              <label htmlFor="firstName"
                                     className={`make-appointment__container__upper-side__form__upper-inputs--input--label${firstNameError ? '--error' : ''}`}>
                                 <p className="make-appointment__container__upper-side__form__upper-inputs--input--label--content">
                                    {firstNameError ?? 'First name'}
                                 </p>
                              </label>
                           </div>
                           <div
                              className={`make-appointment__container__upper-side__form__upper-inputs--group make-appointment__container__upper-side__form__upper-inputs--group${isLoggedIn ? '--hidden' : ''}`}>
                              <input type="text" name="lastName" placeholder="Last Name"
                                     onChange={(e): void => {
                                        setLastName(e.currentTarget.value)
                                     }}
                                     className={`make-appointment__container__upper-side__form__upper-inputs--input 
                                  make-appointment__container__upper-side__form__upper-inputs--input${lastNameError ? '--error' : ''}`}/>
                              <label htmlFor="lastName"
                                     className={`make-appointment__container__upper-side__form__upper-inputs--input--label${lastNameError ? '--error' : ''}`}>
                                 <p className="make-appointment__container__upper-side__form__upper-inputs--input--label--content">
                                    {lastNameError ?? 'Last name'}
                                 </p>
                              </label>
                           </div>
                        </div>
                        <div className="make-appointment__container__upper-side__form__lower-inputs">
                           <div
                              className={`make-appointment__container__upper-side__form__lower-inputs--group make-appointment__container__upper-side__form__lower-inputs--group${isLoggedIn ? '--hidden' : ''}`}>
                              <input type="email" name="email" placeholder="Email"
                                     onChange={(e): void => {
                                        setEmail(e.currentTarget.value)
                                     }}
                                     className={`make-appointment__container__upper-side__form__upper-inputs--input 
                                  make-appointment__container__upper-side__form__upper-inputs--input${emailError ? '--error' : ''}`}/>
                              <label htmlFor="email"
                                     className={`make-appointment__container__upper-side__form__lower-inputs--input--label${emailError ? '--error' : ''}`}>
                                 <p className="make-appointment__container__upper-side__form__lower-inputs--input--label--content">
                                    {emailError ?? 'Email'}
                                 </p>
                              </label>
                           </div>
                           <div className="make-appointment__container__upper-side__form__lower-inputs--group">
                              <input type="tel" name="phone" placeholder="Phone"
                                     onChange={(e): void => {
                                        setPhone(e.currentTarget.value)
                                     }}
                                     className={`make-appointment__container__upper-side__form__upper-inputs--input 
                                  make-appointment__container__upper-side__form__upper-inputs--input${phoneError ? '--error' : ''}`}/>
                              <label htmlFor="phone"
                                     className={`make-appointment__container__upper-side__form__lower-inputs--input--label${phoneError ? '--error' : ''}`}>
                                 <p className="make-appointment__container__upper-side__form__lower-inputs--input--label--content">
                                    {phoneError ?? 'Phone'}
                                 </p>
                              </label>
                           </div>
                        </div>
                        <div className="make-appointment__container__upper-side__form__employee">
                           <div className="make-appointment__container__upper-side__form__employee-services">
                              <div className="make-appointment__container__upper-side__form__employee-services--group">
                                 <select id="services"
                                         onChange={(e): void => {
                                            setMainService(e.currentTarget.value)
                                            setEmployee(defaultValues.EMPLOYEE)
                                         }}
                                         className={`make-appointment__container__upper-side__form__lower-inputs--input 
                                      make-appointment__container__upper-side__form__lower-inputs--input${serviceError ? '--error' : ''}`}>
                                    {renderServices()}
                                 </select>
                                 <input type="hidden" name="services" value={mainService}/>
                                 <p className={`make-appointment__container__upper-side__form--error`}>
                                    {serviceError ?? null}
                                 </p>
                              </div>
                              <div className="make-appointment__container__upper-side__form__employee-services--group">
                                 <select id="subServices"
                                         onChange={(e): void => {
                                            e.currentTarget.value !== 'Sub Service' && setSubService(e.currentTarget.value)
                                         }}
                                         className={`make-appointment__container__upper-side__form__lower-inputs--input${mainService === 'Service' ? '--hidden' : ''} 
                                      make-appointment__container__upper-side__form__lower-inputs--input${mainService === 'Service' ? '--hidden' : ''}${subServiceError ? '--error' : ''}`}>
                                    {renderSubServices(mainService)}
                                 </select>
                                 <input type="hidden" name="subService"
                                        value={`${subService.split(' ')[0]}_${subService.split(' ')[1]}`}/>
                                 <p className={`make-appointment__container__upper-side__form--error`}>
                                    {subServiceError ?? null}
                                 </p>
                              </div>
                           </div>
                           <div className="make-appointment__container__upper-side__form__employee-list">
                              {employees.data.employees.map((employee: IEmployee, index: number): JSX.Element | undefined => {
                                 if (mainService !== '' && mainService === employee.field)
                                    return <div
                                       className="make-appointment__container__upper-side__form__employee-list--image--wrap"
                                       key={index}>
                                       <div
                                          className="make-appointment__container__upper-side__form__employee-list--image"
                                          onClick={(): void => {
                                             setEmployee(employee)
                                             setAppointmentsDates(getEmployeeDayAppointments(employee.appointments))
                                             employee.unavailability && employee.unavailability.length && setUnavailability(employee.unavailability)
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
                  <div className={`make-appointment__container__lower-side 
                  ${employee.jobTitle === '' || mainService === 'Service' ? 'make-appointment__container__lower-side--hidden' : ''}`}>
                     <div className="make-appointment__container__lower-side__employee-info">
                        <div className="make-appointment__container__lower-side__employee-info--photo">
                           <img
                              src={`images/employees/${employee.firstName.toLowerCase()}_${employee.lastName.toLowerCase()}.jpg`}
                              alt="employee-photo"
                              className="make-appointment__container__lower-side__employee-info--photo--content"/>
                        </div>
                        <div className="make-appointment__container__lower-side__employee-info--identification">
                           <div
                              className="make-appointment__container__lower-side__employee-info--identification--name">
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
                        {getAWeekDatesByNow().map((date: number, index: number): JSX.Element => {
                           const unavailableDays: string[] = []
                           if (unavailability !== undefined && unavailability[0] !== '') {
                              unavailability.forEach((unavailabilityDate: string): void => {
                                 const arrayDate = unavailabilityDate.split('/')
                                 const startDate = (arrayDate[1] === String(dayjs().month() + 1))
                                 || ((arrayDate[1] === String(dayjs().month() + 2)) && arrayDate[0] < String(dayjs(dayjs().date()).add(6, 'd').date()))
                                    ? arrayDate[0] : []
                                 typeof startDate === 'string' && unavailableDays.push(startDate)
                              })
                           }
                           const newDate = new Date()
                           const day = dayjs(new Date(newDate.setDate(date))).day()
                           const weekday = day % 7
                           let hasBusyHours = false;
                           let busyWorkingHours: number | (string | void)[]
                           getBusyHoursByDay(appointmentsDates, unavailableDays, employee.jobTitle).map((busyDay: (number | (string | void)[])[]): void => {
                              hasBusyHours = busyDay.includes(date)
                              if (hasBusyHours)
                                 busyWorkingHours = busyDay[1]
                           })
                           return <div className="make-appointment__container__lower-side__employee-program__element"
                                       key={index}
                                       onClick={(): void => {
                                          setAppointmentDay(String(date))
                                       }}>
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
                              <div
                                 className="make-appointment__container__lower-side__employee-program__element__hours">
                                 {getDailyProgram(getServiceDuration(employee.jobTitle)).map((dayProgram: string, index: number): JSX.Element => {
                                       const hour = dayProgram.split(':')[0]
                                       const minute = dayProgram.split(':')[1]
                                       let exactTime: {} | null | undefined | string;
                                       if (typeof busyWorkingHours !== "number") {
                                          if (busyWorkingHours) {
                                             if (!busyWorkingHours?.includes(`${hour}:${minute}`))
                                                exactTime = `${hour}:${minute}`
                                          } else
                                             exactTime = `${hour}:${minute}`
                                       }
                                       return (
                                          <div key={index}
                                               className="make-appointment__container__lower-side__employee-program__element__hours--hour">
                                             <p onClick={() => {
                                                typeof exactTime === "string" && setAppointmentHour(exactTime)
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
                        <p className="make-appointment__container__lower-side__submit-button--message">{appointmentServerMessage}</p>
                        <p className="make-appointment__container__lower-side__submit-button--content"
                           onClick={async (): Promise<void> => {
                              const response = await postAppointments(scheduleDates)
                              if (response.status === 200) {
                                 setAppointmentServerMessage(`${response.data.userFirstName}, ${response.data.message}`)
                                 setTimeout((): void => history.push('/'), 2000)
                              } else if (response.status === 403) {
                                 const { errors } = response.data
                                 errors?.firstName ? setFirstNameError(errors.firstName) : setFirstNameError('')
                                 errors?.lastName ? setLastNameError(errors.lastName) : setLastNameError('')
                                 errors?.email ? setEmailError(errors.email) : setEmailError('')
                                 errors?.phone ? setPhoneError(errors.phone) : setPhoneError('')
                                 errors?.service ? setServiceError(errors.service) : setServiceError('')
                                 errors?.subService ? setSubServiceError(errors.subService) : setSubServiceError('')
                              }
                           }}>
                           Submit appointment
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   else if (employees.error)
      return <div>Error</div>
   else if (employees.loading)
      return <div>Just loading...</div>
   else
      return <div>Something else</div>
}


export default MakeAppointment