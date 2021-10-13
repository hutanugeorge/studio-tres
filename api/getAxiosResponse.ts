import axios, { AxiosResponse } from "axios";

import { GetAxiosResponse } from "../shared/interfaces/api";


const getAxiosResponse: GetAxiosResponse = async (route: string): Promise<AxiosResponse> => {
   return await axios.get(route)
}

export default getAxiosResponse