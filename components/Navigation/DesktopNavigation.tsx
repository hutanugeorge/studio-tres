import React from 'react'

import { lowerLinks } from '../../utils/constants'
import '../stylesheets/components/_desktop-navigation.sass'

const DesktopNavigation = () => (
   <div className="desktop-navigation">
       <div className="desktop-navigation__lower">
           {navigationLower()}
       </div>
   </div>
)


const navigationLower = () => lowerLinks.map((link, index) => (
   <div key={index} className={`desktop-navigation__lower-${++index}`}>
       <a className={`desktop-navigation__lower-link`}
          href={`${link.link}`}>
           {link.name}
       </a>
   </div>
))


export default DesktopNavigation