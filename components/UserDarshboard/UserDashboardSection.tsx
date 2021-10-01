import * as React from 'react'

import PromotionSection from '../PromotionsSection/PromotionSection'
import RewardsSection from '../RewardsSection/RewardsSection'
import LastAppointmentsSection from '../LastAppointmentSectuin/LastAppointmentsSection'
import { FC } from 'react'

const UserDashboardSection: FC = (): JSX.Element => {
    return (
        <div className="user-dashboard">
            <PromotionSection />
            <RewardsSection />
            <LastAppointmentsSection />
        </div>
    )
}

export default UserDashboardSection