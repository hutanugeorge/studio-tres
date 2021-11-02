import axios, { AxiosResponse } from "axios"

import { ILoginUserArgs, IResetPasswordArgs, ISignupArgs } from "../../shared/interfaces/userDashboard"
import { PostRequest } from "../../shared/types"
import { Headers, tresStudioAPIRoutes } from "../../utils/constants"


export const postLogin: PostRequest<ILoginUserArgs> = async (args: ILoginUserArgs): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ ...args })
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(tresStudioAPIRoutes.login, userData, { headers })
   } catch (error: any) {
      return error.response
   }
}

export const signupUser: PostRequest<ISignupArgs> = async (args: ISignupArgs): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ ...args })
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(tresStudioAPIRoutes.signup, userData, { headers })
   } catch (error: any) {
      return error.response
   }
}

export const resetPassword: PostRequest<IResetPasswordArgs> = async (args: IResetPasswordArgs): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ ...args })
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(`${tresStudioAPIRoutes.resetPassword}?token=${args.token}`, userData, { headers })
   }catch (error: any) {
      return error.response
   }
}

export const resetPasswordEmail: PostRequest<string> = async (email: string): Promise<AxiosResponse> => {
   try {
      const userData = JSON.stringify({ email})
      const headers = Headers.contentTypeJsonHeader
      return await axios.post(tresStudioAPIRoutes.resetPasswordEmail, userData, { headers })
   }catch (error: any) {
      return error.response
   }
}