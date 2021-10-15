import axios, { AxiosResponse } from "axios"

import { Headers, tresStudioAPIRoutes } from "../../utils/constants";


type PostLogin = (email: string, password: string) => Promise<AxiosResponse>
type SignupUser = (firstName: string, lastName: string, email: string, password: string) => Promise<AxiosResponse>

export const postLogin: PostLogin  = async (email: string, password: string): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ email, password })
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(tresStudioAPIRoutes.login, userData, { headers })
   } catch (error: any) {
      return error.response
   }
}

export const signupUser: SignupUser = async (firstName: string, lastName: string, email: string, password: string): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ firstName, lastName, email, password })
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(tresStudioAPIRoutes.signup, userData, { headers })
   } catch (error: any) {
      return error.response
   }
}