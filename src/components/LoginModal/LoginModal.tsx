import * as React from 'react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signupUser } from "../../../api/tresStudio/authentication"
import { IUserData } from "../../../shared/interfaces/user"

import { loginUser } from "../../actions"
import { RootState } from "../../reducers"


interface ILoginModalProps {
   showModal: boolean
   toggleModal: (state: boolean) => void
}

interface IFormComponent {
   setForm: Dispatch<SetStateAction<string>>
}

type LoginModal = ({ showModal }: ILoginModalProps) => JSX.Element
type FormComponent = ({ setForm }: IFormComponent) => JSX.Element

const LoginModal: LoginModal = ({ showModal, toggleModal }): JSX.Element => {
   const [ form, setForm ] = useState<string>('login')

   return (
      <>
         <div
            onClick={() => toggleModal(false)}
            className={`login-modal__wrap ${showModal ? '' : 'hidden'}`}/>
         <div className={`login-modal__container ${showModal ? '' : 'hidden'}`}>
            <a
               onClick={() => toggleModal(false)}
               className="login-modal__container--close">
               <img
                  src="/images/cancel.svg" alt="close"
                  className="login-modal__container--close--icon"/>
            </a>
            <div className={`login-modal__container--form ${showModal ? '' : 'hidden'}`}>
               {
                  form === 'login'
                     ? <LoginForm setForm={setForm}/>
                     : <SignupForm setForm={setForm}/>
               }
            </div>
         </div>
      </>)
}


const LoginForm: FormComponent = (props: IFormComponent): JSX.Element => {
   const { setForm } = props

   const history = useHistory()
   const dispatch = useDispatch()

   const userData: IUserData & { message: string } = useSelector((state: RootState) => state.isUserAuthenticated)

   const [ email, setEmail ] = useState<string>('')
   const [ password, setPassword ] = useState<string>('')
   const [ wrongCredentials, setWrongCredentials ] = useState<string>('')
   const [ errorMessage, setErrorMessage ] = useState<string>('')

   useEffect(() => {
      console.log(userData)
      if (userData.message === 'Wrong password')
         setWrongCredentials('--wrong-password')

      else if (userData.message === 'A user with this email couldn\'t be found')
         setWrongCredentials('--wrong-email')

      else if (userData.name !== '')
         history.push('/userDashboard')

      setErrorMessage(userData.message)
   }, [ userData ])

   return (
      <>
         <p className="login-modal__container--form--title">Login</p>
         <form
            className="login-modal__container--form--inputs"
            onSubmit={(event: React.FormEvent<HTMLElement>): void => {
               event.preventDefault()
               dispatch(loginUser(email, password))
            }}>
            <input
               className={`login-modal__container--form--inputs--input login-modal__container--form--inputs--input${wrongCredentials === '--wrong-email' ? wrongCredentials : ''}`}
               placeholder="Email"
               type="email"
               name="email"
               onChange={(event: React.FormEvent<HTMLInputElement>): void => {
                  setEmail(event.currentTarget.value)
               }}/>
            <label
               className="login-modal__container--form--inputs--label">
               Email
            </label>
            <input
               className={`login-modal__container--form--inputs--input login-modal__container--form--inputs--input${wrongCredentials === '--wrong-password' ? wrongCredentials : ''}`}
               placeholder="Password"
               type="password"
               name="password"
               onChange={(event: React.FormEvent<HTMLInputElement>): void => {
                  setPassword(event.currentTarget.value)
               }}/>
            <label
               className="login-modal__container--form--inputs--label"
               htmlFor="password">
               Password
            </label>
            <div className="login-modal__container--form--inputs--buttons">
               <p>{errorMessage}</p>
               <button
                  onChange={(event: React.FormEvent<HTMLElement>): void => {
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
         </form>
      </>)
}


const SignupForm: FormComponent = (props: IFormComponent): JSX.Element => {
   const { setForm } = props
   const [ firstName, setFirstName ] = useState<string>('')
   const [ lastName, setLastName ] = useState<string>('')
   const [ email, setEmail ] = useState<string>('')
   const [ password, setPassword ] = useState<string>('')
   const [ formMessage, setFormMessage ] = useState<string>('')

   return (
      <>
         <p className="login-modal__container--form--title">Sign Up</p>
         <form
            className="login-modal__container--form--inputs"
            onSubmit={async (e) => {
               e.preventDefault()
               const { status, data } = await signupUser(firstName, lastName, email, password)
               status === 405 && setFormMessage(data.message)
               status === 200 && setFormMessage(data.message) && setTimeout(() => setForm('login'), 2000)
            }}>
            <input
               className="login-modal__container--form--inputs--input"
               placeholder="First Name"
               type="text"
               name="firstname"
               onChange={(event: React.FormEvent<HTMLInputElement>): void => {
                  setFirstName(event.currentTarget.value)
               }}/>
            <label
               className="login-modal__container--form--inputs--label login-modal__container--form--inputs--label--firstname"
               htmlFor="input">
               First name
            </label>
            <input className="login-modal__container--form--inputs--input"
                   placeholder="Last Name"
                   type="text"
                   name="lastname"
                   onChange={(event: React.FormEvent<HTMLInputElement>): void => {
                      setLastName(event.currentTarget.value)
                   }}/>
            <label
               className="login-modal__container--form--inputs--label login-modal__container--form--inputs--label--lastname"
               htmlFor="input">
               Last name
            </label>
            <input
               className="login-modal__container--form--inputs--input"
               placeholder="Email"
               type="email"
               name="email"
               onChange={(event: React.FormEvent<HTMLInputElement>): void => {
                  setEmail(event.currentTarget.value)
               }}/>
            <label
               className="login-modal__container--form--inputs--label"
               htmlFor="email">
               Email
            </label>
            <input
               className="login-modal__container--form--inputs--input"
               placeholder="Password"
               type="password"
               name="password"
               onChange={(event: React.FormEvent<HTMLInputElement>): void => {
                  setPassword(event.currentTarget.value)
               }}/>
            <label
               className="login-modal__container--form--inputs--label"
               htmlFor="password">
               Password
            </label>
            <div className="login-modal__container--form--inputs--buttons">
               <p>{}</p>
               <p>{formMessage}</p>
               <a
                  onClick={(): void => {
                     setForm('login')
                  }}
                  className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--signup">
                  Login
               </a>
               <button
                  onChange={(event: React.FormEvent<HTMLElement>): void => {
                     event.preventDefault()
                  }}
                  type='submit'
                  className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--login">
                  Sign Up
               </button>
            </div>
         </form>
      </>)
}
export default LoginModal