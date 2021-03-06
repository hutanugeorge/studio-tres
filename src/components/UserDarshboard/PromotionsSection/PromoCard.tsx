import React from 'react'

import { IPromotion } from "../../../../shared/interfaces/userDashboard"
import { promoCardsColors } from "../../../../utils/constants"


type PromoCard = (props: IPromotion) => JSX.Element

const PromoCard: PromoCard = ({ title, saleType, amount }: IPromotion): JSX.Element => {
   const saleAmount = saleType === 'percentage' ? `${amount}% OFF` : `${amount} ROM`
   const cardColor = title as keyof typeof promoCardsColors
   const { [cardColor]: color } = promoCardsColors

   return <>
      <div className="promo-card--wrapper promo-card">
         <div className="promo-card">
            <div className="promo-card__information">
               <div className="promo-card__information--expiration">
                  <p className="promo-card__information--expiration--text">Up to</p>
                  <p className="promo-card__information--expiration--date">23 10 2021</p>
               </div>
               <a className={`promo-card__information--button promo-card__information--button${color}`}>Take it</a>
            </div>
            <div className={`promo-card__image promo-card__image${color}`}>
               <p className="promo-card__image--title">{title}&nbsp; &nbsp;<span>{saleAmount}</span></p>
            </div>
         </div>
      </div>
      <div className="promo-card__touch--wrapper">
         <div className={`promo-card__touch  promo-card__touch${color}`}>
            <div className="promo-card__touch-information">
               <div className={`promo-card__touch-image promo-card__touch-image${color}`}>
                  <p className="promo-card__touch-image--title">{title}&nbsp; &nbsp;<span>{saleAmount}</span></p>
               </div>
               <div className="promo-card__touch-information--expiration">
                  <p className="promo-card__touch-information--expiration--text">Up to</p>
                  <p className="promo-card__touch-information--expiration--date">23 10 2021</p>
               </div>
               <a className={`promo-card__touch-information--button promo-card__touch-information--button${color}`}>
                  Take it
               </a>
            </div>
         </div>
      </div>
   </>
}


export default PromoCard
