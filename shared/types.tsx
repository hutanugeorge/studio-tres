import { AxiosResponse } from "axios"

import { IIconProps } from "./interfaces/userView"


export type JSXArrayElements = () => JSX.Element[]
export type JSXElement = () => JSX.Element
export type Icon = (props: IIconProps) => JSX.Element
export type Reducer<T, R> = (state: T, action: R) => T
export type PostRequest<T> = (args: T) => Promise<AxiosResponse>