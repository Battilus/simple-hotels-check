import {combineReducers, createStore} from "redux";
import authorizationReducer from "./authorization/authorization-reducer";


let reducersList = combineReducers({
    authorization: authorizationReducer,
})

let store = createStore(reducersList)

window.store = store;

export default store;