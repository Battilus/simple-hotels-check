import {createAction} from "@reduxjs/toolkit";


export const updateEmailField = createAction('UPDATE_USER_EMAIL_FIELD')
export const updatePasswordField = createAction('UPDATE_USER_PASSWORD_FIELD')
export const signIn = createAction('SIGN_IN')
export const signOut = createAction('SIGN_OUT')