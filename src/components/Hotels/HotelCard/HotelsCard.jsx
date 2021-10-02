import React from "react";
import style from "./hotelsCard.module.scss"
import {useSelector} from "react-redux";
import HotelsBody from "./HotelsBody";
import {CircularProgress} from "@mui/material";


const HotelsCard = () => {

    const fetching = useSelector(state => state.hotels.fetchingStatus)
    const requestStatus = useSelector(state => state.hotels.requestStatus)
    const errorMessage = useSelector(state => state.hotels.errorMessage)

    return (
        <div className={style.hotels}>
            {(fetching)?
                <div className={style.fetching}><CircularProgress color="success" /></div> :
                (requestStatus === 'error') ?
                    <span className={style.error}>{errorMessage}</span> : <HotelsBody />
            }
        </div>
    )
}


export default HotelsCard;