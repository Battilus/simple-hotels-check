import {connect} from "react-redux";
import {signInAc, signOutAc} from "../../redux/authorization-reducer";
import Authorization from "./Authorization";


const mapStateToProps = (state) => {
    return {
        errors: state.authorization.errors,
        emailIsValid: state.authorization.emailIsValid,
        passwordIsValid: state.authorization.passwordIsValid,
        loggedIn: state.authorization.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (payload) => {
            dispatch(signInAc(payload));
        },
        signOut: () => {
            dispatch(signOutAc());
        },
    }
}

const WrappedAuthorization = connect(mapStateToProps, mapDispatchToProps)(Authorization);

export default WrappedAuthorization;