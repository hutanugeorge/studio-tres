import dayjs from "dayjs"
import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { postAppointments } from "../../../api/tresStudio/makeAppointment"
import { IUserInfo } from "../../../shared/interfaces/user"

import { defaultValues, weekDaysShort } from "../../../utils/constants"
import { fetchEmployees, fetchUserInfo } from "../../actions"
import { RootState } from "../../reducers"
import {
   IEmployee,
   IEmployeeAppointment,
   IUnavailabilityPeriod
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


const MakeAppointment = (): JSX.Element => {
   const dispatch = useDispatch()
   const history = useHistory()

   const employees: IEmployee[] = useSelector((state: RootState) => state.employees)
   const userInfo: IUserInfo = useSelector((state: RootState) => state.userInfo)

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
   const [ unavailability, setUnavailability ] = useState<IUnavailabilityPeriod[]>([ { startDate: '', endDate: '' } ])
   const [ appointmentServerMessage, setAppointmentServerMessage ] = useState<string>('')
   const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
   const [ firstNameError, setFirstNameError ] = useState<string>('')
   const [ lastNameError, setLastNameError ] = useState<string>('')
   const [ emailError, setEmailError ] = useState<string>('')
   const [ phoneError, setPhoneError ] = useState<string>('')
   const [ serviceError, setServiceError ] = useState<string>('')
   const [ subServiceError, setSubServiceError ] = useState<string>('')

   const token = localStorage.getItem('token')
   const scheduleDates = {
      firstName: isLoggedIn ? userInfo.firstName : firstName,
      lastName: isLoggedIn ? userInfo.lastName : lastName,
      email: isLoggedIn ? userInfo.email : email,
      phone,
      message,
      serviceTitle: mainService,
      subService,
      employeeName: `${employee.firstName} ${employee.lastName}`,
      employee: employee._id,
      hour: appointmentHour,
      day: appointmentDay
   }

   useEffect(() => {
      token && setIsLoggedIn((prev: boolean) => !prev)
      dispatch(fetchEmployees())
      isLoggedIn && dispatch(fetchUserInfo())
   }, [ firstNameError ])

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
                                  onChange={(e) => {
                                     setFirsName(e.currentTarget.value)
                                  }}
                                  name="firstName"
                                  placeholder="First Name"
                                  className={`make-appointment__container__upper-side__form__upper-inputs--input 
                                  make-appointment__container__upper-side__form__upper-inputs--input${firstNameError ? '--error' : ''}`}/>
                           <label htmlFor="firstName"
                                  className={`make-appointment__container__upper-side__form__upper-inputs--input--label${firstNameError ? '--error' : ''}`}>
                              <p className="make-appointment__container__upper-side__form__upper-inputs--input--label--content">
                                 {firstNameError ? firstNameError : 'First name'}
                              </p>
                           </label>
                        </div>
                        <div
                           className={`make-appointment__container__upper-side__form__upper-inputs--group make-appointment__container__upper-side__form__upper-inputs--group${isLoggedIn ? '--hidden' : ''}`}>
                           <input type="text" name="lastName" placeholder="Last Name"
                                  onChange={(e) => {
                                     setLastName(e.currentTarget.value)
                                  }}
                                  className={`make-appointment__container__upper-side__form__upper-inputs--input 
                                  make-appointment__container__upper-side__form__upper-inputs--input${lastNameError ? '--error' : ''}`}/>
                           <label htmlFor="lastName"
                                  className={`make-appointment__container__upper-side__form__upper-inputs--input--label${lastNameError ? '--error' : ''}`}>
                              <p className="make-appointment__container__upper-side__form__upper-inputs--input--label--content">
                                 {lastNameError ? lastNameError : 'Last name'}
                              </p>
                           </label>
                        </div>
                     </div>
                     <div className="make-appointment__container__upper-side__form__lower-inputs">
                        <div
                           className={`make-appointment__container__upper-side__form__lower-inputs--group make-appointment__container__upper-side__form__lower-inputs--group${isLoggedIn ? '--hidden' : ''}`}>
                           <input type="email" name="email" placeholder="Email"
                                  onChange={(e) => {
                                     setEmail(e.currentTarget.value)
                                  }}
                                  className={`make-appointment__container__upper-side__form__upper-inputs--input 
                                  make-appointment__container__upper-side__form__upper-inputs--input${emailError ? '--error' : ''}`}/>
                           <label htmlFor="email"
                                  className={`make-appointment__container__upper-side__form__lower-inputs--input--label${emailError ? '--error' : ''}`}>
                              <p className="make-appointment__container__upper-side__form__lower-inputs--input--label--content">
                                 {emailError ? emailError : 'Email'}
                              </p>
                           </label>
                        </div>
                        <div className="make-appointment__container__upper-side__form__lower-inputs--group">
                           <input type="tel" name="phone" placeholder="Phone"
                                  onChange={(e) => {
                                     setPhone(e.currentTarget.value)
                                  }}
                                  className={`make-appointment__container__upper-side__form__upper-inputs--input 
                                  make-appointment__container__upper-side__form__upper-inputs--input${phoneError ? '--error' : ''}`}/>
                           <label htmlFor="phone"
                                  className={`make-appointment__container__upper-side__form__lower-inputs--input--label${phoneError ? '--error' : ''}`}>
                              <p className="make-appointment__container__upper-side__form__lower-inputs--input--label--content">
                                 {phoneError ? phoneError : 'Phone'}
                              </p>
                           </label>
                        </div>
                     </div>
                     <div className="make-appointment__container__upper-side__form__employee">
                        <div className="make-appointment__container__upper-side__form__employee-services">
                           <div className="make-appointment__container__upper-side__form__employee-services--group">
                              <select id="services"
                                      onChange={(e) => {
                                         setMainService(e.currentTarget.value)
                                         setEmployee(defaultValues.EMPLOYEE)
                                      }}
                                      className={`make-appointment__container__upper-side__form__lower-inputs--input 
                                      make-appointment__container__upper-side__form__lower-inputs--input${serviceError ? '--error' : ''}`}>
                                 {renderServices()}
                              </select>
                              <input type="hidden" name="services" value={mainService}/>
                              <p className={`make-appointment__container__upper-side__form--error`}>
                                 {serviceError ? serviceError : null}
                              </p>
                           </div>
                           <div className="make-appointment__container__upper-side__form__employee-services--group">
                              <select id="subServices"
                                      onChange={(e) => {
                                         e.currentTarget.value !== 'Sub Service' ? setSubService(e.currentTarget.value) : ''
                                      }}
                                      className={`make-appointment__container__upper-side__form__lower-inputs--input${mainService === 'Service' ? '--hidden' : ''} 
                                      make-appointment__container__upper-side__form__lower-inputs--input${mainService === 'Service' ? '--hidden' : ''}${subServiceError ? '--error' : ''}`}>
                                 {renderSubServices(mainService)}
                              </select>
                              <input type="hidden" name="subService"
                                     value={`${subService.split(' ')[0]}_${subService.split(' ')[1]}`}/>
                              <p className={`make-appointment__container__upper-side__form--error`}>
                                 {subServiceError ? subServiceError : null}
                              </p>
                           </div>
                        </div>
                        <div className="make-appointment__container__upper-side__form__employee-list">
                           {employees.map((employee: IEmployee, index: number) => {
                              if (mainService !== '' && mainService === employee.field) {
                                 return <div
                                    className="make-appointment__container__upper-side__form__employee-list--image--wrap"
                                    key={index}>
                                    <div className="make-appointment__container__upper-side__form__employee-list--image"
                                         onClick={() => {
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
                              }
                           })}
                        </div>
                     </div>
                     {renderMakeAppointmentUpperSideFormMessage(setMessage)}
                  </div>
               </div>
               <div
                  className={`make-appointment__container__lower-side 
                  ${employee.jobTitle === '' || mainService === 'Service' ? 'make-appointment__container__lower-side--hidden' : ''}`}>
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
                        const unavailableDays: string[] = []
                        if (unavailability !== undefined && unavailability[0].startDate !== '') {
                           unavailability.forEach((unavailabilityDate: IUnavailabilityPeriod) => {
                              const arrayStartDate = unavailabilityDate.startDate.split('/')
                              const arrayEndDate = unavailabilityDate.endDate.split('/')
                              const startDate = arrayStartDate[1] === String(dayjs().month() + 1) ? arrayStartDate[0] : []
                              const endDate = arrayEndDate[1] === String(dayjs().month() + 1) ? arrayEndDate[0] : []
                              typeof startDate === 'string' && unavailableDays.push(startDate)
                              typeof endDate === 'string' && !endDate.includes(endDate) && unavailableDays.push(endDate)
                           })
                        }
                        const newDate = new Date()
                        const day = dayjs(new Date(newDate.setDate(date))).day()
                        const weekday = day % 7
                        let hasBusyHours = false;
                        let busyWorkingHours: number | (string | void)[]
                        getBusyHoursByDay(appointmentsDates, unavailableDays, employee.jobTitle).map((busyDay: (number | (string | void)[])[]) => {
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
                                    const hour = dayProgram.split(':')[0]
                                    const minute = dayProgram.split(':')[1]
                                    let exactTime: {} | null | undefined | string;
                                    if (typeof busyWorkingHours !== "number") {
                                       if (busyWorkingHours) {
                                          busyWorkingHours?.includes(`${hour}:${minute}`)
                                             ? exactTime = '-'
                                             : exactTime = `${hour}:${minute}`
                                       } else
                                          exactTime = `${hour}:${minute}`
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
                     <p className="make-appointment__container__lower-side__submit-button--message">{appointmentServerMessage}</p>
                     <p onClick={async () => {
                        const response = await postAppointments(scheduleDates)
                        if (response.status === 200) {
                           setAppointmentServerMessage(`${response.data.userFirstName}, ${response.data.message}`)
                           setTimeout(() => history.push('/'), 2000)
                        } else if (response.status === 403) {
                           const { errors } = response.data
                           errors?.firstName ? setFirstNameError(errors.firstName) : setFirstNameError('')
                           errors?.lastName ? setLastNameError(errors.lastName) : setLastNameError('')
                           errors?.email ? setEmailError(errors.email) : setEmailError('')
                           errors?.phone ? setPhoneError(errors.phone) : setPhoneError('')
                           errors?.service ? setServiceError(errors.service) : setServiceError('')
                           errors?.subService ? setSubServiceError(errors.subService) : setSubServiceError('')
                        }
                     }
                     }
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