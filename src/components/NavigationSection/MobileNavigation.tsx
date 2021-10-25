import React, { Dispatch, FC, SetStateAction, useState } from 'react'

import { Link } from 'react-router-dom'

import { navigationLinks, otherPageLinks } from '../../../utils/constants'
import { Link as ScrollLink } from 'react-scroll/modules'


type GenerateNavigationLinks = (setShowModal: Dispatch<SetStateAction<string>>) => JSX.Element[]


const MobileNavigation: FC = (): JSX.Element => {
  const [ navigation, setNavigation ] = useState<string>('')

  const onClickNavigationHandler = (): void => {
    navigation === '' && setNavigation('mobile-navigation-open')
    navigation === 'mobile-navigation-open' && setNavigation('')
  }

  return (
    <>
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
            {generateNavigationLinks(setNavigation)}
          </div>
          <div className="mobile-navigation__bottom">
            <Link
               to="login"
              onClick={(): void => {
                setNavigation('')
              }}

              className="mobile-navigation__login-button ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


const generateNavigationLinks: GenerateNavigationLinks = (setNavigation): JSX.Element[] =>
  window.location.href === 'http://localhost:3000/' ?

    navigationLinks.map((link, index): JSX.Element =>
      <div key={index}
           className={`mobile-navigation__menu mobile-navigation__menu-${++index}`}>
        {link.link[ 0 ] === '/' ?
          <Link
            className="mobile-navigation__menu-link"
            to={link.link}>
            {link.name}
          </Link>
          :
          <ScrollLink
            className="mobile-navigation__menu-link"
            to={link.link}
            smooth={true}
            onClick={() => setNavigation('')}
          >
            {link.name}
          </ScrollLink>
        }
      </div>)

    :

    otherPageLinks.map((link, index): JSX.Element =>
      <div key={index}
           className={`mobile-navigation__menu mobile-navigation__menu-${++index}`}>
        <Link
          className="mobile-navigation__menu-link"
          to={link.link}>
          {link.name}
        </Link>
      </div>)

export default MobileNavigation