import * as React from 'react';
import { FC, useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { fetchAppointments } from "../../../actions";
import { RootState } from "../../../reducers";
import { IAppointment } from "../../../../shared/interfaces/userDashboard";


const AppointmentsSection: FC = (): JSX.Element => {
   const dispatch = useDispatch()
   const appointments: IAppointment[] = useSelector((state: RootState) => state.appointments)
   const [ appointmentsType, setAppointmentsType ] = useState<string>('future')

   useEffect(() => {
      dispatch(fetchAppointments())
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
      appointment.status === appointmentType
         ? <div key={index} className="appointment">
            <div className="appointment__title">
               <p className="appointment__title--content">{appointment.serviceTitle}</p>
            </div>
            <div className="appointment__employee">
               <p className="appointment__employee--content">{appointment.employeeName}</p>
            </div>
            <div className="appointment__date">
               <p className="appointment__date--content">{appointment.date}</p>
            </div>
            <div className="appointment__rate">
               <a href="#" className="appointment__rate--content">Rate</a>
            </div>
         </div>
         : null
   )


export default AppointmentsSection