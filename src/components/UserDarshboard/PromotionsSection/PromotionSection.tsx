import React, { FC, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import PromoCard from "./PromoCard"
import { RootState } from "../../../reducers"
import { fetchPromotions } from "../../../actions"
import { IPromotion } from "../../../../shared/interfaces/userDashboard"


type RenderCards = (props: IPromotion[]) => JSX.Element[]

const PromotionSection: FC = (): JSX.Element => {
   const history = useHistory()
   const dispatch = useDispatch()

   const promotions: IPromotion[] = useSelector((state: RootState) => state.promotions)

   const token = localStorage.getItem('token')

   useEffect(() => {
      !token ? history.push('/') : dispatch(fetchPromotions())
   }, [])

   return (
      <div className="promotions--wrap">
         <div className="promotions__title">
            <p className="promotions__title-content">
               Promotions
            </p>
         </div>
         <div className="promotions">
            {
               promotions[0].title === 'Not promotions yet'
                  ? <div className="promotions__empty" key={1}>No promotions yet</div>
                  : renderCards(promotions)
            }
         </div>
      </div>)
}

const renderCards: RenderCards = (promotions: IPromotion[]): JSX.Element[] =>
   promotions.map(({ title, saleType, amount }: IPromotion, index: number) =>
      <PromoCard title={title} saleType={saleType} amount={amount} key={index}/>
   )


export default PromotionSection
