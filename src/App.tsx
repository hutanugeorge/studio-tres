import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationSection from '../components/NavigationSection/NavigationSection'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import ReviewsSection from '../components/ReviewsSection/ReviewsSection'
import DirectionsSection from '../components/DirectionsSection/DirectionsSection'
import FooterSection from '../components/FooterSection/FooterSection'
import Pricing from '../pages/Pricing'
import Program from '../pages/Program'
import UserSide from '../pages/UserSide'
import '../components/sharedStyles/all.sass'


const App: FC = (): JSX.Element =>
  <Router>
    <div>
      <Switch>
        <Route path="/" exact>
          <NavigationSection/>
          <FeatureSection/>
          <ReviewsSection/>
          <DirectionsSection/>
          <FooterSection />
        </Route>
        <Route path="/pricing">
          <Pricing/>
          <FooterSection />
        </Route>
        <Route path="/program">
          <Program/>
          <FooterSection />
        </Route>
        <Route path="/login">
          <UserSide />
        </Route>
      </Switch>
    </div>
  </Router>


export default App
