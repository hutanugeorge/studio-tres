export interface IUserViewAction {
   readonly type: string
   readonly  payload: string
}

export interface IToggleSettingsMenu {
   readonly  type: string
   readonly payload: boolean
}

export interface IIconProps {
   readonly active: boolean
}