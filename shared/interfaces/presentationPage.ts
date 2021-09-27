export interface ILandingInfo {
  _id?: string
  landingPhrase: string
  landingButtonPhrase: string
}

export interface IFeature {
  _id?: string
  image: string
  title: string
  description: string
}

export interface IReview {
  _id?: string
  image: string
  fullName: string
  review: string
}