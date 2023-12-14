import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import reducefn from '../Reducers/multiple.jsx'
import toggleNotificationReducer from '../Reducers/toggleNotificationReducer.jsx'

const store = createStore(reducefn,applyMiddleware(thunk));

export default store