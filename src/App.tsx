import React from 'react'
import {
   BrowserRouter as Router,
   Route,
   Switch
} from 'react-router-dom'

import NavigationSection from '../components/NavigationSection'
import HeroSection from '../components/HeroSection/HeroSection'
import FeatureSection
   from '../components/FeatureSection/FeatureSection'
import Pricing from '../pages/pricing/Pricing'


const App = (): JSX.Element => (
   <Router>
      <div>
         <Switch>
            <Route path="/" exact>
               <NavigationSection/>
               <HeroSection/>
               <FeatureSection/>
            </Route>
            <Route path="/pricing">
               <Pricing/>
            </Route>
         </Switch>
      </div>
   </Router>
)


export default App
