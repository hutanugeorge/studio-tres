import axios from "axios"
import { AxiosRequest } from "../../shared/interfaces/api"
import { IUserInfo } from "../../shared/interfaces/user"
import { defaultValues, tresStudioAPIRoutes } from "../../utils/constants"


export const getUserInfo: AxiosRequest<IUserInfo> = async (): Promise<IUserInfo> => {
   const token = localStorage.getItem('token')
   const headers = { authorization: `Bearer ${token}` }
   const { status, data } = await axios.get(tresStudioAPIRoutes.user, { headers })
   return status === 200 ? data.userInfo[0] : defaultValues.USER_DATA
}