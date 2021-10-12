import { Actions } from "../../utils/constants";
import { IToggleSettingsMenu } from "../../shared/interfaces/userView";


type ToggleMenuReducer = (state: boolean, action: IToggleSettingsMenu) => boolean


const toggleMenuReducer: ToggleMenuReducer = (state: boolean = false, { type, payload }: IToggleSettingsMenu) => {
   switch (type) {
      case Actions.TOGGLE_MENU:
         return !payload
      default:
         return state
   }
}

export default toggleMenuReducer
