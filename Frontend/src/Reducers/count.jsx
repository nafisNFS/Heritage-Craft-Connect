
const initialState = {
    numOfCakes:10
}
const reducefn = (state =initialState,action)=>{
    switch(action.type) {
        case "INC": return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
export default reducefn