import React, { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../reducers'
import { fetchLanding } from '../../actions'


const HeroSection: FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const landingInfo = useSelector((state: RootState) => state.landingInfo)

  useEffect(() => {
    dispatch(fetchLanding())
  }, [ dispatch ])

  return (
    <section className="hero-section row">
      <div className="hero-section__image-container"/>
      <div className="hero-section__text-container">
        <h1 className="hero-section__title"> {landingInfo.landingPhrase} </h1>
        <a href="#" className="primary-btn hero-section__button">
          {landingInfo.landingButtonPhrase}
        </a>
      </div>
    </section>
  )
}

export default HeroSection