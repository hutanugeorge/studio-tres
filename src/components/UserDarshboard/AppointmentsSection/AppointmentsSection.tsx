import dayjs from "dayjs"
import React, { FC, useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import relativeTime from 'dayjs/plugin/relativeTime'

import { RootState } from "../../../reducers"
import { fetchAppointments } from "../../../actions"
import { IAppointment } from "../../../../shared/interfaces/userDashboard"


const AppointmentsSection: FC = (): JSX.Element => {
   dayjs.extend(relativeTime)
   const history = useHistory()
   const dispatch = useDispatch()

   const appointments: IAppointment[] = useSelector((state: RootState) => state.appointments)

   const [ appointmentsType, setAppointmentsType ] = useState<string>('future')

   const token = localStorage.getItem('token')

   useEffect(() => {
      !token ? history.push('/') : dispatch(fetchAppointments())
      setAppointmentsType('future')
   }, [])

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
                  onClick={() => setAppointmentsType('previous')}>
                  Previous
               </p>
               <p className={`appointments__buttons--button appointments__buttons--button--${appointmentsType === 'future' ? 'active' : ''}`}
                  onClick={() => setAppointmentsType('future')}>
                  Future
               </p>
            </div>
            <div className="appointments__content">
               {renderAppointmentsList(appointmentsType, appointments)}
            </div>
         </div>
      </div>)
}

const renderAppointmentsList = (appointmentType: string, appointments: IAppointment[]) =>
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

const renderAppointments = (appointmentType: string, appointments: IAppointment[]) =>
   appointments.map((appointment: IAppointment, index: number) =>
      appointmentType === 'future' && dayjs(new Date(appointment.date)).fromNow().includes('in')
      || appointmentType === 'previous' && dayjs(new Date(appointment.date)).fromNow().includes('ago')
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