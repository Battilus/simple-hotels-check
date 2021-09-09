import React from "react";
import style from "./hotels.module.scss"
import {useDispatch} from "react-redux";
import {signOut} from "../../redux/auth/auth-actions";


const Hotels = () => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(signOut());
    }

    return (
        <div className={style.wrapper}>
            Hotels
            <button onClick={logOut}>Sign out</button>
        </div>
    )
}


export default Hotels;