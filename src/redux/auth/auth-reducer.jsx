import {createReducer} from "@reduxjs/toolkit";
import {validateUserdata} from "../../feauters/login/login";
import {signIn, signOut} from "./auth-actions";


const authReducer = createReducer({}, builder => {
    builder.addCase(signIn, (state, action) => {
        let status = validateUserdata({
                email: action.payload.userEmail,
                password: action.payload.userPassword
            }
        )
        if (status.isValid) {
            return {
                ...state,
                errors: status.errors,
                emailIsValid: status.emailIsValid,
                passwordIsValid: status.passwordIsValid,
                loggedIn: true
            }
        } else {
            return {
                ...state,
                errors: status.errors,
                emailIsValid: status.emailIsValid,
                passwordIsValid: status.passwordIsValid,
                loggedIn: false
            }
        }
    })
    builder.addCase(signOut, (state, action) => {
        return {...state, loggedIn: false}
    })
})


export default authReducer;