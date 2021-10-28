import { FormEvent, useState } from "react"
import * as React from "react"
import { useHistory } from "react-router-dom"
import { resetPasswordEmail } from "../../../api/tresStudio/authentication"
import { IFormErrors } from "../../../shared/interfaces/foms"
import { JSXElement } from "../../../shared/types"


const ForgotPassword: JSXElement = (): JSX.Element => {
   const history = useHistory()

   const [ email, setEmail ] = useState<string>('')
   const [ formErrors, setFormErrors ] = useState<IFormErrors>({})
   const [ formMessage, setFormMessage ] = useState<string>('')

   return (
      <>
         <div className={`login-modal__wrap `}/>
         <div className={`login-modal__container `}>
            <div className={`login-modal__container--form `}>
               <p className="login-modal__container--form--title">Reset Password</p>
               <form
                  className="login-modal__container--form--inputs"
                  onSubmit={async (event: FormEvent<HTMLElement>): Promise<void> => {
                     event.preventDefault()
                     const { status, data } = await resetPasswordEmail(email)
                     status === 403 && setFormErrors(data?.errors)
                     if (status === 200) {
                        setFormMessage(data?.message)
                        setTimeout(() => history.push('/login'), 2000)
                     } else if (status === 404)
                        setFormMessage(data?.message)
                  }}>
                  <input
                     className={`login-modal__container--form--inputs--input login-modal__container--form--inputs--input${formErrors?.email ? '--error' : ''}`}
                     placeholder="Email"
                     type="email"
                     name="email"
                     onChange={(event: FormEvent<HTMLInputElement>): void => {
                        setEmail(event.currentTarget.value)
                     }}/>
                  <label className={`login-modal__container--form--inputs--label${formErrors?.email ? '--error' : ''}`}>
                     {formErrors?.email ?? 'Email'}
                  </label>
                  <div className="login-modal__container--form--inputs--buttons">
                     <p className="login-modal__container--form--inputs--buttons--forgot-password">{formMessage}</p>
                     <div className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--login--wrap">
                        <button
                           onChange={(event: FormEvent<HTMLElement>): void => {
                              event.preventDefault()
                           }}
                           type='submit'
                           className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--login">
                           Submit
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}

export default ForgotPassword