import axios from 'axios'

import { tresStudioAPI } from '../utils/constants'


export const getLandingPhrase = async () => {
   const response = await axios.get(`${tresStudioAPI}landing/landingPhrase`)
   return response.data
}