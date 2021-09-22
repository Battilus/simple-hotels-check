import React from "react";
import style from "../hotels.module.scss"
import {useSelector} from "react-redux";
import GreenCircularProgress from "../../../feauters/hotels/GreenCircularProgressBar";
import HotelsBody from "./HotelsBody";


const HotelsCard = () => {

    const fetching = useSelector(state => state.hotels.fetchingStatus)
    // console.log("fetching:",fetching)

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