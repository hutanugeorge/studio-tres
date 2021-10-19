import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'

import { useHistory, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { signupUser } from "../../../api/tresStudio/authentication"
import { IUser } from "../../../shared/interfaces/user"
import { loginUser } from "../../actions"
import { RootState } from "../../reducers"


interface IFormComponent {
   setForm: Dispatch<SetStateAction<string>>
}

type FormComponent = ({ setForm }: IFormComponent) => JSX.Element

const LoginModal = (): JSX.Element => {
   const [ form, setForm ] = useState<string>('login')

   return (
      <>
         <div
            className={`login-modal__wrap `}/>
         <Link to='/'
               className="login-modal__wrap-back">
            Back to home
         </Link>
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

   const userData: IUser & { message?: string } = useSelector((state: RootState) => state.isUserAuthenticated)

   const [ email, setEmail ] = useState<string>('')
   const [ password, setPassword ] = useState<string>('')
   const [ wrongCredentials, setWrongCredentials ] = useState<string>('')
   const [ errorMessage, setErrorMessage ] = useState<string>('')

   useEffect(() => {
      const token = localStorage.getItem('token')
      if (userData.message === 'Wrong password') {
         setWrongCredentials('--wrong-password')
         setErrorMessage(userData.message)
      }
      else if (userData.message === 'A user with this email couldn\'t be found') {
         setWrongCredentials('--wrong-email')
         setErrorMessage(userData.message)
      }
      else if (userData.token !== '' || token !== null){
         history.push('/userDashboard')
      }
   }, [ userData ])

   return (
      <>
         <p className="login-modal__container--form--title">Login</p>
         <form
            className="login-modal__container--form--inputs"
            onSubmit={(event: FormEvent<HTMLElement>): void => {
               event.preventDefault()
               dispatch(loginUser(email, password))
            }}>
            <input
               className={`login-modal__container--form--inputs--input login-modal__container--form--inputs--input${wrongCredentials === '--wrong-email' ? wrongCredentials : ''}`}
               placeholder="Email"
               type="email"
               name="email"
               onChange={(event: FormEvent<HTMLInputElement>): void => {
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
               onChange={(event: FormEvent<HTMLInputElement>): void => {
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
         </form>
      </>)
}


const SignupForm: FormComponent = ({ setForm }: IFormComponent): JSX.Element => {
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
            onSubmit={async (event: FormEvent<HTMLElement>) => {
               event.preventDefault()
               const { status, data } = await signupUser(firstName, lastName, email, password)
               status === 405 && setFormMessage(data.message)
               status === 200 && setFormMessage(data.message) && setTimeout(() => setForm('login'), 2000)
            }}>
            <input
               className="login-modal__container--form--inputs--input"
               placeholder="First Name"
               type="text"
               name="firstname"
               onChange={(event: FormEvent<HTMLInputElement>): void => {
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
                   onChange={(event: FormEvent<HTMLInputElement>): void => {
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
               onChange={(event: FormEvent<HTMLInputElement>): void => {
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
               onChange={(event: FormEvent<HTMLInputElement>): void => {
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
                  onChange={(event: FormEvent<HTMLElement>): void => {
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