import dayjs from "dayjs"
import { IUser, IUserInfo } from "../shared/interfaces/user"
import { setUserView } from "../src/actions";
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import { IUserViewAction } from "../shared/interfaces/userView";
import { IAppointment, IReward, IPromotion, IEmployee } from "../shared/interfaces/userDashboard";
import { rootReducer } from "../src/reducers"


export interface Link {
   name?: string,
   link: string,
   image?: string,
   position?: string
}

export interface Price {
   title: String,
   subServices: {
      title: String,
      price: Number
   }[]
}

export interface SubService {
   title: String,
   price: Number
}

interface IUpperTab {
   title: string
   action?: IUserViewAction
}

interface IDefaultValues {
   LANDING_INFO: ILandingInfo
   FEATURE: IFeature
   REVIEW: IReview
   USER_VIEW: string
   PROMOTION: IPromotion
   REWARD: IReward
   APPOINTMENT: IAppointment
   USER: IUser
   USER_DATA: IUserInfo
   EMPLOYEE: IEmployee,

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
   Hair_Care : ["Subservice", 'Short hrhghghaircut', 'Long haircut', 'Medium haircut'],
   Facial_Treatments : ["Subservice",'Short haircut', 'Long haircugert', 'Medium haircut'],
   Body_Massage : ["Subservice", 'Short haircut', 'Long haircutgerg', 'Medium hgreaircut'],
   Makeup_Services : ["Subservice", 'Short gregerhaircut', 'Long hgeraircut', 'Medium haircut'],
   Nails_Care : ["Subservice", 'Short haircut', 'haircut', 'Medium haircut'],
   Hair_Removal : ["Subservice", 'Short hagfdgircut', 'Long haircut', 'Medium haircut']
}

export enum tresStudioAPIRoutes {
   root = 'http://localhost:3001/',
   landing = 'http://localhost:3001/landing',
   features = 'http://localhost:3001/features',
   reviews = 'http://localhost:3001/reviews',
   promotions = 'http://localhost:3001/promotions',
   rewards = 'http://localhost:3001/rewards',
   appointments = 'http://localhost:3001/appointments',
   login = 'http://localhost:3001/login',
   signup = 'http://localhost:3001/signup',
   user = 'http://localhost:3001/user',
   getEmployees = 'http://localhost:3001/employees'
}

export enum Actions {
   FETCH_HERO_SECTION = 'FETCH_HERO_SECTION',
   FETCH_FEATURES = 'FETCH_FEATURE_CARDS',
   FETCH_REVIEWS = 'FETCH_REVIEWS',
   FETCH_PROMOTIONS = 'FETCH_PROMOTIONS',
   FETCH_REWARDS = 'FETCH_REWARDS',
   DISCOUNTS = 'DISCOUNTS',
   REWARDS = 'REWARDS',
   VISITS = 'VISITS',
   LOGIN = 'LOGIN',
   LOGIN_ERROR = 'LOGIN_ERROR',
   LOGOUT =  'LOGOUT',
   TOGGLE_MENU = 'TOGGLE_MENU',
   APPOINTMENTS = 'APPOINTMENTS',
   USER_INFO = 'USER_INFO',
   FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
}

export const Headers = {
   contentTypeJsonHeader: { 'Content-Type': 'application/json' },
}

export const defaultValues: IDefaultValues = {
   LANDING_INFO: {
      landingPhrase: 'Default',
      landingButtonPhrase: 'Make an appointment'
   },
   FEATURE: {
      image: '/loading',
      title: 'Loading...',
      description: 'Loading...'
   },
   REVIEW: {
      image: 'loading',
      fullName: 'Loading...',
      review: 'Loading...'
   },
   USER_VIEW: Actions.DISCOUNTS,
   PROMOTION: {
      title: 'Not promotions yet',
      saleType: 'percentage',
      amount: 0,
      description: ''
   },
   REWARD: {
      title: 'No rewards yet',
      services: [
         {
            title: 'No rewards',
            points: 0
         }
      ]
   },
   APPOINTMENT: {
      serviceTitle: 'No appointment',
      employeeName: 'No employee',
      date: 'No date',
      status: 'No status'
   },
   USER: {
      firstName: '',
      token: '',
      userId: ''
   },
   USER_DATA: {
      firstName: '',
      rewardsPoints: 0,
      promotionCode: ''
   },
   EMPLOYEE: {
      _id: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      field: ''
   }
}

export const userUpperTabs: IUpperTab[] = [
   {
      title: 'Discounts',
      action: setUserView(Actions.DISCOUNTS),
   },
   {
      title: 'Rewards',
      action: setUserView(Actions.REWARDS)
   },
   {
      title: 'Last visits',
      action: setUserView(Actions.VISITS)
   }
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
