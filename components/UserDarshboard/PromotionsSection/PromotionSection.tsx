import * as React from 'react'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../reducers";
import { IPromotion } from "../../../shared/interfaces/presentationPage";
import { fetchPromotions } from "../../../actions";
import PromoCard from "./PromoCard";


interface IPromotions {
   promotions: IPromotion[]
}
type RenderCards = (props: IPromotions) => JSX.Element[]

const PromotionSection: FC = (): JSX.Element => {
   const dispatch = useDispatch()
   const promotions = useSelector((state: RootState) => state.promotions)

   useEffect(() => {
      dispatch(fetchPromotions())
   }, [ dispatch ])

   return (
      <div className="promotions">
         {renderCards(promotions)}
      </div>)
}

const renderCards: RenderCards = ({ promotions }: IPromotions): JSX.Element[] => {
   if (promotions === undefined) return [ <div key={'1'}>Loading...</div> ]
   return promotions.map(({ title, saleType, amount }: IPromotion, index: number) =>
         <PromoCard title={title} saleType={saleType} amount={amount} key={index}/>
      )
}

export default PromotionSection