import axios, { AxiosResponse } from 'axios'

import {
  DEFAULT_FEATURE_CARD,
  DEFAULT_LANDING_INFO,
  tresStudioAPI
} from '../utils/constants'
import { FeatureCard, LandingInfo } from '../shared/interfaces/landingInfo'


type getLandingInfo = () => Promise<LandingInfo>
type getFeatureCards = () => Promise<FeatureCard[]>


export const getLandingInfo: getLandingInfo = async (): Promise<LandingInfo> => {
  const { status, data }: AxiosResponse = await axios.get(`${tresStudioAPI}/landing`)
  return status === 200 ? data.landingInfo : DEFAULT_LANDING_INFO
}

export const getFeatureCards: getFeatureCards = async (): Promise<FeatureCard[]> => {
  const { status, data }: AxiosResponse = await axios.get(`${tresStudioAPI}/features`)
  return status === 200 ? data.featureCards : [ DEFAULT_FEATURE_CARD ]
}