import * as React from 'react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useHistory } from 'react-router-dom'


interface ILoginModalProps {
  showModal: boolean
  toggleModal: () => void
}

interface IFormComponent {
  toggleModal: () => void
  setForm: Dispatch<SetStateAction<string>>
}

type LoginModal = ({ showModal, toggleModal }: ILoginModalProps) => JSX.Element
type FormComponent = ({ toggleModal, setForm }: IFormComponent) => JSX.Element

const LoginModal: LoginModal = ({ showModal, toggleModal }): JSX.Element => {
  const [ form, setForm ] = useState<string>('login')
  return (
    <>
      <div
        onClick={toggleModal}
        className={`login-modal__wrap ${showModal ? '' : 'hidden'}`}/>
      <div className={`login-modal__container ${showModal ? '' : 'hidden'}`}>
        <a
          onClick={toggleModal}
          className="login-modal__container--close">
          <img
            src="/images/cancel.svg" alt="close"
            className="login-modal__container--close--icon"/>
        </a>
        <div className={`login-modal__container--form ${showModal ? '' : 'hidden'}`}>
          {
            form === 'login'
              ? <LoginForm toggleModal={toggleModal} setForm={setForm}/>
              : <SignupForm toggleModal={toggleModal} setForm={setForm}/>
          }
        </div>
      </div>
    </>)
}


const LoginForm: FormComponent = (props: IFormComponent): JSX.Element => {
  const history = useHistory()
  const { toggleModal, setForm } = props
  return (
    <>
      <p className="login-modal__container--form--title">Login</p>
      <form
        className="login-modal__container--form--inputs"
        action="">
        <input
          className="login-modal__container--form--inputs--input"
          placeholder="Email"
          type="email"
          name="email"/>
        <label
          className="login-modal__container--form--inputs--label"
          htmlFor="email">
          Email
        </label>
        <input
          className="login-modal__container--form--inputs--input"
          placeholder="Password"
          type="password"
          name="password"/>
        <label
          className="login-modal__container--form--inputs--label"
          htmlFor="password">
          Password
        </label>
        <div className="login-modal__container--form--inputs--buttons">
          <button
            onClick={() => {
              toggleModal()
              history.push('/login')
            }}
            className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--login">
            Login
          </button>
          <a
            onClick={() => setForm('signup')}
            className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--signup">
            Sign Up
          </a>
        </div>
      </form>
    </>)
}

const SignupForm: FormComponent = (props: IFormComponent): JSX.Element => {

  const { toggleModal, setForm } = props
  return (
  <>
    <p className="login-modal__container--form--title">Sign Up</p>
    <form
      className="login-modal__container--form--inputs"
      action="get">
      <input
        className="login-modal__container--form--inputs--input"
        placeholder="First Name"
        type="text"
        name="firstname"/>
      <label
        className="login-modal__container--form--inputs--label login-modal__container--form--inputs--label--firstname"
        htmlFor="email">
        First name
      </label>
      <input className="login-modal__container--form--inputs--input"
             placeholder="Last Name"
             type="text"
             name="lastname"/>
      <label
        className="login-modal__container--form--inputs--label login-modal__container--form--inputs--label--lastname"
        htmlFor="email">
        Last name
      </label>
      <input
        className="login-modal__container--form--inputs--input"
        placeholder="Email"
        type="email"
        name="email"/>
      <label
        className="login-modal__container--form--inputs--label"
        htmlFor="email">
        Email
      </label>
      <input
        className="login-modal__container--form--inputs--input"
        placeholder="Password"
        type="password"
        name="password"/>
      <label
        className="login-modal__container--form--inputs--label"
        htmlFor="password">
        Password
      </label>
      <div className="login-modal__container--form--inputs--buttons">
        <a
          onClick={() => setForm('login')}
          className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--signup">
          Login
        </a>
        <button
          onClick={toggleModal}
          className="login-modal__container--form--inputs--button login-modal__container--form--inputs--button--login">
          Sign Up
        </button>
      </div>
    </form>
  </>)
}
export default LoginModal