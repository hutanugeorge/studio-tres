import dayjs from "dayjs"

import { IEmployeeAppointment } from "../../../shared/interfaces/userDashboard"
import { ServicesDuration } from "../../../utils/constants"


type GetDailyProgram = (duration: number, openHour?: number, openMinute?: number, closingHour?: number, closingMinute?: number) => string[]
type GetEmployeeDayAppointments = (appointments: IEmployeeAppointment[] | undefined) => IEmployeeAppointment[] | undefined
type GetBusyDays = (appointmentsDates: IEmployeeAppointment[] | undefined) => number[]
type GetAWeekDatesByNow = () => number[]
type GetBusyHoursByDay = (appointmentsDates: IEmployeeAppointment[] | undefined, unavailabilityDates: string[], jobTitle: string) => (number | (string | void)[])[][]
type GetServiceDuration = (jobTitle: string) => number

export const getDailyProgram: GetDailyProgram = (duration: number, openHour: number = 9, openMinute: number = 0, closingHour: number = 20, closingMinute: number = 0): string[] => {
   const today = dayjs().format('MM/DD/YYYY')
   const closingTime = dayjs(`${today} ${closingHour}:${closingMinute}`)
   let date = dayjs(`${today} ${openHour}:${openMinute}`)
   const hours: string[] = []
   while (closingTime.diff(date, 'minute') > duration) {
      const hour = String(dayjs(date).hour()).length === 1 ? `0${dayjs(date).hour()}` :`${dayjs(date).hour()}`
      const minute = String(dayjs(date).minute()).length === 1 ?  `${dayjs(date).minute()}0` :`${dayjs(date).minute()}`
      hours.push(`${hour}:${minute}`)
      date = dayjs(date).add(duration, 'minute')
   }
   return hours
}

export const getEmployeeDayAppointments: GetEmployeeDayAppointments = (appointments: IEmployeeAppointment[] | undefined): IEmployeeAppointment[] | undefined =>
   appointments?.filter((appointment: IEmployeeAppointment): number | null =>
      dayjs(new Date(appointment.date)).month() === dayjs().month() ? dayjs(new Date(appointment.date)).date() : null)




export const getBusyDays: GetBusyDays = (appointmentsDates: IEmployeeAppointment[] | undefined): number[] => {
   const busyDays: number[] = []
   appointmentsDates?.map((appointment: IEmployeeAppointment): void => {
         if(!busyDays.includes(dayjs(appointment.date).date()))
            busyDays.push(dayjs(appointment.date).date())
      }
   )
   return busyDays
}

export const getAWeekDatesByNow: GetAWeekDatesByNow = (): number[] => {
   const aWeekDates = []
   let day = 0
   while (day !== 7) {
      aWeekDates.push(dayjs().date() + day)
      day++
   }
   return aWeekDates
}

export const getBusyHoursByDay: GetBusyHoursByDay = (appointmentsDates: IEmployeeAppointment[] | undefined, unavailabilityDates: string[], jobTitle: string): (number | (string | void)[])[][] => {
   const days = getBusyDays(appointmentsDates)
   let hours: (string | void)[] = []
   const hoursByDay: (number | (string | void)[])[][] = []
   unavailabilityDates.forEach((date): void => {
      hoursByDay.push([ Number(date), getDailyProgram(getServiceDuration(jobTitle)) ])
   })
   days?.forEach((day: number): void => {
      appointmentsDates?.forEach((appointment: IEmployeeAppointment): void => {
         if (!unavailabilityDates.includes(String(day)))
            dayjs(appointment.date).date() === day ? hours.push(`${appointment.hour}`) : null
      })
      !unavailabilityDates.includes(String(day)) && hoursByDay.push([ day, hours ])
      hours = []
   })
   return hoursByDay
}

export const getServiceDuration: GetServiceDuration = (jobTitle: string): number => {
   switch (jobTitle) {
      case 'Hair Stylist':
         return ServicesDuration.Hair_Care
      case 'Facial Treatments':
         return ServicesDuration.Facial_Treatments
      case 'Hair Removal':
         return ServicesDuration.Hair_Removal
      case 'Body Masseur':
         return ServicesDuration.Body_Massage
      case 'Makeup Services':
         return ServicesDuration.Makeup_Services
      case 'Nails Care':
         return ServicesDuration.Nails_Care
      default:
         return 100

   }
}

