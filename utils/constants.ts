import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'


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

interface IDefaultValues {
  DEFAULT_LANDING_INFO: ILandingInfo
  DEFAULT_FEATURE: IFeature
  DEFAULT_REVIEW: IReview
}

export const otherPageLinks: Link[] =[
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

export const services = ['Hair Care', 'Facial Treatments', 'Body Massage', 'Makeup' +
' Services', 'Nails Care']

export const tresStudioAPIRoutes: ITresStudioAPIRoutes = {
  root: 'http://localhost:3001',
  landing: 'http://localhost:3001/landing',
  features: 'http://localhost:3001/features',
  reviews: 'http://localhost:3001/reviews'
}

export const actions = {
  FETCH_HERO_SECTION: 'FETCH_HERO_SECTION',
  FETCH_FEATURES: 'FETCH_FEATURE_CARDS',
  FETCH_REVIEWS: 'FETCH_REVIEWS'
}

export const defaultValues: IDefaultValues = {
  DEFAULT_LANDING_INFO: {
    landingPhrase: 'Default',
    landingButtonPhrase: 'Make an appointment'
  },
  DEFAULT_FEATURE: {
    image: '/loading',
    title: 'Loading...',
    description: 'Loading...'
  },
  DEFAULT_REVIEW: {
    image: '/loading',
    fullName: 'Loading...',
    review: 'Loading...'
  }
}

export const weekDays = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
