import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DesktopNavigation from "./components/NavigationSection/DesktopNavigation"
import MobileNavigation from "./components/NavigationSection/MobileNavigation"

import NavigationSection from './components/NavigationSection/NavigationSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import DirectionsSection from './components/DirectionsSection/DirectionsSection'
import FooterSection from './components/FooterSection/FooterSection'
import MakeAppointment from "./components/MakeAppointment/MakeAppointment"
import LoginModal from "./components/LoginModal/LoginModal"
import Pricing from './pages/Pricing'
import Program from './pages/Program'
import UserSide from './pages/UserSide'
import './components/sharedStyles/all.sass'


const App: FC = (): JSX.Element =>
   <Router>
      <div>
         <Switch>
            <Route path="/login">
               <LoginModal/>
            </Route>
            <Route path="/" exact>
               <NavigationSection/>
               <FeatureSection/>
               <ReviewsSection/>
               <DirectionsSection/>
               <FooterSection/>
            </Route>
            <Route path="/pricing">
               <Pricing/>
               <FooterSection/>
            </Route>
            <Route path="/program">
               <Program/>
               <FooterSection/>
            </Route>
            <Route path="/userDashboard">
               <UserSide/>
            </Route>
            <Route path="/appointment">
               <MakeAppointment/>
            </Route>
         </Switch>
      </div>
   </Router>


export default App
