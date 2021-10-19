import { IProps } from "./interfaces/userView";


export type JSXArrayElements = () => JSX.Element[]
export type Icon = (props: IProps) => JSX.Element
export type Reducer<T, R> = (state: T, action: R) => T