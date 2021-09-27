import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationSection from '../components/NavigationSection/NavigationSection'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import Pricing from '../pages/pricing/Pricing'
import ReviewsSection from '../components/ReviewsSection/ReviewsSection'
import DirectionsSection from '../components/DirectionsSection/DirectionsSection'
import Program from '../pages/program/Program'
import FooterSection from '../components/FooterSection/FooterSection'
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
        </Route>
        <Route path="/pricing">
          <Pricing/>
        </Route>
        <Route path="/program">
          <Program/>
        </Route>
      </Switch>
      <FooterSection />
    </div>
  </Router>


export default App
