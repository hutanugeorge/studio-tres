import React, { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { fetchReviews } from '../../actions'
import { RootState } from '../../reducers'
import { IReview } from '../../shared/interfaces/presentationPage'


interface IReviews {
  reviews: IReview[]
}
type GenerateSlides = (reviews: IReviews) => JSX.Element[]

SwiperCore.use([ Navigation, Autoplay, Pagination ])

const ReviewsSection: FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const reviews: IReviews = useSelector((state: RootState) => state.reviews)

  useEffect(() => {
    dispatch(fetchReviews())
  }, [ dispatch ])

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
        {generateSlides(reviews)}
      </Swiper>
    </div>)
}

const generateSlides: GenerateSlides = ({ reviews }: IReviews): JSX.Element[] => {
  if (reviews === undefined) return [ <div key={'1'}>Loading...</div> ]
  return reviews.map((review: IReview, index: number) =>
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
    </SwiperSlide>)
}


export default ReviewsSection