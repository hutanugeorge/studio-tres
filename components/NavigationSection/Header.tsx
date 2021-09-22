import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { JSXArrayElements } from '../../shared/types'
import { upperLinks } from '../../utils/constants'
import '../stylesheets/components/_header.sass'



const Header: FC = (): JSX.Element => (
  <div className="wrap-header">
    <div className="header">
      {navigationUpper()}
    </div>
  </div>
)

const navigationUpper: JSXArrayElements = (): JSX.Element[] =>
  upperLinks.map((link, index) => (
    <div key={index} className={`header-${link.position}`}>
      <Link className={`header-link`}
            to={`${link.link}`}>
        {link.name}
      </Link>
    </div>
  ))

export default Header