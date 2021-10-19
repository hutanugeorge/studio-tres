import dayjs from "dayjs"
import { IEmployeeAppointment } from "../../../shared/interfaces/userDashboard"
import { ServicesDuration } from "../../../utils/constants"


export const getDailyProgram = (duration: number, openHour: number = 9, openMinute: number = 0, closingHour: number = 20, closingMinute: number = 0) => {
   const today = dayjs().format('MM/DD/YYYY')
   const closingTime = dayjs(`${today} ${closingHour}:${closingMinute}`)
   let date = dayjs(`${today} ${openHour}:${openMinute}`)
   const hours: string[] = []
   while (closingTime.diff(date, 'minute') > duration) {
      hours.push(`${dayjs(date).hour()}:${dayjs(date).minute()}`)
      date = dayjs(date).add(duration, 'minute')
   }
   return hours
}

export const getEmployeeDayAppointments = (appointments: IEmployeeAppointment[] | undefined) => {
   return appointments?.filter((appointment: IEmployeeAppointment) =>
      dayjs(new Date(appointment.date)).month() === dayjs().month() ? dayjs(new Date(appointment.date)).date() : null)
}

export const getBusyDays = (appointmentsDates: IEmployeeAppointment[] | undefined) =>
   appointmentsDates?.map((appointment: IEmployeeAppointment) =>
      dayjs(appointment.date).date())

export const getAWeekDatesByNow = (): number[] => {
   const aWeekDates = []
   let day = 0
   while (day !== 7) {
      aWeekDates.push(dayjs().date() + day)
      day++
   }
   return aWeekDates
}

export const getBusyHoursByDay = (appointmentsDates: IEmployeeAppointment[] | undefined) => {
   const days = getBusyDays(appointmentsDates)
   let hours: (string | void)[] = []
   const hoursByDay: (number | (string | void)[])[][] = []
   days?.forEach((day: number) => {
      appointmentsDates?.forEach((appointment: IEmployeeAppointment) =>
         (dayjs(appointment.date).date() === day ? hours.push(`${appointment.hour}`) : null))
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

