// import {combineReducers, createStore} from "redux";
import authReducer from "./auth/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";


const preloadedState = {
    auth: {
        errors: {
            email: '',
            password: '',
        },
        emailIsValid: false,
        passwordIsValid: false,
        loggedIn: false,
    }
}


const store = configureStore({
    reducer: {
        auth: authReducer
    },
    preloadedState
})

window.store = store;

export default store;