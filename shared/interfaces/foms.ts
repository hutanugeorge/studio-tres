export interface IFormError{
   readonly location: string
   readonly msg: string
   readonly param: string
   readonly value: string
}

export interface IFormErrors {
   readonly firstName?: string
   readonly lastName?: string
   readonly email?: string
   readonly password?: string
   readonly repeatPassword?: string
}