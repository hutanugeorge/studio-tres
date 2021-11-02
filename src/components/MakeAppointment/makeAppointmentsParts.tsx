import React, { Dispatch, SetStateAction } from "react"

import { JSXArrayElements, JSXElement } from "../../../shared/types"
import { services, subServices } from "../../../utils/constants"


type RenderSubServices = (mainService: string) => (JSX.Element[] | undefined)
type RenderMakeAppointmentUpperSideFormMessage = (setMessage: React.Dispatch<React.SetStateAction<string>>) => JSX.Element

export const renderMakeAppointmentHeader: JSXElement = (): JSX.Element =>
   <>
      <div className="make-appointment__header--title">
         <p className="make-appointment__header--title--content">
            Appointment
         </p>
      </div>
      <div className="make-appointment__header--sub-title">
         <p className="make-appointment__header--sub-title--content">
            Any questions or remarks? Just write us a message!
         </p>
      </div>
   </>

export const renderMakeAppointmentUpperSideContact: JSXElement = (): JSX.Element =>
   <div className="make-appointment__container__upper-side__contact">
      <div className="make-appointment__container__upper-side__contact--header">
         <div className="make-appointment__container__upper-side__contact--header--title">
            <p className="make-appointment__container__upper-side__contact--header--title--content">
               Contact
            </p>
         </div>
         <div className="make-appointment__container__upper-side__contact--header--sub-title">
            <p className="make-appointment__container__upper-side__contact--header--sub-title--content">
               Fill out the form and our team will get back to you within 24 hours.
            </p>
         </div>
      </div>
      <div className="make-appointment__container__upper-side__contact--in-touch">
         <div className="make-appointment__container__upper-side__contact--in-touch--address">
            <img src=""
                 alt=""
                 className="make-appointment__container__upper-side__contact--in-touch--address--icon"/>
            <p className="make-appointment__container__upper-side__contact--in-touch--address--content">
               +4078 340 4102
            </p>
         </div>
         <div className="make-appointment__container__upper-side__contact--in-touch--address">
            <img src=""
                 alt=""
                 className="make-appointment__container__upper-side__contact--in-touch--address--icon"/>
            <p className="make-appointment__container__upper-side__contact--in-touch--address--content">
               mail@mail.com
            </p>
         </div>
         <div className="make-appointment__container__upper-side__contact--in-touch--address">
            <img src=""
                 alt=""
                 className="make-appointment__container__upper-side__contact--in-touch--address--icon"/>
            <p className="make-appointment__container__upper-side__contact--in-touch--address--content">
               Str. Dream Street 2 Timisoara
            </p>
         </div>

      </div>
      <div className="make-appointment__container__upper-side__contact--links">
         <div className="make-appointment__container__upper-side__contact--links--content">F</div>
         <div className="make-appointment__container__upper-side__contact--links--content">I</div>
         <div className="make-appointment__container__upper-side__contact--links--content">T</div>
      </div>
   </div>

export const renderMakeAppointmentUpperSideFormMessage: RenderMakeAppointmentUpperSideFormMessage = (setMessage: Dispatch<SetStateAction<string>>): JSX.Element =>
   <>
      <div className="make-appointment__container__upper-side__form__message">
         <textarea rows={1}
                   onChange={(e): void => {
                      setMessage(e.currentTarget.value)
                   }}
                   placeholder="Send us a message"
                   className="make-appointment__container__upper-side__form__message--content"/>
         <p className="make-appointment__container__upper-side__form__message--label">
            Send us a message
         </p>
      </div>
   </>
export const renderServices: JSXArrayElements = (): JSX.Element[] => services.map((service: string, index: number): JSX.Element => {
      const serviceValue = service.includes("_") ? `${service.split(('_')) [0]} ${service.split(('_')) [1]}` : service
      return <option key={index} value={service}>{serviceValue}</option>
   }
)

export const renderSubServices: RenderSubServices = (mainService: string): JSX.Element[] | undefined => {
   switch (mainService) {
      case 'Hair_Care':
         return subServices["Hair_Care"].map((subService: string, index: number): JSX.Element => <option key={index}
                                                                                            value={subService}>{subService}</option>)
      case 'Facial_Treatments':
         return subServices["Facial_Treatments"].map((subService: string, index: number): JSX.Element => <option key={index}
                                                                                                    value={subService}>{subService}</option>)
      case 'Body_Massage':
         return subServices["Body_Massage"].map((subService: string, index: number): JSX.Element => <option key={index}
                                                                                               value={subService}>{subService}</option>)
      case 'Makeup_Services':
         return subServices["Makeup_Services"].map((subService: string, index: number): JSX.Element => <option key={index}
                                                                                                  value={subService}>{subService}</option>)
      case 'Nails_Care':
         return subServices["Nails_Care"].map((subService: string, index: number): JSX.Element => <option key={index}
                                                                                             value={subService}>{subService}</option>)
      case 'Hair_Removal':
         return subServices["Hair_Removal"].map((subService: string, index: number): JSX.Element => <option key={index}
                                                                                               value={subService}>{subService}</option>)
      default:
         undefined
   }
}