import React from "react";
import style from "./hotelsCard.module.scss"
import {useSelector} from "react-redux";
import {CircularProgress} from "@mui/material";


const ImageSlider = (props) => {

    const photosIdBox = useSelector(state => state.hotels.photosID)

    let photosUrls = (Object.keys(photosIdBox).length > 1) ?
        photosIdBox.map(item => <img key={item.id} src={item} alt='some item'/>) :
        <CircularProgress color="success"/>

    return (
        <div className={style.imageSlider}>
            {photosUrls}
        </div>
    )
}


export default ImageSlider;