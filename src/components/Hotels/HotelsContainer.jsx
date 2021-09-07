import {connect} from "react-redux";
import {signOutAc} from "../../redux/authorization/authorization-reducer";
import NwrpHotels from "./Hotels";


const mapStateToProps = (state) => {
    return {
        loggedIn: state.authorization.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOutAc());
        },
    }
}

const Hotels = connect(mapStateToProps, mapDispatchToProps)(NwrpHotels);

export default Hotels;