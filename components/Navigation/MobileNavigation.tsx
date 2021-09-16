import React, { useState } from 'react'

import { lowerLinks } from '../../utils/constants'
import '../stylesheets/components/_mobile-navigation.sass'
import '../stylesheets/components/_buttons.sass'


const MobileNavigation = () => {
    const [navigation, setNavigation] = useState('')

    const onClickNavigationHandler = () => {
        if (navigation === '') setNavigation('mobile-navigation-open')
        else if (navigation === 'mobile-navigation-open') setNavigation('')
    }

    return (
       <div className="wrap-navigation">
           <div className="btn-navigation" onClick={onClickNavigationHandler}>
               <div className="btn-navigation--inside"/>
           </div>
           <div className={`mobile-navigation ${navigation}`}>
               <div className="mobile-navigation__header">
                   <a className="mobile-navigation__header-link" href="#">
                       Tres Studio
                   </a>
               </div>
               <div className="mobile-navigation__links">
                   {navigationLower()}
               </div>
           </div>
       </div>
    )
}

const navigationLower = () => lowerLinks.map((link, index) => (
   <div key={index} className={`mobile-navigation__lower mobile-navigation__lower-${++index}`}>
       <a className={`mobile-navigation__lower-link`}
          href={`${link.link}`}>
           {link.name}
       </a>
   </div>
))

export default MobileNavigation