import { Actions } from "../../utils/constants"
import { IToggleSettingsMenu } from "../../shared/interfaces/userView"
import { Reducer } from "../../shared/types"


const toggleMenuReducer: Reducer<boolean, IToggleSettingsMenu> = (state: boolean = false, action: IToggleSettingsMenu): boolean => {
   const { type, payload } = action
   switch (type) {
      case Actions.TOGGLE_MENU:
         return !payload
      default:
         return state
   }
}

export default toggleMenuReducer
