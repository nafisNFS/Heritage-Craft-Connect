const GET_NOTIFICATION_REQUEST = "get notification"
const GET_NOTIFICATION_ERROR = "error to get notification"
const GET_NOTIFICATION_SUCCESS = "successfully get the data"

const initialState = {
    info: [],
    isLoading: false,
    error:false

}
const getNotification = (state=initialState,action)=>{
    switch (action.type) {
        case GET_NOTIFICATION_REQUEST:
            return {
                ...state,
                isLoading: true,

            }
        case GET_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isLoading:false,
                info:action.payload
            }
        case GET_NOTIFICATION_ERROR:
            return {
                ...state,
                isLoading:false,
                error: action.payload
            }
        default:
            return state;
    }
}
export default getNotification;
