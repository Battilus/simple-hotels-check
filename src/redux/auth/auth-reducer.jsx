import {createReducer} from "@reduxjs/toolkit";
import {validateUserdata} from "../../feauters/logic/login";
import {signIn, signOut, updateEmailField, updatePasswordField} from "./auth-actions";
import {saveLocalState} from "../local-storage";


const authReducer = createReducer({}, builder => {
    builder.addCase(updateEmailField, (state, action) => {
        state.forms.userEmail = action.payload.email
    })
    builder.addCase(updatePasswordField, (state, action) => {
        state.forms.userPassword = action.payload.password
    })
    builder.addCase(signIn, (state, action) => {
        let status = validateUserdata({
                email: action.payload.userEmail,
                password: action.payload.userPassword
            }
        )
        state.errors = status.errors
        state.forms.userPassword = ''
        state.loggedIn = status.isValid
        if (status.isValid) {
            state.forms.userEmail = ''
            saveLocalState(true, 'loggedIn')
        }
    })
    builder.addCase(signOut, (state, action) => {
        state.loggedIn = false
        saveLocalState(false, 'loggedIn')
    })
})


export default authReducer;