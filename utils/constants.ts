import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import { IUserViewAction } from "../shared/interfaces/userView";
import { setUserViewDiscounts, setUserViewRewards, setUserViewVisits } from "../actions";


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

interface ITresStudioAPIRoutes {
   root: string
   landing: string
   features: string
   reviews: string
}

interface IUpperTab {
   title: string
   action?: IUserViewAction
}

interface IDefaultValues {
   LANDING_INFO: ILandingInfo
   FEATURE: IFeature
   REVIEW: IReview,
   USER_VIEW: string
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
      title: 'Waxing',
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
' Services', 'Nails Care' ]

export const tresStudioAPIRoutes: ITresStudioAPIRoutes = {
   root: 'http://localhost:3001',
   landing: 'http://localhost:3001/landing',
   features: 'http://localhost:3001/features',
   reviews: 'http://localhost:3001/reviews'
}

export const actions = {
   FETCH_HERO_SECTION: 'FETCH_HERO_SECTION',
   FETCH_FEATURES: 'FETCH_FEATURE_CARDS',
   FETCH_REVIEWS: 'FETCH_REVIEWS',
   DISCOUNTS: 'DISCOUNTS',
   REWARDS: 'REWARDS',
   VISITS: 'VISITS'
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
   USER_VIEW: actions.DISCOUNTS
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


export const weekDays = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
