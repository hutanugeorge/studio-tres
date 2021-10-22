import dayjs from "dayjs"
import { IEmployeeAppointment } from "../../../shared/interfaces/userDashboard"
import { ServicesDuration } from "../../../utils/constants"


export const getDailyProgram = (duration: number, openHour: number = 9, openMinute: number = 0, closingHour: number = 20, closingMinute: number = 0) => {
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

export const getEmployeeDayAppointments = (appointments: IEmployeeAppointment[] | undefined) => {
   return appointments?.filter((appointment: IEmployeeAppointment) =>
      dayjs(new Date(appointment.date)).month() === dayjs().month() ? dayjs(new Date(appointment.date)).date() : null)
}

export const getBusyDays = (appointmentsDates: IEmployeeAppointment[] | undefined) => {
   const busyDays: number[] = []
   appointmentsDates?.map((appointment: IEmployeeAppointment) => {
         if(!busyDays.includes(dayjs(appointment.date).date()))
            busyDays.push(dayjs(appointment.date).date())
      }
   )
   return busyDays
}

export const getAWeekDatesByNow = (): number[] => {
   const aWeekDates = []
   let day = 0
   while (day !== 7) {
      aWeekDates.push(dayjs().date() + day)
      day++
   }
   return aWeekDates
}

export const getBusyHoursByDay = (appointmentsDates: IEmployeeAppointment[] | undefined, unavailabilityDates: string[], jobTitle: string) => {
   const days = getBusyDays(appointmentsDates)
   let hours: (string | void)[] = []
   const hoursByDay: (number | (string | void)[])[][] = []
   unavailabilityDates.forEach((date) => {
      hoursByDay.push([ Number(date), getDailyProgram(getServiceDuration(jobTitle)) ])
   })
   days?.forEach((day: number) => {
      appointmentsDates?.forEach((appointment: IEmployeeAppointment) => {
         if (!unavailabilityDates.includes(String(day)))
            dayjs(appointment.date).date() === day ? hours.push(`${appointment.hour}`) : null
      })
      if (!unavailabilityDates.includes(String(day)))
         hoursByDay.push([ day, hours ])
      hours = []
   })
   return hoursByDay
}

export const getServiceDuration = (jobTitle: string): number => {
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

