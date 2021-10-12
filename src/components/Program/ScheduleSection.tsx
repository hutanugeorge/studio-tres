import * as React from 'react'
import { FC } from 'react'
import { JSXArrayElements } from '../../../shared/types'

import { services, weekDays } from '../../../utils/constants'
import './schedule-section.sass'


const ScheduleSection: FC = (): JSX.Element =>
   <section className="schedule-section--wrap">
      <div className="schedule-section">
         {generateScheduleCards()}
      </div>
   </section>


const generateScheduleCards: JSXArrayElements = (): JSX.Element[] =>
   weekDays.map((day: string, index: number) =>
      <div key={index} className="schedule-card">
         <div className="schedule-card__title-container">
            <p className="schedule-card__title">
               {day}
            </p>
         </div>
         <div className="schedule-card__hours">
            {services.map((service: string) =>
               <div className="schedule-card__hours-service">
                  <p className="schedule-card__hours-service--title">
                     {service}
                  </p>
                  <p className="schedule-card__hours-service--hours">
                     08 - 19
                  </p>
               </div>
            )}
         </div>
      </div>
   )

export default ScheduleSection