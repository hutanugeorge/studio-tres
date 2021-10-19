export interface IRewardService {
   title: string
   points: number
}

export interface IReward {
   title: string
   services: IRewardService[]
}

export interface IPromotion {
   title: string
   saleType: string
   amount: number
   description?: string
}

export interface IAppointment {
   serviceTitle: string
   employeeName: string
   date: string
   status: string
   hour?: string
}

export interface IEmployee {
   firstName: string
   lastName: string
   jobTitle: string
   field: string
   unavailability?: IUnavailabilityPeriod[]
   appointments?: IEmployeeAppointment[]
}

export type IEmployeeAppointment =  Pick<IAppointment, 'serviceTitle' | 'date' | 'hour'>

interface IUnavailabilityPeriod {
   startDate: string
   endDate: string
}
