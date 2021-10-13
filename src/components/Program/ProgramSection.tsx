import * as React from 'react'
import { FC } from 'react'
import { JSXArrayElements } from '../../../shared/types'

import { services, weekDays } from '../../../utils/constants'
import './program-section.sass'
import ProgramCard from "./ProgramCard";


const ProgramSection: FC = (): JSX.Element =>
   <section className="schedule-section--wrap">
      <div className="schedule-section">
         {generateScheduleCards()}
      </div>
   </section>


const generateScheduleCards: JSXArrayElements = (): JSX.Element[] =>
   weekDays.map((day: string, index: number) =>
      <ProgramCard index={index} day={day} />)

export default ProgramSection