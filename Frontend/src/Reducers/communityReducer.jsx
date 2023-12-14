const GET_COMMUNITY_REQUEST = "get community"
const GET_COMMUNITY_ERROR = "error to get community data"
const GET_COMMUNITY_SUCCESS = "successfully get the data"


const initialState = {
    data: [],
    isLoading: false,
    error:false

}
const getCommunity = (state=initialState,action)=>{
    switch (action.type) {
        case GET_COMMUNITY_REQUEST:
            return {
                ...state,
                isLoading: true,

            }
        case GET_COMMUNITY_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data:action.payload
            }
        case GET_COMMUNITY_ERROR:
            return {
                ...state,
                isLoading:false,
                error: action.payload
            }
        default:
            return state;
    }
}
export default getCommunity;
