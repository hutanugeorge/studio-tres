import * as React from 'react'
import { FC, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"

import PromoCard from "./PromoCard"
import { RootState } from "../../../reducers"
import { IPromotion } from "../../../../shared/interfaces/userDashboard"
import { fetchPromotions } from "../../../actions"


type RenderCards = (props: IPromotion[]) => JSX.Element[]

const PromotionSection: FC = (): JSX.Element => {
   const dispatch = useDispatch()
   const promotions: IPromotion[] = useSelector((state: RootState) => state.promotions)
   useEffect(() => {
      dispatch(fetchPromotions())
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
