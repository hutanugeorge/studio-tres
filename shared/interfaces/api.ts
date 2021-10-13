import { AxiosResponse } from "axios";


export type GetAxiosResponse = (route: string) => Promise<AxiosResponse>
export type Get<T> = () => Promise<T>
export interface Action<T> {
   type: string
   payload: T
}