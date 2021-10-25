export interface IUser {
   readonly token?: string
   readonly  firstName?: string
   readonly  userId?: string
}

export interface IUserInfo {
   readonly firstName: string
   readonly lastName: string
   readonly rewardsPoints: number
   readonly  promotionCode: string
   readonly  email: string
}