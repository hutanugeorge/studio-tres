export type AxiosRequest<T> = () => Promise<T>
export interface Action<T> {
   type: string
   payload: T
}