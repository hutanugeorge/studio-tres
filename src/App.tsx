import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationSection from '../components/NavigationSection/NavigationSection'
import HeroSection from '../components/HeroSection/HeroSection'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import Pricing from '../pages/pricing/Pricing'
import ReviewsSection from '../components/ReviewsSection/ReviewsSection'
import DirectionsSection from '../components/DirectionsSection/DirectionsSection'


const App: FC = (): JSX.Element =>
  <Router>
    <div>
      <Switch>
        <Route path="/" exact>
          <NavigationSection/>
          <HeroSection/>
          <FeatureSection/>
          <ReviewsSection/>
          <DirectionsSection/>
        </Route>
        <Route path="/pricing">
          <Pricing/>
        </Route>
      </Switch>
    </div>
  </Router>


export default App
