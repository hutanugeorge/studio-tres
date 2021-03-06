import { IAdminEmployee } from "../shared/interfaces/adminDashboard"
import { setUserView } from "../src/actions"
import { IFormError } from "../shared/interfaces/foms"
import { IUser, IUserInfo } from "../shared/interfaces/user"
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import { IUserViewAction } from "../shared/interfaces/userView"
import { IAppointment, IReward, IPromotion, IEmployee } from "../shared/interfaces/userDashboard";


export interface Link {
   readonly name?: string,
   readonly link: string,
   readonly image?: string,
   readonly position?: string
}

export interface Price {
   readonly title: String,
   readonly subServices: {
      readonly title: String,
      readonly price: Number
   }[]
}

export interface SubService {
   readonly  title: String,
   readonly  price: Number
}

export interface IUpperTab {
   readonly title: string
   readonly action?: IUserViewAction
}

interface IDefaultValues {
   readonly USER_VIEW: string
   readonly USER: IUser
   readonly EMPLOYEE: IEmployee

}

export enum Actions {
   DISCOUNTS = 'DISCOUNTS',
   REWARDS = 'REWARDS',
   VISITS = 'VISITS',
   EMPLOYEES = 'EMPLOYEES',
   LOGIN = 'LOGIN',
   LOGIN_ERROR = 'LOGIN_ERROR',
   LOGOUT = 'LOGOUT',
   TOGGLE_MENU = 'TOGGLE_MENU',
   STATISTICS = 'STATISTICS',
}

export const defaultValues: IDefaultValues = {
   USER_VIEW: Actions.DISCOUNTS,
   USER: {
      firstName: '',
      token: '',
      userId: ''
   },
   EMPLOYEE: {
      _id: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      field: ''
   },
}

export const otherPageLinks: Link[] = [
   {
      name: 'Tres Studio',
      link: '/'
   },
   {
      name: 'Home',
      link: '/'
   },
   {
      name: 'Pricing',
      link: '/pricing'
   },
   {
      name: 'Program',
      link: '/program'
   },
]

export const navigationLinks: Link[] = [
   {
      name: 'Tres Studio',
      link: '/'
   },
   {
      name: 'Visit Us',
      link: 'directions'
   },
   {
      name: 'Services',
      link: 'features'
   },
   {
      name: 'Pricing',
      link: '/pricing'
   },
   {
      name: 'Program',
      link: '/program'
   },
   {
      name: 'Team',
      link: 'team'
   },
   {
      name: 'Contact Us',
      link: 'footer'
   },
]

export const prices: Price[] = [
   {
      title: 'Hair Care',
      subServices: [
         {
            title: 'Short haircut',
            price: 50
         },
         {
            title: 'Long haircut',
            price: 100
         },
         {
            title: 'Long haircut',
            price: 100
         },
         {
            title: 'Long haircut',
            price: 100
         },
         {
            title: 'Long haircut',
            price: 100
         },
         {
            title: 'Medium haircut',
            price: 75
         }
      ]
   },
   {
      title: 'Facial Treatments',
      subServices: [
         {
            title: 'Short waxing',
            price: 150
         },
         {
            title: 'Long waxing',
            price: 200
         },
         {
            title: 'Long haircut',
            price: 100
         },
         {
            title: 'Medium waxing',
            price: 175
         }
      ]
   },
   {
      title: 'Body Massage',
      subServices: [
         {
            title: 'Long waxing',
            price: 200
         },
         {
            title: 'Medium waxing',
            price: 175
         }
      ]
   },
   {
      title: 'Makeup Services',
      subServices: [
         {
            title: 'Short waxing',
            price: 150
         },
         {
            title: 'Long waxing',
            price: 200
         },
         {
            title: 'Medium waxing',
            price: 175
         }
      ]
   },
   {
      title: 'Nails Care',
      subServices: [
         {
            title: 'Short waxing',
            price: 150
         },
         {
            title: 'Long waxing',
            price: 200
         },
         {
            title: 'Medium waxing',
            price: 175
         }
      ]
   },
   {
      title: 'Hair Removal',
      subServices: [
         {
            title: 'Short waxing',
            price: 150
         },
         {
            title: 'Long waxing',
            price: 200
         },
         {
            title: 'Medium waxing',
            price: 175
         }
      ]
   }

]

export const services = [ "Service", "Hair_Care", 'Facial_Treatments', 'Body_Massage', 'Makeup_Services', 'Nails_Care', 'Hair_Removal' ]

export const subServices = {
   Hair_Care: [ "Sub Service", 'Short haircut', 'Long haircut', 'Medium haircut' ],
   Facial_Treatments: [ "Sub Service", 'Short haircut', 'Long haircut', 'Medium haircut' ],
   Body_Massage: [ "Sub Service", 'Short haircut', 'Long haircut', 'Medium haircut' ],
   Makeup_Services: [ "Sub Service", 'Short haircut', 'Long haircut', 'Medium haircut' ],
   Nails_Care: [ "Sub Service", 'Short haircut', 'haircut', 'Medium haircut' ],
   Hair_Removal: [ "Sub Service", 'Short haircut', 'Long haircut', 'Medium haircut' ]
}

export enum tresStudioAPIRoutes {
   landing = 'http://localhost:3001/landing',
   features = 'http://localhost:3001/features',
   reviews = 'http://localhost:3001/reviews',
   promotions = 'http://localhost:3001/promotions',
   rewards = 'http://localhost:3001/rewards',
   appointments = 'http://localhost:3001/appointments',
   login = 'http://localhost:3001/login',
   signup = 'http://localhost:3001/signup',
   user = 'http://localhost:3001/user',
   getEmployees = 'http://localhost:3001/employees',
   resetPassword = 'http://localhost:3001/resetPassword',
   resetPasswordEmail = 'http://localhost:3001/resetPasswordEmail',
}

export const Headers = {
   contentTypeJsonHeader: { 'Content-Type': 'application/json' },
}

export const customerUpperTabs: IUpperTab[] = [
   {
      title: 'Discounts',
      action: setUserView(Actions.DISCOUNTS),
   },
   {
      title: 'Rewards',
      action: setUserView(Actions.REWARDS)
   },
   {
      title: 'Appointments',
      action: setUserView(Actions.VISITS)
   }
]

export const employeeUpperTabs: IUpperTab[] = [
   {
      title: 'Appointments',
      action: setUserView(Actions.VISITS)
   }
]

export const adminUpperTabs: IUpperTab[] = [
   {
      title: 'Employees',
      action: setUserView(Actions.EMPLOYEES),
   },
   {
      title: 'Statistics',
      action: setUserView(Actions.STATISTICS),
   },
]

export enum promoCardsColors {
   'Hair Care' = '--color-red',
   'Hair Removal' = '--color-green',
   'Nails Care' = '--color-yellow',
   'Makeup Services' = '--color-pink',
   'Facial Treatments' = '--color-teal',
   'Body Massage' = '--color-light-purple',
}

export const weekDays = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]

export const weekDaysShort = [ 'SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRY', 'SAT' ]

export enum ServicesDuration {
   Hair_Care = 40,
   Facial_Treatments = 30,
   Hair_Removal = 90,
   Nails_Care = 120,
   Body_Massage = 60,
   Makeup_Services = 90
}

export enum IconColor {
   DEFAULT = '#f4f4f4',
   ACTIVE = '#52b69a'
}

export const logOutTime = 1000 * 60 * 60 /* an hour */
