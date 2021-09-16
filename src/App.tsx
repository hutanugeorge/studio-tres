import React from 'react'

import DesktopNavigation from '../components/Navigation/DesktopNavigation'
import MobileNavigation from '../components/Navigation/MobileNavigation'
import Header from '../components/Navigation/Header'


const App = () => (
   <div>
       <Header/>
       <DesktopNavigation/>
       <MobileNavigation/>
   </div>
)


export default App
