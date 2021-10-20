import { IIconProps } from "./interfaces/userView";


export type JSXArrayElements = () => JSX.Element[]
export type Icon = (props: IIconProps) => JSX.Element
export type Reducer<T, R> = (state: T, action: R) => T