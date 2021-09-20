import React from 'react'
import {Link} from 'react-router-dom'

import { upperLinks } from '../../utils/constants'
import '../stylesheets/components/_header.sass'

const Header = (): JSX.Element => (
   <div className="wrap-header">
       <div className="header">
           {navigationUpper()}
       </div>
   </div>
)

const navigationUpper = (): JSX.Element[] => upperLinks.map((link, index) => (
   <div key={index} className={`header-${link.position}`}>
       <Link className={`header-link`}
          to={`${link.link}`}>
           {link.name}
       </Link>
   </div>
))

export default Header