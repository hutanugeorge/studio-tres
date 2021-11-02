import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll/modules'

import { navigationLinks, otherPageLinks } from '../../../utils/constants'
import { logoutUser } from "../../actions"


type GenerateNavigationLinks = (setShowModal: Dispatch<SetStateAction<string>>) => JSX.Element[]


const MobileNavigation: FC = (): JSX.Element => {
   const dispatch = useDispatch()

   const token = localStorage.getItem('token')

   const [ navigation, setNavigation ] = useState<string>('')
   const [ isAuth, setIsAuth ] = useState<boolean>(false)

   useEffect((): void => {
      token && setIsAuth(true)
   }, [ isAuth ])

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
                  {!isAuth
                     ? <Link to="login"
                             className="mobile-navigation__login-button ">
                        Login
                     </Link>
                     : <>
                        <Link to="userDashboard"
                              className="mobile-navigation__login-button ">
                           User Dashboard
                        </Link>
                        <a onClick={(): void => {
                           dispatch(logoutUser())
                           setIsAuth(false)
                        }}
                           className="mobile-navigation__login-button ">
                           Log out
                        </a>
                     </>}
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
            {link.link[0] === '/' ?
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