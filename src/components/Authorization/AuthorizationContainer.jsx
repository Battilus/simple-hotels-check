import {connect} from "react-redux";
import {
    updateEmailFieldAc,
    updatePasswordFieldAc,
    signInAc,
    signOutAc
} from "../../redux/authorization-reducer";
import Authorization from "./Authorization";


const mapStateToProps = (state) => {
    return {
        userEmail: state.authorization.userEmail,
        userPassword: state.authorization.userPassword,
        errors: state.authorization.errors,
        loggedIn: state.authorization.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmailField: (payload) => {
            dispatch(updateEmailFieldAc(payload));
        },
        updatePasswordField: (payload) => {
            dispatch(updatePasswordFieldAc(payload));
        },
        signIn: () => {
            dispatch(signInAc());
        },
        signOut: () => {
            dispatch(signOutAc());
        },
    }
}

const WrappedAuthorization = connect(mapStateToProps, mapDispatchToProps)(Authorization);

export default WrappedAuthorization;