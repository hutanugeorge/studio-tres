import { IProps, IToggleSettingsMenu, IUserViewAction } from "./interfaces/userView";


export type JSXElement = () => JSX.Element
export type JSXArrayElements = () => JSX.Element[]
export type SetUserView = () => IUserViewAction
export type ToggleSettingsMenu = (isOpen: boolean) => IToggleSettingsMenu
export type Icon = (props: IProps) => JSX.Element