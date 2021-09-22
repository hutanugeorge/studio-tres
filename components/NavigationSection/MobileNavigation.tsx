import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { JSXArrayElements } from '../../shared/types'
import { lowerLinks } from '../../utils/constants'
import '../stylesheets/components/_mobile-navigation.sass'
import '../stylesheets/components/_buttons.sass'



const MobileNavigation: FC = (): JSX.Element => {
  const [ navigation, setNavigation ] = useState('')
  const onClickNavigationHandler = (): void => {
    navigation === '' && setNavigation('mobile-navigation-open')
    navigation === 'mobile-navigation-open' && setNavigation('')
  }

  return (
    <div className="wrap-navigation">
      <div className="btn-navigation"
           onClick={onClickNavigationHandler}>
        <div className="btn-navigation--inside"/>
      </div>
      <div className={`mobile-navigation ${navigation}`}>
        <div className="mobile-navigation__header">
          <Link className="mobile-navigation__header-link"
                to="/">
            Tres Studio
          </Link>
        </div>
        <div className="mobile-navigation__links">
          {navigationLower()}
        </div>
      </div>
    </div>
  )
}

const navigationLower: JSXArrayElements = (): JSX.Element[] => lowerLinks.map((link, index) => (
  <div key={index}
       className={`mobile-navigation__menu mobile-navigation__menu-${++index}`}>
    <Link className={`mobile-navigation__menu-link`}
          to={`${link.link}`}>
      {link.name}
    </Link>
  </div>
))

export default MobileNavigation