import React from 'react'
import { Link } from 'react-router-dom'

import { lowerLinks } from '../../utils/constants'
import '../stylesheets/components/_desktop-navigation.sass'

const DesktopNavigation = (): JSX.Element => (
   <div className="desktop-navigation">
       <div className="desktop-navigation__lower">
           {navigationLower()}
       </div>
   </div>
)


const navigationLower = (): JSX.Element[] => lowerLinks.map((link, index): JSX.Element => (
   <div key={index} className={`desktop-navigation__lower-${++index}`}>
       <Link className={`desktop-navigation__lower-link`}
          to={`${link.link}`}>
           {link.name}
       </Link>
   </div>
))


export default DesktopNavigation