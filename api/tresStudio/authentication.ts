import axios, { AxiosResponse } from "axios"
import { ILoginUserArgs, IResetPasswordArgs, ISignupArgs } from "../../shared/interfaces/userDashboard"

import { Headers, tresStudioAPIRoutes } from "../../utils/constants";


type PostLogin = (args: ILoginUserArgs) => Promise<AxiosResponse>
type SignupUser = (args: ISignupArgs) => Promise<AxiosResponse>

export const postLogin: PostLogin = async (args: ILoginUserArgs): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ ...args })
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(tresStudioAPIRoutes.login, userData, { headers })
   } catch (error: any) {
      return error.response
   }
}

export const signupUser: SignupUser = async (args: ISignupArgs): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ ...args })
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(tresStudioAPIRoutes.signup, userData, { headers })
   } catch (error: any) {
      return error.response
   }
}

export const resetPassword = async (args: IResetPasswordArgs): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ ...args })
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(`${tresStudioAPIRoutes.resetPassword}?token=${args.token}`, userData, { headers })
   }catch (error: any) {
      return error.response
   }
}

export const resetPasswordEmail = async (email: string): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ email})
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(tresStudioAPIRoutes.resetPasswordEmail, userData, { headers })
   }catch (error: any) {
      return error.response
   }
}