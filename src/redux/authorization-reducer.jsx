import {validateUserdata} from "../feauters/login/login";

const SIGN_IN = "SIGN-IN"
const SIGN_OUT = "SIGN-OUT"
const UPDATE_EMAIL_FIELD = "UPDATE-EMAIL-FIELD"
const UPDATE_PASSWORD_FIELD = "UPDATE-PASSWORD-FIELD"


let initialState = {
    users: [
        {
            id: 0,
            userEmail: '',
            userPassword: ''
        }
    ],
    errors: {
        email: '',
        password: '',
    },
    loggedIn: false,
}

const authorizationReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_EMAIL_FIELD:
            return {...state, userEmail: action.payload}

        case UPDATE_PASSWORD_FIELD:
            return {...state, userPassword: action.payload}

        case SIGN_IN:
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

        case SIGN_OUT:
            return {...state, loggedIn: false}

        default:
            return {...state}
    }
}


// export const updateEmailFieldAc = (payload) => ({type:UPDATE_EMAIL_FIELD, payload})
// export const updatePasswordFieldAc = (payload) => ({type:UPDATE_PASSWORD_FIELD, payload})
export const signInAc = (payload) => ({type: SIGN_IN, payload})
export const signOutAc = () => ({type: SIGN_OUT})

export default authorizationReducer;