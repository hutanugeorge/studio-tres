import { setUserViewDiscounts, setUserViewRewards, setUserViewVisits } from "../src/actions";
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import { IUserViewAction } from "../shared/interfaces/userView";
import { IAppointment, IReward, IPromotion } from "../shared/interfaces/userDashboard";


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
}

export const otherPageLinks: Link[] = [
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

export const services = [ 'Hair Care', 'Facial Treatments', 'Body Massage', 'Makeup' +
' Services', 'Nails Care', 'Hair Removal' ]

export enum tresStudioAPIRoutes {
   root = 'http://localhost:3001',
   landing = 'http://localhost:3001/landing',
   features = 'http://localhost:3001/features',
   reviews = 'http://localhost:3001/reviews',
   promotions = 'http://localhost:3001/promotions',
   rewards = 'http://localhost:3001/rewards',
   appointments = 'http://localhost:3001/appointments',
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
   TOGGLE_MENU = 'TOGGLE_MENU',
   APPOINTMENTS = 'APPOINTMENTS'
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
      image: '/loading',
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
   }
}

export const userUpperTabs: IUpperTab[] = [
   {
      title: 'Discounts',
      action: setUserViewDiscounts(),
   },
   {
      title: 'Rewards',
      action: setUserViewRewards()
   },
   {
      title: 'Last visits',
      action: setUserViewVisits()
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

export enum IconColor {
   DEFAULT = '#f4f4f4',
   ACTIVE = '#52b69a'
}
