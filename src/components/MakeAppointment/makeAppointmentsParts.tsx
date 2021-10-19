import React, { Dispatch, SetStateAction } from "react"
import { services, subServices } from "../../../utils/constants"


export interface IInputsArgs {
   setFirsName: Dispatch<SetStateAction<string>>
   setLastName: Dispatch<SetStateAction<string>>
   setEmail: Dispatch<SetStateAction<string>>
   setPhone: Dispatch<SetStateAction<string>>
}

export const renderMakeAppointmentHeader = (): JSX.Element =>
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

export const renderMakeAppointmentUpperSideContact = () =>
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


export const renderMakeAppointmentUpperSideFormInputs = (args: IInputsArgs) => {
   const { setPhone, setEmail, setLastName, setFirsName } = args
   return (
      <>
         <div className="make-appointment__container__upper-side__form__upper-inputs">
            <div className="make-appointment__container__upper-side__form__upper-inputs--group">
               <input type="text"
                      onChange={(e) => {
                         setFirsName(e.currentTarget.value)
                      }}
                      name="firstName"
                      placeholder="First Name"
                      className="make-appointment__container__upper-side__form__upper-inputs--input"/>
               <label htmlFor="firstName"
                      className="make-appointment__container__upper-side__form__upper-inputs--input--label">
                  <p className="make-appointment__container__upper-side__form__upper-inputs--input--label--content">
                     First name
                  </p>
               </label>
            </div>
            <div className="make-appointment__container__upper-side__form__upper-inputs--group">
               <input type="text" name="lastName" placeholder="Last Name"
                      onChange={(e) => {
                         setLastName(e.currentTarget.value)
                      }}
                      className="make-appointment__container__upper-side__form__upper-inputs--input"/>
               <label htmlFor="lastName"
                      className="make-appointment__container__upper-side__form__upper-inputs--input--label">
                  <p className="make-appointment__container__upper-side__form__upper-inputs--input--label--content">
                     Last name
                  </p>
               </label>
            </div>
         </div>
         <div className="make-appointment__container__upper-side__form__lower-inputs">
            <div className="make-appointment__container__upper-side__form__lower-inputs--group">
               <input type="email" name="email" placeholder="Email"
                      onChange={(e) => {
                         setEmail(e.currentTarget.value)
                      }}
                      className="make-appointment__container__upper-side__form__lower-inputs--input"/>
               <label htmlFor="email"
                      className="make-appointment__container__upper-side__form__lower-inputs--input--label">
                  <p className="make-appointment__container__upper-side__form__lower-inputs--input--label--content">
                     Email
                  </p>
               </label>
            </div>
            <div className="make-appointment__container__upper-side__form__lower-inputs--group">
               <input type="tel" name="phone" placeholder="Phone"
                      onChange={(e) => {
                         setPhone(e.currentTarget.value)
                      }}
                      className="make-appointment__container__upper-side__form__lower-inputs--input"/>
               <label htmlFor="phone"
                      className="make-appointment__container__upper-side__form__lower-inputs--input--label">
                  <p className="make-appointment__container__upper-side__form__lower-inputs--input--label--content">
                     Phone
                  </p>
               </label>
            </div>
         </div>
      </>)
}

export const renderMakeAppointmentUpperSideFormMessage = (setMessage: Dispatch<SetStateAction<string>>) =>
   <>
      <div className="make-appointment__container__upper-side__form__message">
         <textarea rows={1}
                   onChange={(e) => {
                      setMessage(e.currentTarget.value)
                   }}
                   placeholder="Send us a message"
                   className="make-appointment__container__upper-side__form__message--content"/>
         <p className="make-appointment__container__upper-side__form__message--label">
            Send us a message
         </p>
      </div>
   </>

export const renderServices = () => {
   return services.map((service: string, index: number) => {
         const serviceValue = service.includes("_") ? `${service.split(('_')) [0]} ${service.split(('_')) [1]}` : service
         return <option key={index} value={service}>{serviceValue}</option>
      }
   )
}

export const renderSubServices = (mainService: string) => {
   switch (mainService) {
      case 'Hair_Care':
         return subServices["Hair_Care"].map((subService: string, index: number) => <option key={index}
                                                                                            value={subService}>{subService}</option>)
      case 'Facial_Treatments':
         return subServices["Facial_Treatments"].map((subService: string, index: number) => <option key={index}
                                                                                                    value={subService}>{subService}</option>)
      case 'Body_Massage':
         return subServices["Body_Massage"].map((subService: string, index: number) => <option key={index}
                                                                                               value={subService}>{subService}</option>)
      case 'Makeup_Services':
         return subServices["Makeup_Services"].map((subService: string, index: number) => <option key={index}
                                                                                                  value={subService}>{subService}</option>)
      case 'Nails_Care':
         return subServices["Nails_Care"].map((subService: string, index: number) => <option key={index}
                                                                                             value={subService}>{subService}</option>)
      case 'Hair_Removal':
         return subServices["Hair_Removal"].map((subService: string, index: number) => <option key={index}
                                                                                               value={subService}>{subService}</option>)
      default:
         null
   }
}