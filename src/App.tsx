import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationSection from '../components/NavigationSection/NavigationSection'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import Pricing from '../pages/Pricing'
import ReviewsSection from '../components/ReviewsSection/ReviewsSection'
import DirectionsSection from '../components/DirectionsSection/DirectionsSection'
import Program from '../pages/Program'
import FooterSection from '../components/FooterSection/FooterSection'
import '../components/sharedStyles/all.sass'
import UserSide from '../pages/UserSide'


const App: FC = (): JSX.Element =>
  <Router>
    <div>
      <Switch>
        <Route path="/" exact>
          <NavigationSection/>
          <FeatureSection/>
          <ReviewsSection/>
          <DirectionsSection/>
        </Route>
        <Route path="/pricing">
          <Pricing/>
        </Route>
        <Route path="/program">
          <Program/>
        </Route>
        <Route path="/login">
          <UserSide />
        </Route>
      </Switch>
      <FooterSection />
    </div>
  </Router>


export default App
