import {combineReducers, createStore} from "redux";
import authorizationReducer from "./authorization-reducer";


let reducers = combineReducers({
    authorization: authorizationReducer,
})

let store = createStore(reducers)

export default store;