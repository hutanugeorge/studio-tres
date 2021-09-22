interface Link {
   name?: String,
   link: String,
   image?: String,
   position?: String
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

export const lowerLinks: Link[] = [
   {
      name: 'Services',
      link: '/'
   },
   {
      name: 'Pricing',
      link: '/pricing'
   },
   {
      name: 'Program',
      link: '/'
   },
   {
      name: 'Team',
      link: '/'
   },
   {
      name: 'Directions',
      link: '/'
   },
   {
      name: 'Contact Us',
      link: '/'
   }
]

export const upperLinks: Link[] = [
   {
      name: 'Visit us',
      image: 'path',
      position: 'left',
      link: '/'
   },
   {
      name: 'Tres Studio',
      image: 'path',
      position: 'middle',
      link: '/'
   },
   {
      name: 'Login',
      position: 'right',
      link: '/'
   }
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

export const tresStudioAPI: string = 'http://localhost:3001'

export const actions = {
  FETCH_HERO_SECTION: 'FETCH_HERO_SECTION',
  FETCH_FEATURE_CARDS: 'FETCH_FEATURE_CARDS'
}

export const DEFAULT_LANDING_INFO = {
  landingPhrase: 'Default',
  landingButtonPhrase: 'Make an appointment'
}

export const DEFAULT_FEATURE_CARD = {
  image: '/loading',
  title: 'Loading...',
  description: 'Loading...'
}