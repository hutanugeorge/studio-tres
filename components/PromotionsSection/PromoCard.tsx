import React, { FC } from 'react'


const PromoCard: FC = (): JSX.Element =>
   <>
      <div className="promo-card--wrapper">
         <div className="promo-card">
            <div className="promo-card__image">
               <img className="promo-card__image--content" src="/images/hair-care-promo.jpg" alt="promo hair"/>
            </div>
            <div className="promo-card__description">
               <p className="promo-card__description--title">70% OFF</p>
               <div className="promo-card__description--text">
                  <p className="promo-card__description--text--content">Hair care promotion</p>
               </div>
               <div className="promo-card__description--button">
                  <a className="promo-card__description--button--content">Take offer</a>
               </div>
            </div>
         </div>
      </div>
   </>


export default PromoCard