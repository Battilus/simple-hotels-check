import React from "react";
import style from "./hotels.module.scss"


const NwrpHotels = (props) => {

    const logOut = () => {
        props.signOut();
    }

    return (
        <div className={style.wrapper}>
            Hotels
            <button onClick={logOut}>Sign out</button>
        </div>
    )
}


export default NwrpHotels;