import React from 'react'

import { upperLinks } from '../../utils/constants'
import '../stylesheets/components/_header.sass'

const Header = () => (
   <div className="wrap-header">
       <div className="header">
           {navigationUpper()}
       </div>
   </div>
)

const navigationUpper = () => upperLinks.map((link, index) => (
   <div key={index} className={`header-${link.position}`}>
       <a className={`header-link`}
          href={`${link.link}`}>
           {link.name}
       </a>
   </div>
))

export default Header