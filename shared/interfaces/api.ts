export interface Action<T> {
   type: string
   payload: T
}

export interface IUseFetchResponse<T> {
   data: T | null
   error: any
   loading: boolean
}

