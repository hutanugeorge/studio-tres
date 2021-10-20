export interface IUserViewAction {
   type: string
   payload: string
}

export interface IToggleSettingsMenu {
   type: string
   payload: boolean
}

export interface IIconProps {
   active: boolean
}