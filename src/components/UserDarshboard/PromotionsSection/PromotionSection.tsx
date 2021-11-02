import React, { FC, useEffect } from 'react'

import { useHistory } from "react-router-dom"

import { IUseFetchResponse } from "../../../../shared/interfaces/api"
import { tresStudioAPIRoutes } from "../../../../utils/constants"
import useFetch from "../../../customHooks/useFetch"
import PromoCard from "./PromoCard"
import { IPromotion } from "../../../../shared/interfaces/userDashboard"


type RenderCards = (props: IPromotion[]) => JSX.Element[]

const PromotionSection: FC = (): JSX.Element => {
   const history = useHistory()

   const promotions: IUseFetchResponse<{ promotions: IPromotion[] }> = useFetch<{ promotions: IPromotion[] }>(tresStudioAPIRoutes.promotions, true)
   const { data, error, loading } = promotions

   const token = localStorage.getItem('token')

   useEffect((): void => {
      !token && history.push('/')
   }, [])

   if (data)
      return (
         <div className="promotions--wrap">
            <div className="promotions__title">
               <p className="promotions__title-content">
                  Promotions
               </p>
            </div>
            <div className="promotions">
               {
                  data.promotions[0].title === 'Not promotions yet'
                     ? <div className="promotions__empty" key={1}>No promotions yet</div>
                     : renderCards(data.promotions)
               }
            </div>
         </div>)
   else if (error)
      return <div>Error</div>
   else if (loading)
      return <div>Just loading...</div>
   else
      return <div>Something else</div>
}

const renderCards: RenderCards = (promotions: IPromotion[]): JSX.Element[] =>
   promotions.map(({ title, saleType, amount }: IPromotion, index: number) =>
      <PromoCard title={title} saleType={saleType} amount={amount} key={index}/>
   )


export default PromotionSection
