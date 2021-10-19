import React, { FC } from "react"

import { services } from "../../../utils/constants"


interface IProgramCard {
   index: number
   day: string
}

const ProgramCard: FC<IProgramCard> = ({index, day}: IProgramCard): JSX.Element =>
   <div key={index} className="schedule-card">
      <div className="schedule-card__title-container">
         <p className="schedule-card__title">
            {day}
         </p>
      </div>
      <div className="schedule-card__hours">
         {servicesHours()}
      </div>
   </div>


const servicesHours = (): JSX.Element[] =>
   services.map((service: string) =>
      <div className="schedule-card__hours-service">
         <p className="schedule-card__hours-service--title">
            {service}
         </p>
         <p className="schedule-card__hours-service--hours">
            08 - 19
         </p>
      </div>
   )


export default ProgramCard