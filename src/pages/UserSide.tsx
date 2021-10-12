import * as React from 'react'

import UserInfo from '../components/UserInfo/UserInfo'
import UserDashboardSection from '../components/UserDarshboard/UserDashboardSection'

const UserSide = () =>
  <div className="user-side">
    <UserInfo />
    <UserDashboardSection />
  </div>

export default UserSide