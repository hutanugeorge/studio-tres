import React, { FC, useState } from 'react'

import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'

import { navigationLinks, otherPageLinks } from '../../utils/constants'
import { JSXArrayElements } from '../../shared/types'
import LoginModal from '../LoginModal/LoginModal'


const DesktopNavigation: FC = (): JSX.Element => {

  const [showModal, setShowModal] = useState(false)

  return(
    <>
      <LoginModal showModal={showModal} toggleModal={() => {
        setShowModal(prev => !prev)
      }}/>
      <div className="desktop-navigation">
        <div className="desktop-navigation__lower">
          <div className="desktop-navigation__lower-links">
            {generateNavigationLinks()}
          </div>
          <div className="desktop-navigation__lower-login">
            <a
              onClick={() => setShowModal(prev => !prev)}
              className="desktop-navigation__lower-link desktop-navigation__login">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  )
}


const generateNavigationLinks: JSXArrayElements = (): JSX.Element[] =>

  window.location.href === 'http://localhost:3000/' ?

    navigationLinks.map((link, index): JSX.Element =>
      <div key={index} className={`desktop-navigation__lower-${++index}`}>
        {link.link[ 0 ] === '/' ?
          <Link
            className="desktop-navigation__lower-link"
            to={link.link}>
            {link.name}
          </Link>
          :
          <ScrollLink className={`desktop-navigation__lower-link`}
                      to={link.link} smooth={true}>
            {link.name}
          </ScrollLink>
        }
      </div>)

    :

    otherPageLinks.map((link, index): JSX.Element =>
      <div key={index} className={`desktop-navigation__lower-${++index}`}>
        <Link
          className="desktop-navigation__lower-link"
          to={link.link}>
          {link.name}
        </Link>
      </div>)


export default DesktopNavigation