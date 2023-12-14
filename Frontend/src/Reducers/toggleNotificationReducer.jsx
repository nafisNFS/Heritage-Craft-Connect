const initialState = {
    toggle: false
}
const toggleNotificationReducer = (state = initialState , action)=>{
    switch(action.type) {
        case "TOGGLE_NOTIFICATION": return {
            ...state,
            toggle: !(state.toggle)
        }
        default:return state
    }
}
export default toggleNotificationReducer