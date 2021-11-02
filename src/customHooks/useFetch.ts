import { useCallback, useEffect, useState } from 'react'

import axios, { AxiosResponse } from 'axios'


interface IUseFetchReturn<T> {
   data: T
   error: any
   loading: boolean
}

const useFetch = <T>(URL: string, auth: boolean = false): IUseFetchReturn<T | null> => {
   const [ loading, setLoading ] = useState<boolean>(true)
   const [ error, setError ] = useState<any>(null)
   const [ data, setData ] = useState<T | null>(null)

   const fetchAPI = useCallback(async () => {
      try {
         const token = localStorage.getItem('token')
         const headers = { authorization: `Bearer ${token}` }
         const response: AxiosResponse = auth ? await axios.get(URL, { headers }) : await axios.get(URL)
         response.status === 200 && setData(response.data)
         response.status !== 200 && setError(response.data)
      } catch (err: any) {
         setError(err)
      }
      setLoading(false)
   }, [ URL, auth ])

   useEffect(() => {
      fetchAPI()
   }, [ fetchAPI ])

   return { data, error, loading }
}

export default useFetch