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
   subService: string
   employeeName: string
   date: string
   hour: string
}

export interface IEmployee {
   _id: string
   firstName: string
   lastName: string
   jobTitle: string
   field: string
   unavailability?: IUnavailabilityPeriod[]
   appointments?: IEmployeeAppointment[]
}

export type IEmployeeAppointment =  Pick<IAppointment, 'subService' | 'date' | 'hour'>

export interface IUnavailabilityPeriod {
   startDate: string
   endDate: string
}

export interface ILoginUserArgs {
   email: string
   password: string
}

export interface ISignupArgs {
   firstName: string
   lastName: string
   email: string
   password: string
   repeatPassword: string
}
