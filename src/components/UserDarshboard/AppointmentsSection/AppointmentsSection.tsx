import React, { FC, useEffect, useState } from 'react'

import dayjs from "dayjs"
import { useHistory } from "react-router-dom"
import relativeTime from 'dayjs/plugin/relativeTime'

import { IUseFetchResponse } from "../../../../shared/interfaces/api"
import { tresStudioAPIRoutes } from "../../../../utils/constants"
import useFetch from "../../../customHooks/useFetch"
import { IAppointment } from "../../../../shared/interfaces/userDashboard"


type RenderAppointmentsList = (appointmentType: string, appointments: IAppointment[]) => JSX.Element
type RenderAppointments = (appointmentType: string, appointments: IAppointment[]) => (JSX.Element | null)[]

const AppointmentsSection: FC = (): JSX.Element => {
   dayjs.extend(relativeTime)
   const history = useHistory()

   const [ appointmentsType, setAppointmentsType ] = useState<string>('future')

   const appointments: IUseFetchResponse<{ appointments: IAppointment[] }> = useFetch<{ appointments: IAppointment[] }>(tresStudioAPIRoutes.appointments, true)
   const { data, error, loading } = appointments

   const token = localStorage.getItem('token')

   useEffect((): void => {
      !token && history.push('/')
      setAppointmentsType('future')
   }, [ data ])

   if (data)
      return (
         <div className="appointments--wrap">
            <div className="appointments__title">
               <p className="appointments__title--content">
                  Appointments
               </p>
            </div>
            <div className="appointments">
               <div className="appointments__buttons">
                  <p className={`appointments__buttons--button appointments__buttons--button--${appointmentsType === 'previous' ? 'active' : ''}`}
                     onClick={(): void => setAppointmentsType('previous')}>
                     Previous
                  </p>
                  <p className={`appointments__buttons--button appointments__buttons--button--${appointmentsType === 'future' ? 'active' : ''}`}
                     onClick={(): void => setAppointmentsType('future')}>
                     Future
                  </p>
               </div>
               <div className="appointments__content">
                  {renderAppointmentsList(appointmentsType, data.appointments)}
               </div>
            </div>
         </div>)
   else if (error)
      return <div>Error</div>
   else if (loading)
      return <div>Just loading...</div>
   else
      return <div>Something else</div>
}

const renderAppointmentsList: RenderAppointmentsList = (appointmentType: string, appointments: IAppointment[]): JSX.Element =>
   <div className="appointments__last">
      <div className="appointments__list-title">
         <p className="appointments__list-title--content">
            {appointmentType === 'future' ? 'Future' : 'Previous'} Appointments
         </p>
      </div>
      <div className="appointments__list">
         {renderAppointments(appointmentType, appointments)}
      </div>
   </div>

const renderAppointments: RenderAppointments = (appointmentType: string, appointments: IAppointment[]): (JSX.Element | null)[] =>
   appointments.map((appointment: IAppointment, index: number): JSX.Element | null =>
      (appointmentType === 'future' && dayjs(new Date(appointment.date)).fromNow().includes('in')
         || appointmentType === 'previous' && dayjs(new Date(appointment.date)).fromNow().includes('ago'))
         ? <div key={index} className="appointment">
            <div className="appointment__title">
               <p className="appointment__title--content">{appointment.subService}</p>
            </div>
            <div className="appointment__employee">
               <p className="appointment__employee--content">{appointment.employeeName}</p>
            </div>
            <div className="appointment__hour">
               <p className="appointment__hour--content">{appointment.hour}</p>
            </div>
            <div className="appointment__date">
               <p className="appointment__date--content">{appointment.date}</p>
            </div>
            {!(appointmentType === 'future')
               ?
               <div className="appointment__rate">
                  <a href="#" className="appointment__rate--content">Rate</a>
               </div>
               : null}
         </div>
         : null
   )


export default AppointmentsSection