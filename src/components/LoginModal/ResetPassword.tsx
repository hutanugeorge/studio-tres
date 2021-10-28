import { FC, FormEvent, useState } from "react"
import * as React from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { resetPassword } from "../../../api/tresStudio/authentication"
import { IFormErrors } from "../../../shared/interfaces/foms"


const ResetPassword: FC = (): JSX.Element => {
   const history = useHistory()

   const [ password, setPassword ] = useState<string>('')
   const [ repeatPassword, setRepeatPassword ] = useState<string>('')
   const [ formErrors, setFormErrors ] = useState<IFormErrors>({})
   const [ formMessage, setFormMessage ] = useState<string>('')

   const params = new URLSearchParams(useLocation().search)
   const token: string | null = params.get('token')

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
                     const { status, data } = await resetPassword({ token, password, repeatPassword })
                     status === 403 && setFormErrors(data?.errors)
                     status === 401 && history.push('/')
                     if (status === 200) {
                        setFormMessage(data?.message)
                        setTimeout(() => history.push('/login'), 2000)
                     }
                     else if (status === 404)
                        setFormMessage(data?.message)
                  }}>
                  <input
                     className={`login-modal__container--form--inputs--input login-modal__container--form--inputs--input${formErrors?.password ? '--error' : ''}`}
                     placeholder="Password"
                     type="password"
                     name="password"
                     onChange={(event: FormEvent<HTMLInputElement>): void => {
                        setPassword(event.currentTarget.value)
                     }}/>
                  <label className={`login-modal__container--form--inputs--label`}>
                     {formErrors?.password ?? 'Password'}
                  </label>
                  <input
                     className={`login-modal__container--form--inputs--input login-modal__container--form--inputs--input${formErrors?.repeatPassword ? '--error' : ''}`}
                     placeholder="Repeat Password"
                     type="password"
                     name="repeatPassword"
                     onChange={(event: FormEvent<HTMLInputElement>): void => {
                        setRepeatPassword(event.currentTarget.value)
                     }}/>
                  <label
                     className={`login-modal__container--form--inputs--label`}
                     htmlFor="repeatPassword">
                     {formErrors?.repeatPassword ?? 'Repeat Password'}
                  </label>
                  <div className="login-modal__container--form--inputs--buttons">
                     <p className="login-modal__container--form--inputs--buttons--form-message">
                        {formMessage}
                     </p>
                     <button
                        onChange={(event: FormEvent<HTMLElement>): void => {
                           event.preventDefault()
                        }}
                        type='submit'
                        className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--login">
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>)
}

export default ResetPassword

