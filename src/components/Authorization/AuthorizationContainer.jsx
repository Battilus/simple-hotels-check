import {connect} from "react-redux";
import {signInAc, signOutAc} from "../../redux/authorization/authorization-reducer";
import NwrpAuthorization from "./Authorization";


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

const Authorization = connect(mapStateToProps, mapDispatchToProps)(NwrpAuthorization);

export default Authorization;