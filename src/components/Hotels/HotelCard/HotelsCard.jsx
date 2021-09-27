import React from "react";
import style from "../hotels.module.scss"
import {useSelector} from "react-redux";
import HotelsBody from "./HotelsBody";
import {CircularProgress} from "@mui/material";


const HotelsCard = () => {

    const fetching = useSelector(state => state.hotels.fetchingStatus)

    return (
        <div className={style.hotels}>
            {(fetching)?
                <CircularProgress color="success" /> :
                <HotelsBody />
            }
        </div>
    )
}


export default HotelsCard;