import * as  React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { JSXElement } from '../../shared/types'
import ReviewCard from '../Cards/ReviewCard'
import '../stylesheets/components/_reviews-section.sass'

SwiperCore.use([Navigation, Autoplay])

const ReviewsSection = (): JSX.Element =>
   <Swiper
      className="swiper"
      navigation={{
         nextEl: null,
         prevEl: null
      }}
      autoplay={{
         pauseOnMouseEnter: true,
         delay: 5000
      }}
      grabCursor={true}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
   >
      {generateSlides()}
   </Swiper>

const generateSlides:JSXElement = (): JSX.Element =>
   <>
      <SwiperSlide className="swipeSlide"><ReviewCard/></SwiperSlide>
      <SwiperSlide className="swipeSlide"><ReviewCard/></SwiperSlide>
      <SwiperSlide className="swipeSlide"><ReviewCard/></SwiperSlide>
      <SwiperSlide className="swipeSlide"><ReviewCard/></SwiperSlide>
      <SwiperSlide className="swipeSlide"><ReviewCard/></SwiperSlide>
   </>


export default ReviewsSection