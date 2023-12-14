import { combineReducers } from "redux";
import countTheNumber from "../Reducers/count.jsx"
import toggleNotificationReducer from "../Reducers/toggleNotificationReducer.jsx"
import notificaationReducer from "../Reducers/notificaationReducer.jsx"
import getCommunity from "./communityReducer.jsx";
const rootReducer = combineReducers({
    countTheNumber,
    toggle:toggleNotificationReducer,
    notificationvalue:notificaationReducer,
    communityValue:getCommunity
})
export default rootReducer