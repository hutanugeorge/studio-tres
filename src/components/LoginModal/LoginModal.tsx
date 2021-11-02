import React, { Dispatch, FC, FormEvent, SetStateAction, useEffect, useState } from 'react'

import { useHistory, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { signupUser } from "../../../api/tresStudio/authentication"
import { IFormErrors } from "../../../shared/interfaces/foms"
import { IUser } from "../../../shared/interfaces/user"
import { loginUser } from "../../actions"
import { RootState } from "../../reducers"


interface IFormComponent {
   readonly setForm: Dispatch<SetStateAction<string>>
}

interface IUserData extends IUser {
   readonly errors?: {
      readonly password: string,
      readonly email: string
   }
}

type FormComponent = ({ setForm }: IFormComponent) => JSX.Element

const LoginModal: FC = (): JSX.Element => {
   const [ form, setForm ] = useState<string>('login')

   return (
      <>
         <div className={`login-modal__wrap `}/>
         <div className={`login-modal__container `}>
            <div className={`login-modal__container--form `}>
               {
                  form === 'login'
                     ? <LoginForm setForm={setForm}/>
                     : <SignupForm setForm={setForm}/>
               }
            </div>
         </div>
      </>)
}

const LoginForm: FormComponent = ({ setForm }: IFormComponent): JSX.Element => {
   const history = useHistory()
   const dispatch = useDispatch()

   const userData: IUserData = useSelector((state: RootState) => state.isUserAuthenticated)

   const [ email, setEmail ] = useState<string>('')
   const [ password, setPassword ] = useState<string>('')
   const [ passwordErrorMessage, setPasswordErrorMessage ] = useState<string>('')
   const [ emailErrorMessage, setEmailErrorMessage ] = useState<string>('')


   useEffect((): void => {
      const token = localStorage.getItem('token')
      userData.errors?.password ? setPasswordErrorMessage(userData.errors?.password) : setPasswordErrorMessage('')
      userData.errors?.email ? setEmailErrorMessage(userData.errors?.email) : setEmailErrorMessage('')
      token !== null && history.push('/userDashboard')
   }, [ userData ])

   return (
      <>
         <p className="login-modal__container--form--title">Login</p>
         <form
            className="login-modal__container--form--inputs"
            onSubmit={(event: FormEvent<HTMLElement>): void => {
               event.preventDefault()
               dispatch(loginUser({ email, password }))
            }}>
            <input
               className={`login-modal__container--form--inputs--input login-modal__container--form--inputs--input${emailErrorMessage ? '--error' : ''}`}
               placeholder="Email"
               type="email"
               name="email"
               onChange={(event: FormEvent<HTMLInputElement>): void => {
                  setEmail(event.currentTarget.value)
               }}/>
            <label className={`login-modal__container--form--inputs--label${emailErrorMessage ? '--error' : ''}`}>
               {emailErrorMessage ? emailErrorMessage : 'Email'}
            </label>
            <input
               className={`login-modal__container--form--inputs--input login-modal__container--form--inputs--input${passwordErrorMessage ? '--error' : ''}`}
               placeholder="Password"
               type="password"
               name="password"
               onChange={(event: FormEvent<HTMLInputElement>): void => {
                  setPassword(event.currentTarget.value)
               }}/>
            <label
               className={`login-modal__container--form--inputs--label${passwordErrorMessage ? '--error' : ''}`}
               htmlFor="password">
               {passwordErrorMessage ? passwordErrorMessage : 'Password'}
            </label>
            <div className="login-modal__container--form--inputs--buttons">
               <Link to="/resetPasswordEmail"
                     className="login-modal__container--form--inputs--buttons--forgot-password">Forgot password?</Link>
               <div>
                  <button
                     onChange={(event: FormEvent<HTMLElement>): void => {
                        event.preventDefault()
                     }}
                     type='submit'
                     className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--login">
                     Login
                  </button>
                  <a
                     onClick={(): void => {
                        setForm('signup')
                     }}
                     className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--signup">
                     Sign Up
                  </a>
               </div>
            </div>
         </form>
      </>)
}


const SignupForm: FormComponent = ({ setForm }: IFormComponent): JSX.Element => {

   const [ firstName, setFirstName ] = useState<string>('')
   const [ lastName, setLastName ] = useState<string>('')
   const [ email, setEmail ] = useState<string>('')
   const [ password, setPassword ] = useState<string>('')
   const [ repeatPassword, setRepeatPassword ] = useState<string>('')
   const [ formMessage, setFormMessage ] = useState<string>('')
   const [ formErrors, setFormErrors ] = useState<IFormErrors>({})

   return (
      <>
         <p className="login-modal__container--form--title">Sign Up</p>
         <form
            className="login-modal__container--form--inputs"
            onSubmit={async (event: FormEvent<HTMLElement>): Promise<void> => {
               event.preventDefault()
               const { status, data } = await signupUser({ firstName, lastName, email, password, repeatPassword })
               status === 403 && setFormErrors(data?.errors)
               if (status === 200) {
                  setFormMessage(data.message)
                  setTimeout(() => setForm('login'), 2000)
               }
            }}>
            <input
               className={`login-modal__container--form--inputs--input${formErrors?.firstName ? '--error' : ''}`}
               placeholder="First Name"
               type="text"
               name="firstname"
               onChange={(event: FormEvent<HTMLInputElement>): void => {
                  setFirstName(event.currentTarget.value)
               }}/>
            <label
               className={`login-modal__container--form--inputs--label${formErrors?.firstName ? '--error' : ''}`}
               htmlFor="input">
               {formErrors?.firstName ?? 'First name'}
            </label>
            <input className={`login-modal__container--form--inputs--input${formErrors?.lastName ? '--error' : ''}`}
                   placeholder="Last Name"
                   type="text"
                   name="lastname"
                   onChange={(event: FormEvent<HTMLInputElement>): void => {
                      setLastName(event.currentTarget.value)
                   }}/>
            <label
               className={`login-modal__container--form--inputs--label${formErrors?.lastName ? '--error' : ''}`}
               htmlFor="input">
               {formErrors?.lastName ?? 'Last name'}
            </label>
            <input
               className={`login-modal__container--form--inputs--input${formErrors?.email ? '--error' : ''}`}
               placeholder="Email"
               type="email"
               name="email"
               onChange={(event: FormEvent<HTMLInputElement>): void => {
                  setEmail(event.currentTarget.value)
               }}/>
            <label
               className={`login-modal__container--form--inputs--label${formErrors?.email ? '--error' : ''}`}
               htmlFor="email">
               {formErrors?.email ?? 'Email'}
            </label>
            <input
               className={`login-modal__container--form--inputs--input${formErrors?.password ? '--error' : ''}`}
               placeholder="Password"
               type="password"
               name="password"
               onChange={(event: FormEvent<HTMLInputElement>): void => {
                  setPassword(event.currentTarget.value)
               }}/>
            <label
               className={`login-modal__container--form--inputs--label${formErrors?.password ? '--error' : ''}`}
               htmlFor="password">
               {formErrors?.password ?? 'Password'}
            </label>
            <input
               className={`login-modal__container--form--inputs--input${formErrors?.repeatPassword ? '--error' : ''}`}
               placeholder="Repeat Password"
               type="password"
               name="repeatPassword"
               onChange={(event: FormEvent<HTMLInputElement>): void => {
                  setRepeatPassword(event.currentTarget.value)
               }}/>
            <label
               className={`login-modal__container--form--inputs--label${formErrors?.repeatPassword ? '--error' : ''}`}
               htmlFor="repeatPassword">
               {formErrors?.repeatPassword ?? 'Repeat Password'}
            </label>
            <div className="login-modal__container--form--inputs--buttons">
               <p className="login-modal__container--form--inputs--buttons--form-message">
                  {formMessage}
               </p>
               <div>
                  <a
                     onClick={(): void => {
                        setForm('login')
                     }}
                     className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--signup">
                     Login
                  </a>
                  <button
                     onChange={(event: FormEvent<HTMLElement>): void => {
                        event.preventDefault()
                     }}
                     type='submit'
                     className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--login">
                     Sign Up
                  </button>
               </div>
            </div>
         </form>
      </>)
}
export default LoginModal