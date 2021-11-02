import React, { FC, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { IUseFetchResponse } from "../../../shared/interfaces/api"
import { IReview } from '../../../shared/interfaces/presentationPage'
import { tresStudioAPIRoutes } from "../../../utils/constants"
import useFetch from "../../customHooks/useFetch"


type RenderSlides = (reviews: IReview[]) => JSX.Element[]
SwiperCore.use([ Navigation, Autoplay, Pagination ])

const ReviewsSection: FC = (): JSX.Element => {
   const {
      data,
      error,
      loading
   }: IUseFetchResponse<{ reviews: IReview[] }> = useFetch<{ reviews: IReview[] }>(tresStudioAPIRoutes.reviews)

   useEffect((): void => {
   }, [ data ])

   if (data)
      return (
         <div className="swiper-wrap">
            <Swiper
               className="swiper"
               direction={'vertical'}
               pagination={{ 'clickable': true }}
               autoplay={{ delay: 5000 }}
               grabCursor={true}
               spaceBetween={50}
               slidesPerView={1}
               loop={true}>
               {renderSlides(data.reviews)}
            </Swiper>
         </div>)
   else if (error)
      return <div>Error</div>
   else if (loading)
      return <div>Just loading...</div>
   else
      return <div>Something else</div>
}

const renderSlides: RenderSlides = (reviews: IReview[]): JSX.Element[] =>
   reviews.length === 0
      ? [ <div key={'1'}>Loading...</div> ]
      : (reviews.map((review: IReview, index: number) =>
         <SwiperSlide key={index} className="swipeSlide">
            <div className="review-card">
               <div className="review-card__person--image-wrap">
                  <img src={`/images/${review.image}.jpg`} className="review-card__person--image"
                       alt="avatar"/>
               </div>
               <div className="review-card__person">
                  <div className="review-card__person--name">
                     {review.fullName}
                  </div>
                  <div className="review-card__person--review">
                     {review.review}
                  </div>
               </div>
            </div>
         </SwiperSlide>))

export default ReviewsSection