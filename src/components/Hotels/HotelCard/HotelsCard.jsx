import React from "react";
import style from "../hotels.module.scss"
import {useSelector} from "react-redux";
import GreenCircularProgress from "../../../feauters/UI/hotels/GreenCircularProgressBar";
import HotelsBody from "./HotelsBody";


const HotelsCard = () => {

    const fetching = useSelector(state => state.hotels.fetchingStatus)

    return (
        <div className={style.hotels}>
            {(fetching)?
                <GreenCircularProgress/> :
                <HotelsBody />
            }
        </div>
    )
}


export default HotelsCard;