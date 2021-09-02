import {validateUserdata} from "../feauters/login/login";

const SIGN_IN = "SIGN-IN"
const SIGN_OUT = "SIGN-OUT"
const UPDATE_EMAIL_FIELD = "UPDATE-EMAIL-FIELD"
const UPDATE_PASSWORD_FIELD = "UPDATE-PASSWORD-FIELD"


let initialState = {
    errors: {
        email: '',
        password: '',
    },
    userEmail: '',
    userPassword: '',
    loggedIn: false,
}

const authorizationReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_EMAIL_FIELD:
            return {...state, userEmail: action.payload}

        case UPDATE_PASSWORD_FIELD:
            return {...state, userPassword: action.payload}

        case SIGN_IN:
            let status = validateUserdata({
                email:state.userEmail,
                password:state.userPassword}
            )
            if (status.isValid) {
                return {
                    ...state,
                    errors: status.errors,
                    loggedIn: true
                }
            } else {
                return {
                    ...state,
                    errors: status.errors,
                    loggedIn: false
                }
            }

        case SIGN_OUT:
            return {...state, loggedIn: false}

        default:
            return {...state}
    }
}


export const updateEmailFieldAc = (payload) => ({type:UPDATE_EMAIL_FIELD, payload})
export const updatePasswordFieldAc = (payload) => ({type:UPDATE_PASSWORD_FIELD, payload})
export const signInAc = () => ({type:SIGN_IN})
export const signOutAc = () => ({type:SIGN_OUT})

export default authorizationReducer;