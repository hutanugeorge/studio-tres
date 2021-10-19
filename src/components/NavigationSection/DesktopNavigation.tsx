import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from "react-redux"

import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'

import { navigationLinks, otherPageLinks } from '../../../utils/constants'
import { JSXArrayElements } from '../../../shared/types'
import { logoutUser } from "../../actions"


const DesktopNavigation: FC = (): JSX.Element => {
   const dispatch = useDispatch()

   const token = localStorage.getItem('token')
   const [ isAuth, setIsAuth ] = useState<boolean>(false)

   useEffect(() => {
      token ? setIsAuth(true) : null
   }, [ isAuth ])

   return (
      <>
         <div className="desktop-navigation">
            <div className="desktop-navigation__lower">
               <div className="desktop-navigation__lower-links">
                  {generateNavigationLinks()}
               </div>
               <div className="desktop-navigation__lower-login">
                  {!isAuth
                     ? <Link to="login"
                             className="desktop-navigation__lower-link desktop-navigation__login">
                        Login
                     </Link>
                     : <>
                        <Link to="userDashboard"
                              className="desktop-navigation__lower-link desktop-navigation__login">
                           User Dashboard
                        </Link>
                        <a onClick={() => {
                           dispatch(logoutUser())
                           setIsAuth(false)
                        }}
                           className="desktop-navigation__lower-link desktop-navigation__login">
                           Log out
                        </a>
                     </>}
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
            {link.link[0] === '/' ?
               <Link
                  className={`desktop-navigation__lower-link ${index === 1 ? 'desktop-navigation__lower-link-logo' : ''}`}
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