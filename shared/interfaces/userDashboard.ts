export interface IRewardService {
   readonly title: string
   readonly points: number
}

export interface IReward {
   readonly title: string
   readonly services: IRewardService[]
}

export interface IPromotion {
   readonly title: string
   readonly saleType: string
   readonly amount: number
   readonly description?: string
}

export interface IAppointment {
   readonly subService: string
   readonly employeeName: string
   readonly date: string
   readonly hour: string
}

export interface IEmployee {
   readonly _id: string
   readonly firstName: string
   readonly lastName: string
   readonly jobTitle: string
   readonly field: string
   readonly unavailability?: string[]
   readonly appointments?: IEmployeeAppointment[]
}

export type IEmployeeAppointment =  Pick<IAppointment, 'subService' | 'date' | 'hour'>

export interface ILoginUserArgs {
   readonly email: string
   readonly password: string
}

export interface ISignupArgs {
   readonly firstName: string
   readonly lastName: string
   readonly email: string
   readonly password: string
   readonly repeatPassword: string
}

export interface IResetPasswordArgs {
   readonly token: string | null
   readonly password: string
   readonly repeatPassword: string
}
